"use strict";
angular.module('webPlayerApp').directive('modal', function($document) {
	var modalsList = {}, id = 0;

	function checkOpenModal(){
		return _.some(modalsList);
	}

	return {
		restrict: 'A',
		templateUrl: 'views/templates/modal.html',
		controller: 'ModalCtrl',
		replace: true,
		scope: {
			showTrigger: "=?ngShow",
			callback: "=?callback"
		},
		transclude: true,
		link: function(scope, element, attrs, ModalCtrl) {
			var html;
			scope.modalId = id++;
			html = angular.element($document[0].documentElement);

			scope.$watch(function() {
				return scope.showTrigger;
			}, function(newVal) {
				modalsList[scope.modalId] = newVal;
				if (newVal) {
					html.addClass('modal-open');
				} else {
					if(!checkOpenModal())
					{
						html.removeClass('modal-open');
					}
				}
			});
			scope.$on('$destroy', function() {
				delete modalsList[scope.modalId];
				if(!checkOpenModal())
				{
					html.removeClass('modal-open');
				}
			});
			ModalCtrl.init();
		}
	};
});


