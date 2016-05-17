export class UserService{
    constructor($auth, $window){
        'ngInject';

        this.$auth = $auth;
        this.$window = $window;
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
        let token = this.$window.localStorage.satellizer_token;
        if(token) {
            let token_info = this.$auth.getPayload();
            return !!(token_info.aud && token_info.aud === 'admin');
        }
        return false;
    }
    
}
