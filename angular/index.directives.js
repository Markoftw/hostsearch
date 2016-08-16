import {MdRatingsStarDirective} from './directives/mdRatingsStar/mdRatingsStar.directive';
import {MdUserFavoritesDirective} from './directives/mdUserFavorites/mdUserFavorites.directive';
import {MdTableInfoDirective} from './directives/mdTableInfo/mdTableInfo.directive';

angular.module('app.directives')
	.directive('mdRatingsStar', MdRatingsStarDirective)
	.directive('mdUserFavorites', MdUserFavoritesDirective)
	.directive('mdTableInfo', MdTableInfoDirective);
