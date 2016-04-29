ngDescribe({
    name: 'Test details-dedicated component',
    modules: 'app',
    inject: ['$http', '$httpBackend'],
    element: '<details-dedicated></details-dedicated>',
    http: {
        get: {
            '/api/dedicated/show': {
                data: true
            }
        }
    },
    tests: function (deps) {

        it('basic test', () => {
            //
        });
    }
});
