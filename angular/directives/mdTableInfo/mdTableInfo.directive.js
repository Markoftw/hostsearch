class MdTableInfoController {
    constructor($scope, LoggingService, API, ToastService) {
        'ngInject';

        this.LogginService = LoggingService;
        this.API = API;

        $scope.loading = true;
        $scope.servers = [];
        
        let url = 'dedicated/all';
        
        if($scope.title === 'Cloud') {
            url = 'cloud/all';
        } else if ($scope.title === 'Virtual') {
            url = 'vps/all';
        }
        
        API.one(url).get()
            .then((response) => {
                $scope.servers = response.data.data;
                $scope.loading = false;
            }, (error) => {
                $scope.loading = false;
                ToastService.error("Error: request returned status " + error);
            });
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

export function MdTableInfoDirective() {
    return {
        restrict: 'EA',
        controller: MdTableInfoController,
        controllerAs: 'ctrl',
        scope: {
            title: '@' // @ Attr binding (string) , = two-way (model), & callback (model)
        },
        templateUrl: './views/directives/mdTableInfo/mdTableInfo.html',
        link: function (scope, element, attrs, controllers) {
            scope.title = attrs.title;
            element.on('click', function () {
                //element.html('You clicked me!');
                //console.log(attrs.title);
            });
        }
    }
}
