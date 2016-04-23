export function ChkPlatformFilter(){
    'ngInject';

    return function(input, checkbox) {
        var filtered = [];

        if(checkbox) {
            angular.forEach(input, function (item) {
                if (checkbox.unix == false && checkbox.windows == false && checkbox.macintosh == false && checkbox.other == false) {
                    filtered.push(item);
                }
                else if (checkbox.unix == true && (item.os == 'linux' || item.os == 'unix')) {
                    filtered.push(item);
                }
                else if (checkbox.windows == true && item.os == 'windows') {
                    filtered.push(item);
                }
                else if (checkbox.macintosh == true && item.os == 'macintosh') {
                    filtered.push(item);
                }
                else if (checkbox.other == true && item.os == 'other') {
                    filtered.push(item);
                }
            });
        } else {
            return filtered;
        }

        return filtered;
    };
}