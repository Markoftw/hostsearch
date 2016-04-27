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

        /*angular.forEach(input, function(item) {
         if((checkbox.europe == false && checkbox.america == false && checkbox.asia == false && checkbox.other == false) || (checkbox.europe == true && checkbox.america == true && checkbox.asia == true && checkbox.other == true)) {
         filtered.push(item);
         }
         // 1 of each works
         else if(checkbox.europe == true && checkbox.america == false && checkbox.asia == false && checkbox.other == false && item.location == 'europe'){
         filtered.push(item);
         }
         else if(checkbox.europe == false && checkbox.america == true && checkbox.asia == false && checkbox.other == false && item.location == 'america'){
         filtered.push(item);
         }
         else if(checkbox.europe == false && checkbox.america == false && checkbox.asia == true && checkbox.other == false && item.location == 'asia'){
         filtered.push(item);
         }
         else if(checkbox.europe == false && checkbox.america == false && checkbox.asia == false && checkbox.other == true && item.location == 'other'){
         filtered.push(item);
         }
         // 2 of each
         else if(checkbox.europe == true && checkbox.america == true && checkbox.asia == false && checkbox.other == false && (item.location == 'europe' || item.location == 'america')){
         filtered.push(item);
         }
         else if(checkbox.europe == true && checkbox.america == false && checkbox.asia == true && checkbox.other == false && (item.location == 'europe' || item.location == 'asia')){
         filtered.push(item);
         }
         else if(checkbox.europe == true && checkbox.america == false && checkbox.asia == false && checkbox.other == true && (item.location == 'europe' || item.location == 'other')){
         filtered.push(item);
         }
         else if(checkbox.europe == false && checkbox.america == true && checkbox.asia == true && checkbox.other == false && (item.location == 'america' || item.location == 'asia')){
         filtered.push(item);
         }
         else if(checkbox.europe == false && checkbox.america == true && checkbox.asia == false && checkbox.other == true && (item.location == 'america' || item.location == 'other')){
         filtered.push(item);
         }
         else if(checkbox.europe == false && checkbox.america == false && checkbox.asia == true && checkbox.other == true && (item.location == 'asia' || item.location == 'other')){
         filtered.push(item);
         }
         // 3 of each
         else if(checkbox.europe == true && checkbox.america == true && checkbox.asia == true && checkbox.other == false && (item.location == 'europe' || item.location == 'america' || item.location == 'asia')){
         filtered.push(item);
         }
         else if(checkbox.europe == true && checkbox.america == true && checkbox.asia == false && checkbox.other == true && (item.location == 'europe' || item.location == 'america' || item.location == 'other')){
         filtered.push(item);
         }
         else if(checkbox.europe == true && checkbox.america == false && checkbox.asia == true && checkbox.other == true && (item.location == 'europe' || item.location == 'asia' || item.location == 'other')){
         filtered.push(item);
         }
         else if(checkbox.europe == false && checkbox.america == true && checkbox.asia == true && checkbox.other == true && (item.location == 'other' || item.location == 'america' || item.location == 'asia')){
         filtered.push(item);
         }
         });*/
        
        return filtered;
    };
}