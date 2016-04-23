class RegisterFormController {
	constructor($auth, ToastService, UserService, $state) {
		'ngInject';

		this.$auth = $auth;
		this.ToastService = ToastService;
		this.UserService = UserService;
		this.$state = $state;
	}

    $onInit(){
        this.name = '';
        this.email = '';
        this.password = '';
    }

	register() {
		let user = {
			name: this.name,
			email: this.email,
			password: this.password
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
				return this.ToastService.error(response.data.errors[error][0]);
			}
		}
		this.ToastService.error(response.statusText);
	}
}

export const RegisterFormComponent = {
	templateUrl: './views/app/components/register-form/register-form.component.html',
	controller: RegisterFormController,
	controllerAs: 'vm',
	bindings: {}
}
