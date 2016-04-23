class SidenavLeftController{
    constructor(SidenavService){
        'ngInject';
        this.SidenavService = SidenavService;
        this.toppings = [
            {name: 'Angular JS', wanted: true},
            {name: 'jQuery', wanted: false},
            {name: 'Angular Material', wanted: true},
            {name: 'Lodash', wanted: true},
            {name: 'Cappuccino', wanted: false},
            {name: 'Sproutcore', wanted: false},
            {name: 'Nodejs', wanted: false},
            {name: 'Asana Luna', wanted: false},
            {name: 'Backbone.js', wanted: false},
            {name: 'qooxdoo', wanted: false},
            {name: 'Spine', wanted: false},
            {name: 'ActiveJS', wanted: false},
            {name: 'Eyeballs', wanted: true},
            {name: 'Sammy', wanted: false},
            {name: 'Choco', wanted: true},
            {name: 'Agility', wanted: false},
            {name: 'ExtJS', wanted: false},
            {name: 'Knockout', wanted: false},
            {name: 'Jamal', wanted: false},
            {name: 'PureMVC', wanted: false},
            {name: 'TrimJunction', wanted: false},
            {name: 'CorMVC', wanted: false},
            {name: 'batman', wanted: false}
        ];

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


