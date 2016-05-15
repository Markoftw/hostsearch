ngDescribe({
    name: 'Test details-cloud component',
    modules: 'app',
    inject: ['$http', '$httpBackend'],
    element: '<details-cloud></details-cloud>',
    http: {
        get: {
            '/api/cloud/show': {
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
