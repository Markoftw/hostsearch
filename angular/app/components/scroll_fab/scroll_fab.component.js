class ScrollFabController{
    constructor(LoggingService, $anchorScroll, $location, $document, $window, $scope){
        'ngInject';

        this.LoggingService = LoggingService;
        this.$anchorScroll = $anchorScroll;
        this.$location = $location;
        this.$document = $document;
        this.$window = $window;
        this.$scope = $scope;
    }

    $onInit(){

    }

    scrollable() {
        let page = this.$window.document.getElementById('top-page').scrollTop;
        return page > 50;
    }

    toTop() {
        //this.$window.scrollTo(0,0);
        //this.$location.hash('top');
        //this.$anchorScroll();
        this.$window.document.getElementById('top-page').scrollTop = 0;
    }
}

export const ScrollFabComponent = {
    templateUrl: './views/app/components/scroll_fab/scroll_fab.component.html',
    controller: ScrollFabController,
    controllerAs: 'vm',
    bindings: {}
};
