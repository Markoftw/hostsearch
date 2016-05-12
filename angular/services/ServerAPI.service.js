export class ServerAPIService{
    constructor(API, $q){
        'ngInject';

        this.API = API;
        this.$q = $q;
    }

    cpuLoad() {
        var deferred = this.$q.defer();
        this.API.one('server/cpu/load').get()
            .then((response) => {
                deferred.resolve(response.data.data);
            }, (error) => {
                deferred.reject("Error: request returned status " + error);
            });
        return deferred.promise;
    }
    
    cpuAverage() {
        
    }
    
}
