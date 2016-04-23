class SidenavButtonController {
    constructor(SidenavService) {
        'ngInject';

        this.SidenavService = SidenavService;
    }

    toggleFilter(sideId) {
        this.SidenavService.open(sideId);
    }

}

export const SidenavButtonComponent = {
    templateUrl: './views/app/components/sidenav_button/sidenav_button.component.html',
    controller: SidenavButtonController,
    controllerAs: 'vm',
    bindings: {}
}


