export class SidenavService {
    constructor($mdSidenav) {
        'ngInject';
        this.$mdSidenav = $mdSidenav;
    }

    open(sideId) {
        if (!sideId) {
            return false;
        }
        return this.$mdSidenav(sideId).toggle();
    }

    close(sideId) {
        if (!sideId) {
            return false;
        }
        return this.$mdSidenav(sideId).close();
    }

}

