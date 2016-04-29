ngDescribe({
    name: 'Test contact-form component',
    modules: 'app',
    inject: ['$http', '$httpBackend'],
    element: '<contact-form></contact-form>',
    http: {
        get: {
            'img/icons/ic_person_black_24px.svg': {
                data: true
            },
            'img/icons/ic_email_black_24px.svg': {
                data: true
            },
            'img/icons/ic_message_black_24px.svg': {
                data: true
            }
        }
    },
    tests: function (deps) {

        it('Should have firstName, lastName, email inputs, message textarea', () => {
            var inputs = deps.element.find('input');
            expect(inputs.length).toBe(3);
            var firstName = deps.element.find('input')[0];
            expect(firstName.attributes['type'].value).toBe('text');
            var lastName = deps.element.find('input')[1];
            expect(lastName.attributes['type'].value).toBe('text');
            var email = deps.element.find('input')[2];
            expect(email.attributes['type'].value).toBe('email');
            var textareas = deps.element.find('textarea');
            expect(textareas.length).toBe(1);

            //deps.http.expectGET();

            //deps.$httpBackend.expectGET('img/icons/ic_message_black_24px.svg');

        });

    }
});
