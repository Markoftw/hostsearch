ngDescribe({
    name: 'Test details-vps component',
    modules: 'app',
    inject: ['$http', '$httpBackend'],
    element: '<details-vps></details-vps>',
    http: {
        get: {
            '/api/vps/show': {
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
