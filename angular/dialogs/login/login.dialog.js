export class LoginDialogController {
    constructor($auth, ToastService, UserService, LoggingService, DialogService, $window, $state) {
        'ngInject';

        this.$auth = $auth;
        this.ToastService = ToastService;
        this.UserService = UserService;
        this.LoggingService = LoggingService;
        this.DialogService = DialogService;
        this.$window = $window;
        this.$state = $state;
    }

    $onInit() {
        this.usermail = '';
        this.userpass = '';
        this.LoggingIn = false;
    }

    login() {

        this.LoggingIn = true;

        let user = {
            email: this.usermail,
            password: this.userpass
        };

        this.$auth.login(user)
            .then((response) => {
                this.LoggingIn = false;
                this.$auth.setToken(response.data);
                this.UserService.setUsername(response.data.data.user.name);
                //this.LoggingService.info(response.data.data.user.name);
                this.ToastService.show('Logged in successfully.');
                this.DialogService.hide();
                this.$state.go('app.landing');
                //this.$window.location.reload();
            })
            .catch(this.failedLogin.bind(this));
    }

    failedLogin(response) {
        if (response.status === 422) {
            for (let error in response.data.errors) {
                this.LoggingIn = false;
                return this.ToastService.error(response.data.errors[error][0]);
            }
        }
        this.LoggingIn = false;
        this.ToastService.error(response.statusText);
    }

    cancel() {
        this.DialogService.hide();
    }
}

