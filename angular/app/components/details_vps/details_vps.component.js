class DetailsVpsController{
    constructor(API, ToastService, $state, DialogService) {
        'ngInject';

        this.API = API;
        this.$state = $state;
        this.ToastService = ToastService;
        this.DialogService = DialogService;
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

    favorite(server_id) {
        this.API.all('favorites/vps/' + server_id + '/add').post().then(() => {
            this.ToastService.show('Successfully added to favorites!');
        }, (error) => {
            //this.ToastService.error(error);
        })
    }

    removeFavorite(server_id){
        this.API.all('favorites/vps/' + server_id + '/delete').post().then(() => {
            this.ToastService.show('Removed to favorites!');
        }, (error) => {
            //this.ToastService.error(error);
        })
    }

    report(server_id) {
        let data = {
            server_id: server_id,
            server_type: 'vps'
        };

        this.DialogService.setData(data);
        this.DialogService.fromTemplate("report_server");
    }
}

export const DetailsVpsComponent = {
    templateUrl: './views/app/components/details_vps/details_vps.component.html',
    controller: DetailsVpsController,
    controllerAs: 'vm',
    bindings: {}
};
