import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';
import {LoggingService} from './services/logging.service';
import {UserService} from './services/user.service';
import {SidenavService} from './services/sidenav.service';

angular.module('app.services')
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('LoggingService', LoggingService)
	.service('UserService', UserService)
	.service('SidenavService', SidenavService)
	.service('ToastService', ToastService);