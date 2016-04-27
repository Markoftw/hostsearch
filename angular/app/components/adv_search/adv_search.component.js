class AdvSearchController{
    constructor($scope, API, LoggingService, ToastService){
        'ngInject';

        this.API = API;
        this.LoggingService = LoggingService;
        this.ToastService = ToastService;

        /*this.servers = [
            {"provider":"Hetzner", "price":45, "ram":16, "location":"europe", "cpu":3.4, "hdd":120, "os":"windows", "setupfee":45, "hddtype":"ssd", "ramtype":"ecc", "bw":25},
            {"provider":"OVH", "price":130, "ram":32, "location":"america", "cpu":2.9, "hdd":4000, "os":"linux", "setupfee":50, "hddtype":"hdd", "ramtype":"ddr3", "bw":100},
            {"provider":"Online.net", "price":60, "ram":12, "location":"asia", "cpu":2.6, "hdd":2000, "os":"linux", "setupfee":60, "hddtype":"hybrid", "ramtype":"ddr4", "bw":10},
            {"provider":"Soyoustart", "price":35, "ram":16, "location":"america", "cpu":3.1, "hdd":120, "os":"macintosh", "setupfee":35, "hddtype":"ssd", "ramtype":"ddr4", "bw":100},
            {"provider":"Kimsufi", "price":7, "ram":2, "location":"other", "cpu":1.2, "hdd":500, "os":"linux", "setupfee":5, "hddtype":"hdd", "ramtype":"ddr3", "bw":100}
        ];*/

        this.servers = '';

        this.sliders = {priceSlider: 500, ramSlider: 0.5, hddSlider: 120, cpuSlider: 1.2, bwSlider: 1};
        this.locations = {europe: false, america: false, asia: false, other: false};
        this.ram = {ddr4: false, ddr3: false, ecc: false};
        this.hdd = {ssd: false, hdd: false, hybrid: false};
        this.platform = {unix: false, windows: false, macintosh: false, other: false};

        $scope.morethann = function (server) {
            return (server.price >= 45);
        };
    }

    $onInit () {

        this.API.one('show/dedicated').get()
            .then((response) => {
                //this.LoggingService.debug(response.data.data);
                this.servers = response.data.data;
            }, (error) => {
                this.ToastService.error("Server list could not be loaded");
            });

    }
}

export const AdvSearchComponent = {
    templateUrl: './views/app/components/adv_search/adv_search.component.html',
    controller: AdvSearchController,
    controllerAs: 'vm',
    bindings: {}
};