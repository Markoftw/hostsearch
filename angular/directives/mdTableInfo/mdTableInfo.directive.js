class MdTableInfoController {
    constructor($scope, LoggingService) {
        'ngInject';

        this.LogginService = LoggingService;

        $scope.servers = [
            {name: 'serv1', price: 1},
            {name: 'serv2', price: 2},
            {name: 'serv3', price: 3},
            {name: 'serv4', price: 4},
            {name: 'serv5', price: 5},
            {name: 'serv6', price: 6}
        ];

        LoggingService.debug($scope.title);

    }

    deleteServer(type, id) {
        this.LogginService.log("delete: " + type + " " + id);
    }
    
    editServer(type, id) {
        this.LogginService.log("edit: " + type + " " + id);
    }
    
    createNew(type) {
        this.LogginService.log("new: " + type);
    }

    promoteServer() {

    }

    demoteServer() {

    }

    hideServer() {

    }

    unhideServer() {

    }
}

export function MdTableInfoDirective(){
    return {
        restrict: 'EA',
        controller: MdTableInfoController,
        controllerAs: 'ctrl',
        scope: {
            title: '@' // @ Attr binding (string) , = two-way (model), & callback (model)
        },
        templateUrl: './views/directives/mdTableInfo/mdTableInfo.html',
        link: function(scope, element, attrs, controllers){
            scope.title = attrs.title;
            element.on('click', function () {
                //element.html('You clicked me!');
                //console.log(attrs.title);
            });
        }
    }
}
