class DetailsVpsController{
    constructor(API, ToastService, $state) {
        'ngInject';

        this.API = API;
        this.$state = $state;
        this.ToastService = ToastService;
    }

    $onInit(){
        this.loaded = false;
        this.details();
    }

    details() {

        let server_id = this.$state.params.id;

        this.API.all('vps').get('show', {
            server_id
        }).then((response) => {
            this.server_info = response.data.data;
            this.loaded = true;
        }, () => {
            this.$state.go('app.advanced_search');
        });

    }
}

export const DetailsVpsComponent = {
    templateUrl: './views/app/components/details_vps/details_vps.component.html',
    controller: DetailsVpsController,
    controllerAs: 'vm',
    bindings: {}
};
