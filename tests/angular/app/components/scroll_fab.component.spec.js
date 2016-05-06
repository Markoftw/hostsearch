ngDescribe({
    name: 'Test scroll-fab component',
    modules: 'app',
    inject: ['$http', '$httpBackend', "$window"],
    element: '<scroll-fab></scroll-fab>',
    http: {
        get: {
            'img/icons/ic_keyboard_arrow_up_black_24px.svg': {
                data: true
            }
        }
    },
    tests: function (deps) {

        /*it('should scroll up when at bottom of page', () => {
            
        });*/

    }
});
