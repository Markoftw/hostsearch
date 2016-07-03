import {MdUserFavoritesDirective} from './directives/mdUserFavorites/mdUserFavorites.directive';
import {MdTableInfoDirective} from './directives/mdTableInfo/mdTableInfo.directive';

angular.module('app.directives')
	.directive('mdUserFavorites', MdUserFavoritesDirective)
	.directive('mdTableInfo', MdTableInfoDirective);
