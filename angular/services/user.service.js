export class UserService{
    constructor(){
        'ngInject';

        this.user = "";
    }

    getUsername() {
        if (this.user.length === 0) {
            return 'null';
        }
        return this.user;
    }

    setUsername(name) {
        if(!name) {
            return false;
        }
        this.user = name;
    }

}

