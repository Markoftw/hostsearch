class HomepageInfoController{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
    }

    $onInit(){
        this.loading = true;
        this.info = '';
        this.API.one('home/items').get()
            .then((response) => {
                this.info = response.data.data;
                this.loading = false;
            }, (error) => {
                this.ToastService.error(error);
            });
    }
}

export const HomepageInfoComponent = {
    templateUrl: './views/app/components/homepage_info/homepage_info.component.html',
    controller: HomepageInfoController,
    controllerAs: 'vm',
    bindings: {}
};
