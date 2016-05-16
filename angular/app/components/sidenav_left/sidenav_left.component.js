class SidenavLeftController{
    constructor(SidenavService, $auth){
        'ngInject';
        
        this.SidenavService = SidenavService;
        this.$auth = $auth;
    }
    
    $onInit() {
        this.loggedIn = false;
        this.admin = true;
        
        if(this.$auth.isAuthenticated()){
            this.loggedIn = true;
        }
    }

    closeFilter(sideId) {
        this.SidenavService.close(sideId);
    }

}

export const SidenavLeftComponent = {
    templateUrl: './views/app/components/sidenav_left/sidenav_left.component.html',
    controller: SidenavLeftController,
    controllerAs: 'vm',
    bindings: {}
};
