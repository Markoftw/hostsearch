export class RegisterDialogController {
    constructor($auth, ToastService, DialogService, UserService, $state) {
        'ngInject';

        this.$auth = $auth;
        this.ToastService = ToastService;
        this.DialogService = DialogService;
        this.UserService = UserService;
        this.$state = $state;
    }

    $onInit(){
        this.username = '';
        this.usermail = '';
        this.userpass = '';
    }

    register() {
        let user = {
            name: this.username,
            email: this.usermail,
            password: this.userpass
        };

        this.$auth.signup(user)
            .then((response) => {
                //remove this if you require email verification
                this.$auth.setToken(response.data);
                this.UserService.setUsername(response.data.data.user.name);
                this.ToastService.show('Successfully registered.');
                this.DialogService.hide();
                this.$state.go('app.landing');
            })
            .catch(this.failedRegistration.bind(this));
    }



    failedRegistration(response) {
        if (response.status === 422) {
            for (let error in response.data.errors) {
                this.LoggingIn = false;
                return this.ToastService.error(response.data.errors[error][0]);
            }
        }
        this.ToastService.error(response.statusText);
    }

    cancel() {
        this.DialogService.hide();
    }
}

