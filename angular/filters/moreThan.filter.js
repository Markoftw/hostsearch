export function MoreThanFilter() {
    'ngInject';

    return function (input, val) {

        //return input[prop] >= val;
        var output = [];
        if(val) {
            angular.forEach(input, function (item) {
                if (item.server_price <= val.priceSlider && item.ram_size >= val.ramSlider && item.hdd_size >= val.hddSlider && item.cpu_power >= val.cpuSlider && item.bandwidth_tb >= val.bwSlider) {
                    output.push(item)
                }
            });
        } else {
            return output;
        }
        return output;

        /*var output = [];
        if (isNaN(val)) { //??
            output = input;
        } else {
            angular.forEach(input, function (item) {
                if (item[prop] >= val) {
                    output.push(item)
                }
            });
        }
        return output;*/
    }

}