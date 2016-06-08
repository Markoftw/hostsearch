class AuthButtonsController {
    constructor(DialogService, ToastService, UserService, LoggingService, $localStorage, $state, $auth, $window, API) {
        'ngInject';
        this.$state = $state;
        this.DialogService = DialogService;
        this.localStorage = $localStorage;
        this.ToastService = ToastService;
        this.$auth = $auth;
        this.UserService = UserService;
        this.LoggingService = LoggingService;
        this.$window = $window;
        this.API = API;
    }

    $onInit() {
        this.isLogged = false;
        let token = this.$window.localStorage.satellizer_token;
        if (token) {
            this.LoggingService.info("Token found, authorization processing...");
            let check_token = this.$auth.getPayload();
            //this.LoggingService.debug(check_token.exp);
            if (check_token.exp > Math.floor(Date.now() / 1000)) {
                this.API.one('profile/username').get()
                    .then((response) => {
                        this.UserService.setUsername(response.data.data.username);
                        this.isLogged = true;
                    });
            } else {
                this.$auth.removeToken();
                this.ToastService.show('Welcome back!');
                this.isLogged = true;
            }
        } else {
            //this.LoggingService.warn("No token found.");
            this.isLogged = true;
        }
    }

    mdLogin() {
        this.DialogService.fromTemplate("login");
    }

    mdLogout() {
        this.$auth.removeToken();
        if (this.$state.includes('app.profile') || this.$state.includes('app.admin')) {
            this.$state.go('app.landing');
        }
        this.ToastService.error('You have been logged out!');
    }

    mdRegister() {
        this.DialogService.fromTemplate("register");
    }

    getWelcome() {
        var msg = function () {
            var msg, now = new Date();
            if (now.getHours() >= 0 && now.getHours() <= 11) {
                msg = "Good morning";
            } else if (now.getHours() >= 12 && now.getHours() <= 17) {
                msg = "Good afternoon";
            } else {
                msg = "Good evening";
            }
            return msg;
        };

        return msg() + ', ' + this.UserService.getUsername();
    }
}

export const AuthButtonsComponent = {
    templateUrl: './views/app/components/auth_buttons/auth_buttons.component.html',
    controller: AuthButtonsController,
    controllerAs: 'vm',
    bindings: {}
};