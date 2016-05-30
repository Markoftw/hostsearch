class ProfileSettingsController{
    constructor(API, ToastService, $state){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
        this.$state = $state;
    }

    $onInit(){

    }
    
    resetPassword() {
        let passwords = {
            current_password: this.current_password,
            password: this.password,
            password_confirmation: this.password_confirmation
        };

        this.API.all('auth/password/change').post(passwords).then(() => {
            this.ToastService.show('Your password has been changed!');
            this.$state.go('app.profile');
        }, (error) => {
            if (error.status === 400) {
                this.ToastService.error(error.data.errors.message[0]);
            }
        });
    }
}

export const ProfileSettingsComponent = {
    templateUrl: './views/app/components/profile_settings/profile_settings.component.html',
    controller: ProfileSettingsController,
    controllerAs: 'vm',
    bindings: {}
};
