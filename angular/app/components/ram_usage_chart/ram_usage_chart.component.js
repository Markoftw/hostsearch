class RamUsageChartController{
    constructor($scope, $interval, API) {
        'ngInject';

        this.$scope = $scope;
        this.$interval = $interval;
        this.API = API;
    }

    $onInit() {

        this.conf = {
            deepWatchDataDepth: 2,
            refreshDataOnly: false
        };

        this.options = {
            chart: {
                type: 'lineChart',
                height: 250,
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
                yDomain: [-1, 1],
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

        this.data = [{values: [], key: 'RAM usage'}];
        this.run = true;
        var x = (new Date()).getTime();
        var self = this;
        this.$interval(function () {
            if (!self.run) return;
            self.data[0].values.push({
                x: (new Date()).getTime(),
                y: Math.random() - 0.5
            });
            if (self.data[0].values.length > 20) {
                self.data[0].values.shift();
            }
            x++;
            //self.$scope.$apply(); // update chart
        }, 2500);
    }
}

export const RamUsageChartComponent = {
    templateUrl: './views/app/components/ram_usage_chart/ram_usage_chart.component.html',
    controller: RamUsageChartController,
    controllerAs: 'vm',
    bindings: {}
}
