export function MoreThanFilter() {
    'ngInject';

    return function (input, val) {

        //return input[prop] >= val;
        var output = [];
        if(val) {
            angular.forEach(input, function (item) {
                if (item.price <= val.priceSlider && item.ram >= val.ramSlider && item.hdd >= val.hddSlider && item.cpu >= val.cpuSlider && item.bw >= val.bwSlider) {
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