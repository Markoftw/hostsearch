class SidenavLeftController{
    constructor(SidenavService){
        'ngInject';
        
        this.SidenavService = SidenavService;
        
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
}


