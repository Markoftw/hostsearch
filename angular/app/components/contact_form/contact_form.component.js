class ContactFormController{
    constructor(API, LoggingService, ToastService, $scope){
        'ngInject';

        this.API = API;
        this.LoggingService = LoggingService;
        this.ToastService = ToastService;
        this.$scope = $scope;
    }

    $onInit() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.message = '';
    }

    submit() {
        let data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            message: this.message
        };

        this.API.all('about/new').post(data)
            .then((response) => {
                this.ToastService.show("Your message has been sent!");
                this.firstName = '';
                this.lastName = '';
                this.email = '';
                this.message = '';
                this.$scope.contactForm.$setUntouched();
                this.$scope.contactForm.$setPristine();
                this.$scope.contactForm.$setValidity();
            }, (error) => {
                this.LoggingService.warn(error);
            });

    }
}

export const ContactFormComponent = {
    templateUrl: './views/app/components/contact_form/contact_form.component.html',
    controller: ContactFormController,
    controllerAs: 'vm',
    bindings: {}
};
