class GitVersionController {
    constructor(API) {
        'ngInject';

        this.API = API;
    }

    $onInit() {

        //this.version = 'Version: 0.0.0 (0, 0000000, commit 0) — Last commit: Thu Jan 1 00:00:00 1970 +0200';
        this.version = '';
        this.getVersion();
    }

    getVersion() {
        this.API.one('git/status').get()
            .then((response) => {
                this.version = response.data.data;
            });
    }
}

export const GitVersionComponent = {
    templateUrl: './views/app/components/git_version/git_version.component.html',
    controller: GitVersionController,
    controllerAs: 'vm',
    bindings: {}
};
