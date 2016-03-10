/**
 * Created by Anton_Ovcharuk on 3/9/2016.
 */

angular.module('webPlayerApp').directive('paginator', function() {
	return {
		restrict: 'EA',
		replace: true,
		templateUrl: 'views/templates/paginator.html',
		controller: 'PaginatorCtrl',
		scope: {
			inCome: '=?paginateMe',
			result: '=?result',
			perPagesArray: '=?perPagesArray',
			maxValue: '=?maxValue',
			notEnough: '=?updateRequest',
			currentPage: '=?pageCounter',
			showMoreButton: '=?showMoreButton',
			pagName: '@paginator',
			mode: '=?mode'
		},
		link: function(scope, element, attrs, PaginatorCtrl) {
			return PaginatorCtrl.init();
		}
	};
});
