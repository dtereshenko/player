'use strict';

describe('Controller: WelcomeCtrl', function () {

	// load the controller's module
	beforeEach(module('webPlayerApp'));

	var WelcomeCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
		scope = $rootScope.$new();
		WelcomeCtrl = $controller('WelcomeCtrl', {$scope: scope});
		$httpBackend.whenGET(/\.html$/).respond("");
		//spyOn(scope, "toggleLoader").and.callThrough();
	}));
});
