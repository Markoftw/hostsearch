export function RoutesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    let getView = (viewName) => {
        return `./views/app/pages/${viewName}/${viewName}.page.html`;
    };

    let getAdminView = (viewName) => {
        return `./views/app/pages/admincp/partials/${viewName}.html`;
    };

    let getProfileView = (viewName) => {
        return `./views/app/pages/profile/partials/${viewName}.html`;
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
                scrolling: {
                    templateUrl: getView('scroll')
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
        .state('app.viewdedicated', {
            url: '/dedicated/:id',
            data: {},
            views: {
                'main@': {
                    templateUrl: getView('show_dedicated')
                }
            },
            //params: { auth: true },
            resolve: {
                auth: ['$stateParams', 'UserService', function ($stateParams, UserService) {
                    $stateParams.auth = UserService.isLoggedIn();
                    return $stateParams.auth;
                }]
            }
        })
        .state('app.viewvps', {
            url: '/vps/:id',
            data: {},
            views: {
                'main@': {
                    templateUrl: getView('show_vps')
                }
            },
            resolve: {
                auth: ['$stateParams', 'UserService', function ($stateParams, UserService) {
                    $stateParams.auth = UserService.isLoggedIn();
                    return $stateParams.auth;
                }]
            }
        })
        .state('app.viewcloud', {
            url: '/cloud/:id',
            data: {},
            views: {
                'main@': {
                    templateUrl: getView('show_cloud')
                }
            },
            resolve: {
                auth: ['$stateParams', 'UserService', function ($stateParams, UserService) {
                    $stateParams.auth = UserService.isLoggedIn();
                    return $stateParams.auth;
                }]
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
                admin_protected: true
            },
            views: {
                'main@': {
                    templateUrl: getView('admincp')
                },
                'adminview@app.admin': {
                    templateUrl: getAdminView('project')
                }
            }
        })
        .state('app.admin.project', {
            url: '/project',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('project')
                }
            }
        })
        .state('app.admin.system', {
            url: '/system',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('system')
                }
            }
        })
        .state('app.admin.analytics', {
            url: '/analytics',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('analytics')
                }
            }
        })
        .state('app.admin.dedicated', {
            url: '/dedicated',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('dedicated')
                }
            }
        })
        .state('app.admin.virtual', {
            url: '/virtual',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('virtual')
                }
            }
        })
        .state('app.admin.cloud', {
            url: '/cloud',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('cloud')
                }
            }
        })
        .state('app.admin.news', {
            url: '/news',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('news')
                }
            }
        })
        .state('app.admin.users', {
            url: '/users',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('users')
                }
            }
        })
        .state('app.admin.invoices', {
            url: '/invoices',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('invoices')
                }
            }
        })
        .state('app.admin.reports', {
            url: '/reports',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('reports')
                }
            }
        })
        .state('app.admin.calendar', {
            url: '/calendar',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('calendar')
                }
            }
        })
        .state('app.admin.messages', {
            url: '/messages',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('messages')
                }
            }
        })
        .state('app.admin.errorlog', {
            url: '/errorlog',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('errorlog')
                }
            }
        })
        .state('app.admin.settings', {
            url: '/settings',
            data: {
                admin_protected: true
            },
            views: {
                adminview: {
                    templateUrl: getAdminView('settings')
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
                },
                'profileview@app.profile': {
                    templateUrl: getProfileView('profile')
                }
            }
        })
        .state('app.profile.profile', {
            url: '/dashboard',
            data: {
                auth: true
            },
            views: {
                profileview: {
                    templateUrl: getProfileView('profile')
                }
            }
        })
        .state('app.profile.dedicated', {
            url: '/dedicated',
            data: {
                auth: true
            },
            views: {
                profileview: {
                    templateUrl: getProfileView('dedicated')
                }
            }
        })
        .state('app.profile.virtual', {
            url: '/virtual',
            data: {
                auth: true
            },
            views: {
                profileview: {
                    templateUrl: getProfileView('virtual')
                }
            }
        })
        .state('app.profile.cloud', {
            url: '/cloud',
            data: {
                auth: true
            },
            views: {
                profileview: {
                    templateUrl: getProfileView('cloud')
                }
            }
        })
        .state('app.profile.purchases', {
            url: '/purchases',
            data: {
                auth: true
            },
            views: {
                profileview: {
                    templateUrl: getProfileView('purchases')
                }
            }
        })
        .state('app.profile.calendar', {
            url: '/calendar',
            data: {
                auth: true
            },
            views: {
                profileview: {
                    templateUrl: getProfileView('calendar')
                }
            }
        })
        .state('app.profile.messages', {
            url: '/messages',
            data: {
                auth: true
            },
            views: {
                profileview: {
                    templateUrl: getProfileView('messages')
                }
            }
        })
        .state('app.profile.settings', {
            url: '/settings',
            data: {
                auth: true
            },
            views: {
                profileview: {
                    templateUrl: getProfileView('settings')
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
