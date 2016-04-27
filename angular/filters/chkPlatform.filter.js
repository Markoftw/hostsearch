export function ChkPlatformFilter(){
    'ngInject';

    return function(input, checkbox) {
        var filtered = [];

        if(checkbox) {
            angular.forEach(input, function (item) {
                if (checkbox.unix == false && checkbox.windows == false && checkbox.macintosh == false && checkbox.other == false) {
                    filtered.push(item);
                }
                else if (checkbox.unix == true && ((item.platform_os).toLowerCase() == 'linux' || (item.platform_os).toLowerCase() == 'unix')) {
                    filtered.push(item);
                }
                else if (checkbox.windows == true && (item.platform_os).toLowerCase() == 'windows') {
                    filtered.push(item);
                }
                else if (checkbox.macintosh == true && ((item.platform_os).toLowerCase() == 'macintosh' || (item.platform_os).toLowerCase() == 'osx')) {
                    filtered.push(item);
                }
                else if (checkbox.other == true && (item.platform_os).toLowerCase() == 'other') {
                    filtered.push(item);
                }
            });
        } else {
            return filtered;
        }

        return filtered;
    };
}