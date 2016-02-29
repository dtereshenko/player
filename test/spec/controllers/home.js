'use strict';

describe('Controller: HomeCtrl', function () {

	// load the controller's module
	beforeEach(module('webPlayerApp'));

	var HomeCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
		scope = $rootScope.$new();
		HomeCtrl = $controller('HomeCtrl', {$scope: scope});
		$httpBackend.whenGET(/\.html$/).respond('');
	}));

});
