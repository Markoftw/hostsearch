class LoginFormController {
    constructor($auth, ToastService, UserService, LoggingService,$state) {
        'ngInject';

        this.$auth = $auth;
        this.ToastService = ToastService;
        this.UserService = UserService;
        this.LoggingService = LoggingService;
        this.$state = $state;
    }

    $onInit() {
        this.email = '';
        this.password = '';
    }

    login() {
        let user = {
            email: this.email,
            password: this.password
        };

        this.$auth.login(user)
            .then((response) => {
                this.$auth.setToken(response.data);
                this.UserService.setUsername(response.data.data.user.name);
                //this.LoggingService.info(response.data.data.user.name);
                this.$state.go('app.landing');
                this.ToastService.show('Logged in successfully.');
            })
            .catch(this.failedLogin.bind(this));
    }

    failedLogin(response) {
        if (response.status === 422) {
            for (let error in response.data.errors) {
                return this.ToastService.error(response.data.errors[error][0]);
            }
        }
        this.ToastService.error(response.statusText);
    }
}

export const LoginFormComponent = {
    templateUrl: './views/app/components/login-form/login-form.component.html',
    controller: LoginFormController,
    controllerAs: 'vm',
    bindings: {}
}
