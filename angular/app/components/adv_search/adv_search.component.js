class AdvSearchController{
    constructor($scope, API, LoggingService, ToastService, $window){
        'ngInject';

        this.$scope = $scope;
        this.API = API;
        this.LoggingService = LoggingService;
        this.ToastService = ToastService;
        this.$window = $window;

        this.servers = '';
        this.loaded = false;

        this.sliders = {priceSlider: 500, ramSlider: 0.5, hddSlider: 120, cpuSlider: 0.5, bwSlider: 1};
        this.locations = {europe: false, america: false, asia: false, other: false};
        this.ram = {ddr4: false, ddr3: false, ecc: false};
        this.hdd = {ssd: false, hdd: false, hybrid: false};
        this.platform = {unix: false, windows: false, macintosh: false, other: false};

    }

    $onInit () {
        this.API.one('show/dedicated').get()
            .then((response) => {
                this.servers = response.data.data;
                this.loaded = true;
                this.pageLimit = 5;
                this.currPage = 0;
            }, (error) => {
                this.ToastService.error("Server list could not be loaded");
                this.LoggingService.warn(error);
            });
    }

    addPage () {
        this.currPage = this.currPage + 1;
        //this.$window.scrollTo(0,0);
    }

    totalPages(items) {
        let pages = Math.ceil(items/this.pageLimit);
        if(this.currPage >= pages) {
            this.currPage = 0;
        }
        return pages;
    }
}

export const AdvSearchComponent = {
    templateUrl: './views/app/components/adv_search/adv_search.component.html',
    controller: AdvSearchController,
    controllerAs: 'vm',
    bindings: {}
};