class SystemInfoController{
    constructor($scope, $interval, $q, API, ServerAPIService, $state) {
        'ngInject';

        this.$scope = $scope;
        this.$interval = $interval;
        this.$q = $q;
        this.API = API;
        this.ServerAPIService = ServerAPIService;
        this.$state = $state;
    }

    $onInit() {

        this.conf = {
            deepWatchDataDepth: 2,
            refreshDataOnly: false,
            deepWatchData: true
        };

        this.apiconf = {

        };

        this.options = {
            chart: {
                type: 'lineChart',
                height: 400,
                margin: {
                    top: 40,
                    right: 40,
                    bottom: 40,
                    left: 55
                },
                x: function (d) {
                    return d.x;
                },
                y: function (d) {
                    return d.y;
                },
                useInteractiveGuideline: true,
                showValues: true,
                showLegend: true,
                transitionDuration: 250,
                duration: 0,
                //yDomain: [-1, 1],
                lines: {
                    forceY: [0,100]
                },
                yAxis: {
                    axisLabel: 'Usage (%)',
                    axisLabelDistance: -20,
                    tickFormat: function (d) {
                        return d3.format('.01f')(d);
                    }
                },
                xAxis: {
                    axisLabel: 'Time',
                    type: 'datetime',
                    tickFormat: function (d) {
                        return d3.time.format('%H:%m:%S')(new Date(d))
                    }
                }
            }
        };
        
        this.optionsNumber = angular.copy(this.options);
        this.optionsNumber.chart.yAxis.axisLabel = 'Total (#)';
        this.optionsNumber.chart.lines.forceY = [0];

        this.dataCPU = [{values: [], key: 'CPU usage'}];
        this.dataRAM = [{values: [], key: 'Memory usage'}];
        this.dataHDD = [{values: [], key: 'Storage usage'}];
        this.dataThreads = [{values: [], key: 'Threads'}];
        this.dataUsers = [{values: [], key: 'Logged in users'}];

        this.run = true;
        var self = this;

        var interval = this.$interval(function () {
            if (!self.run || self.$state.current.name != 'app.admin.system') {
                self.$interval.cancel(interval);
                return;
            }

            self.ServerAPIService.apiLoad('server/usage').then((resp) => {

                self.dataCPU[0].values.push({
                    x: (new Date()).getTime(),
                    y: resp.cpu
                });
                self.dataRAM[0].values.push({
                    x: (new Date()).getTime(),
                    y: resp.ram
                });
                self.dataHDD[0].values.push({
                    x: (new Date()).getTime(),
                    y: resp.hdd
                });
                self.dataThreads[0].values.push({
                    x: (new Date()).getTime(),
                    y: resp.threads
                });
                self.dataUsers[0].values.push({
                    x: (new Date()).getTime(),
                    y: resp.users
                });
                if (self.dataCPU[0].values.length > 20) self.dataCPU[0].values.shift();
                if (self.dataRAM[0].values.length > 20) self.dataRAM[0].values.shift();
                if (self.dataHDD[0].values.length > 20) self.dataHDD[0].values.shift();
                if (self.dataThreads[0].values.length > 20) self.dataThreads[0].values.shift();
                if (self.dataUsers[0].values.length > 20) self.dataUsers[0].values.shift();

            });

        }, 5000);

    }
}

export const SystemInfoComponent = {
    templateUrl: './views/app/components/system_info/system_info.component.html',
    controller: SystemInfoController,
    controllerAs: 'vm',
    bindings: {}
};
