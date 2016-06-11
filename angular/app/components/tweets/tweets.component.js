class TweetsController{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
    }

    $onInit(){
        this.loading = true;
        this.tweets = '';
        this.API.one('home/tweets').get()
            .then((response) => {
                this.tweets = response.data.tweets;
                this.loading = false;
                console.log(response.data.tweets);
            }, (error) => {
                this.ToastService.error(error);
            });
    }
}

export const TweetsComponent = {
    templateUrl: './views/app/components/tweets/tweets.component.html',
    controller: TweetsController,
    controllerAs: 'vm',
    bindings: {}
};
