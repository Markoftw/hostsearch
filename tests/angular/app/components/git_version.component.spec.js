ngDescribe({
    name: 'Test git-version component',
    modules: 'app',
    inject: ['$http', '$httpBackend'],
    element: '<git-version></git-version>',
    http: {
        get: {
            '/api/git/status': {
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
