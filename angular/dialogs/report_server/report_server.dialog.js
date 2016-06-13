export class ReportServerDialogController {
    constructor(API, ToastService, DialogService) {
        'ngInject';

        this.DialogService = DialogService;
        this.ToastService = ToastService;
        this.API = API;
    }

    $onInit() {
        this.sending = false;
        this.data = this.DialogService.getData();
        this.cb1 = false;
        this.cb2 = false;
        this.cb3 = false;
        this.message = '';
    }

    send() {
        this.sending = true;

        let report = {
            price: this.cb1,
            available: this.cb2,
            company: this.cb3,
            message: this.message
        };

        this.API.all('reports/'+this.data.server_type+'/'+this.data.server_id+'/add').post(report)
            .then((response) => {
                this.DialogService.hide();
                this.ToastService.show('Report has been sent!');
            }, (/*error*/) => {
                this.sending = false;
                //console.log(error);
            })
    }

    cancel() {
        this.DialogService.hide();
    }
}

