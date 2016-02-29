'use strict';

describe('Controller: VerifyCtrl', function () {

	// load the controller's module
	beforeEach(module('webPlayerApp'));

	var VerifyCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
		scope = $rootScope.$new();
		VerifyCtrl = $controller('VerifyCtrl', {$scope: scope});
		$httpBackend.whenGET(/\.html$/).respond('');
		//spyOn(scope, "toggleLoader").and.callThrough();
	}));
});
