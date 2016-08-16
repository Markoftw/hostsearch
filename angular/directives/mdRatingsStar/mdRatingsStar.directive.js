class MdRatingsStarController{
    constructor($scope){
        'ngInject';

        //let rating = Math.round($scope.rating);

    };
}

export function MdRatingsStarDirective(){
    return {
        restrict: 'EA',
        controller: MdRatingsStarController,
        controllerAs: 'ctrl',
        scope: { // @ Attr binding (string) , = two-way (model), & callback (model)
            rating: '@',
            ratingsize: '@'
        },
        templateUrl: './views/directives/mdRatingsStar/mdRatingsStar.html',
        link: function (scope, element, attrs, controllers) {
            scope.rating = attrs.rating;
            scope.ratingsize = attrs.ratingsize;
        }
    }
}
