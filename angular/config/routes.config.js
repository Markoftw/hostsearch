export function RoutesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    let getView = (viewName) => {
        return `./views/app/pages/${viewName}/${viewName}.page.html`;
    };

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            abstract: true,
            resolve: {
                //relog: relog
            },
            data: {},//{auth: true} would require JWT auth
            views: {
                header: {
                    templateUrl: getView('header')
                },
                footer: {
                    templateUrl: getView('footer')
                },
                main: {}
            }
        })
        .state('app.landing', {
            url: '/',
            data: {},
            views: {
                'main@': {
                    templateUrl: getView('landing')
                }
            }
        })
        .state('app.advanced_search', {
            url: '/advanced',
            data: {},
            views: {
                'main@': {
                    templateUrl: getView('advanced_search')
                }
            }
        })
        .state('app.about', {
            url: '/about',
            data: {},
            views: {
                'main@': {
                    templateUrl: getView('about')
                }
            }
        })
        .state('app.admin', {
            url: '/admincp',
            data: {
                auth: true
            },
            views: {
                'main@': {
                    templateUrl: getView('admincp')
                }
            }
        })
        .state('app.profile', {
            url: '/profile',
            resolve: {
                //auth: authenticate
            },
            data: {
                auth: true
            },
            views: {
                'main@': {
                    templateUrl: getView('profile')
                }
            }
        })
        .state('app.login', {
            url: '/login',
            data: {
                disabledOnLogin: true
            },
            views: {
                'main@': {
                    templateUrl: getView('login')
                }
            }
        })
        .state('app.register', {
            url: '/register',
            data: {
                disabledOnLogin: true
            },
            views: {
                'main@': {
                    templateUrl: getView('register')
                }
            }
        })
        .state('app.forgot_password', {
            url: '/forgot-password',
            data: {
                disabledOnLogin: true
            },
            views: {
                'main@': {
                    templateUrl: getView('forgot-password')
                }
            }
        })
        .state('app.reset_password', {
            url: '/reset-password/:email/:token',
            data: {
                disabledOnLogin: true
            },
            views: {
                'main@': {
                    templateUrl: getView('reset-password')
                }
            }
        });
}
