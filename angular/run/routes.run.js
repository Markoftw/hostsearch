export function RoutesRun($rootScope, $state, $window, $auth, UserService) {
    'ngInject';

    let deregisterationCallback = $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, options) {

        if (toState.data && toState.data != null) {
            if (toState.data.auth) {
                /* Cancel going to the authenticated state and go back to the login page */
                if (!$auth.isAuthenticated()) {
                    event.preventDefault();
                    return $state.go('app.login');
                }
            }
            if (toState.data.disabledOnLogin) {
                /* Cancel going to login, registration and forgotten password pages after logged in */
                if ($auth.isAuthenticated()) {
                    event.preventDefault();
                    return $state.go('app.profile');
                }
            }
            if (toState.data.admin_protected) {
                /* Cancel going to login, registration and forgotten password pages after logged in */
                if (!$auth.isAuthenticated() && !UserService.isAdmin()) {
                    event.preventDefault();
                    return $state.go('app.landing');
                }
            }
        }

    });
    $rootScope.$on('$destroy', deregisterationCallback);

    /*$rootScope.$on('$stateChangeSuccess',function(){
        if($window.document.getElementById('top-page').scrollTop > 0) {
            $window.document.getElementById('top-page').scrollTop = 0;
        }
    })*/
}
