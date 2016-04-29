export function ChkLocFilter(){
    'ngInject';

    return function(input, checkbox) {
        var filtered = [];

        if(checkbox) {
            angular.forEach(input, function (item) {
                if (checkbox.europe == false && checkbox.america == false && checkbox.asia == false && checkbox.other == false) {
                    filtered.push(item);
                }
                else if (checkbox.europe == true && (item.location).toLowerCase() == 'europe') {
                    filtered.push(item);
                }
                else if (checkbox.america == true && (item.location).toLowerCase() == 'america') {
                    filtered.push(item);
                }
                else if (checkbox.asia == true && (item.location).toLowerCase() == 'asia') {
                    filtered.push(item);
                }
                else if (checkbox.other == true && (item.location).toLowerCase() == 'other') {
                    filtered.push(item);
                }
            });
        } else {
            return filtered;
        }
        
        return filtered;
    };
}