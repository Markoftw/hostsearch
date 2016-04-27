export function ChkHddFilter(){
    'ngInject';

    return function(input, checkbox) {
        var filtered = [];

        if(checkbox) {
            angular.forEach(input, function (item) {
                if (checkbox.ssd == false && checkbox.hdd == false && checkbox.hybrid == false) {
                    filtered.push(item);
                }
                else if (checkbox.ssd == true && (item.hdd_type).toLowerCase() == 'ssd') {
                    filtered.push(item);
                }
                else if (checkbox.hdd == true && (item.hdd_type).toLowerCase() == 'hdd') {
                    filtered.push(item);
                }
                else if (checkbox.hybrid == true && (item.hdd_type).toLowerCase() == 'hybrid') {
                    filtered.push(item);
                }
            });
        } else {
            return filtered;
        }

        return filtered;
    };
}