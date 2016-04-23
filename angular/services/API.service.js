export class APIService {
    constructor(Restangular, ToastService, $window, LoggingService, $auth) {
        'ngInject';
        //content negotiation
        let headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/x.laravel.v1+json'
        };

        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer
            .setBaseUrl('/api/')
            .setFullResponse(true)
            .setDefaultHeaders(headers)
            .setErrorInterceptor(function (response) {
                if (response.status === 422 || response.status === 401) {
                    for (let error in response.data.errors) {
                        return ToastService.error(response.data.errors[error][0]);
                    }
                }
                if (response.status === 500) {
                    return ToastService.error(response.statusText)
                }
            })
            .addFullRequestInterceptor(function (element, operation, what, url, headers) {
                let token = $window.localStorage.satellizer_token;
                if (token) {
                    headers.Authorization = 'Bearer ' + token;
                }
            })
            .addResponseInterceptor(function (data, operation, what, url, response) {
                //deferred;
                if(response.headers('Authorization')) {
                    let auth_header = response.headers('Authorization');
                    if(auth_header.replace('Bearer ', '') !== $auth.getToken()) { //refresh the token
                        let token = auth_header.replace('Bearer ', '');
                        $auth.setToken(token);
                    }
                }
                return data;
            });
        });
    }
}
