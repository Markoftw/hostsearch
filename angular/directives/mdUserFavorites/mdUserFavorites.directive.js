class MdUserFavoritesController{
    constructor($scope, LoggingService, API, ToastService) {
        'ngInject';

        this.LogginService = LoggingService;
        this.API = API;

        $scope.loading = true;
        $scope.servers = [];

        let url = 'favorites/dedicated/all';

        if($scope.title === 'Cloud') {
            url = 'favorites/cloud/all';
        } else if ($scope.title === 'Virtual') {
            url = 'favorites/vps/all';
        }

        API.one(url).get()
            .then((response) => {
                $scope.servers = response.data.data;
                $scope.loading = false;
            }, (error) => {
                $scope.loading = false;
                //ToastService.error("Error: request returned status " + error);
            });
    }

    deleteServer(type, id) {
        this.LogginService.log("delete: " + type + " " + id);
    }

    viewServer(type, id) {
        this.LogginService.log("view: " + type + " " + id);
    }
    
    deleteAll(type){
        this.LogginService.log("delete all: " + type);
    }
}

export function MdUserFavoritesDirective(){
    return {
        restrict: 'EA',
        controller: MdUserFavoritesController,
        controllerAs: 'ctrl',
        scope: {
            title: '@' // @ Attr binding (string) , = two-way (model), & callback (model)
        },
        templateUrl: './views/directives/mdUserFavorites/mdUserFavorites.html',
        link: function (scope, element, attrs, controllers) {
            scope.title = attrs.title;
        }
    }
}
