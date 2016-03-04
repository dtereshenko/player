'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('PlayerCtrl', function ($scope, deviceDetector) {
	$scope.device = deviceDetector;
});
