export function ChkRamFilter(){
    'ngInject';

    return function(input, checkbox) {
        var filtered = [];

        if(checkbox) {
            angular.forEach(input, function (item) {
                if (checkbox.ddr3 == false && checkbox.ddr4 == false && checkbox.ecc == false) {
                    filtered.push(item);
                }
                else if (checkbox.ddr3 == true && (item.ram_type).toLowerCase() == 'ddr3') {
                    filtered.push(item);
                }
                else if (checkbox.ddr4 == true && (item.ram_type).toLowerCase() == 'ddr4') {
                    filtered.push(item);
                }
                else if (checkbox.ecc == true && (item.ram_type).toLowerCase() == 'ecc') {
                    filtered.push(item);
                }
            });
        } else {
            return filtered;
        }

        return filtered;
    };
}