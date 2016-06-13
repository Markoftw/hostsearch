class DetailsDedicatedController{
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
        
        this.API.all('dedicated').get('show', {
            server_id
        }).then((response) => {
            this.server_info = response.data.data;
            this.loaded = true;
        }, () => {
            this.$state.go('app.advanced_search');
        });
    }
    
    favorite(server_id) {
        this.API.all('favorites/dedicated/' + server_id + '/add').post().then(() => {
            this.ToastService.show('Successfully added to favorites!');
        }, (error) => {
            //this.ToastService.error(error);
        })
    }
    
    removeFavorite(server_id){
        this.API.all('favorites/dedicated/' + server_id + '/delete').post().then(() => {
            this.ToastService.show('Removed to favorites!');
        }, (error) => {
            //this.ToastService.error(error);
        })
    }
    
    report(server_id) {
        let data = {
            server_id: server_id,
            server_type: 'dedicated'
        };

        this.DialogService.setData(data);
        this.DialogService.fromTemplate("report_server");
    }
}

export const DetailsDedicatedComponent = {
    templateUrl: './views/app/components/details_dedicated/details_dedicated.component.html',
    controller: DetailsDedicatedController,
    controllerAs: 'vm',
    bindings: {}
};
