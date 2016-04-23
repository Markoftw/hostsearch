export function RoutesRun($rootScope, $state, $auth) {
    'ngInject';

    let deregisterationCallback =  $rootScope.$on("$stateChangeStart", function(event, toState) {

        if (toState.data && toState.data != null) {
            if(toState.data.auth) {
                /*Cancel going to the authenticated state and go back to the login page*/
                if (!$auth.isAuthenticated()) {
                    event.preventDefault();
                    return $state.go('app.login');
                }
            }
            if(toState.data.disabledOnLogin) {
                if ($auth.isAuthenticated()) {
                    event.preventDefault();
                    return $state.go('app.profile');
                }
            }
        }

    });
    $rootScope.$on('$destroy', deregisterationCallback)
}
