export function ServerTypesFilter(){
    'ngInject';

    return function(input, val) {
        var output = [];
        if (val) {
            angular.forEach(input, function (item) {
                if (item.server_type === 'dedicated' && val.dedi) {
                    output.push(item)
                }
                else if(item.server_type === 'vps' && val.vps){
                    output.push(item)
                }
                else if(item.server_type === 'cloud' && val.cloud){
                    output.push(item)
                }
            });
        } else {
            return output;
        }
        return output;
    }
}
