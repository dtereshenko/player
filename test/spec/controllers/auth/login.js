'use strict';

describe('Controller: LoginCtrl', function () {

	// load the controller's module
	beforeEach(module('webPlayerApp'));

	var LoginCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
		scope = $rootScope.$new();
		LoginCtrl = $controller('LoginCtrl', {$scope: scope});
		$httpBackend.whenGET(/\.html$/).respond('');
		//spyOn(scope, "toggleLoader").and.callThrough();
	}));
});
