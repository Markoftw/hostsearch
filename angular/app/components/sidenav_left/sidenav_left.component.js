class SidenavLeftController{
    constructor(SidenavService, UserService){
        'ngInject';
        
        this.SidenavService = SidenavService;
        this.UserService = UserService;
    }
    
    $onInit() {
        //
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
