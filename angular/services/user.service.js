export class UserService{
    constructor($auth){
        'ngInject';

        this.$auth = $auth;
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

    isLoggedIn() {
        return this.$auth.isAuthenticated();
    }

    isAdmin() {
        return true;
    }
    
}
