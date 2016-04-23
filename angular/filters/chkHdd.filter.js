export function ChkHddFilter(){
    'ngInject';

    return function(input, checkbox) {
        var filtered = [];

        if(checkbox) {
            angular.forEach(input, function (item) {
                if (checkbox.ssd == false && checkbox.hdd == false && checkbox.hybrid == false) {
                    filtered.push(item);
                }
                else if (checkbox.ssd == true && (item.hddtype == 'ssd')) {
                    filtered.push(item);
                }
                else if (checkbox.hdd == true && item.hddtype == 'hdd') {
                    filtered.push(item);
                }
                else if (checkbox.hybrid == true && item.hddtype == 'hybrid') {
                    filtered.push(item);
                }
            });
        } else {
            return filtered;
        }

        return filtered;
    };
}