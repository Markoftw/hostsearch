export class ServerAPIService{
    constructor(API, $q){
        'ngInject';

        this.API = API;
        this.$q = $q;
    }

    apiLoad(path) {
        var deferred = this.$q.defer();
        this.API.one(path).get()
            .then((response) => {
                deferred.resolve(response.data.data);
            }, (error) => {
                deferred.reject("Error: request returned status " + error);
            });
        return deferred.promise;
    }
    
}
