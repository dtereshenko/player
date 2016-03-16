'use strict';
/**
 * Created by Anton_Ovcharuk on 3/11/2016.
 */

angular.module('webPlayerApp').directive('imagesGrid', function() {
	return {
		restrict: 'EA',
		replace: true,
		templateUrl: 'views/templates/images_grid.html',
		controller: '@',
		name:"controllerName",
		scope: {
			additionalData: "=additionalData"
		},
		link: function(scope, element, attrs) {
		}
	};
});
