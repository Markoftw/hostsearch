class ProfileSettingsController{
    constructor(API){
        'ngInject';

        this.API = API;
    }

    $onInit(){

    }
    
    resetPassword() {
        
    }
}

export const ProfileSettingsComponent = {
    templateUrl: './views/app/components/profile_settings/profile_settings.component.html',
    controller: ProfileSettingsController,
    controllerAs: 'vm',
    bindings: {}
};
