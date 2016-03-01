'use strict';

describe('Services: Providers', function () {
	var providerService;

	// excuted before each "it" is run.
	beforeEach(function (){

		// load the module.
		module('webPlayerApp');

		// inject your service for testing.
		// The _underscores_ are a convenience thing
		// so you can have your variable name be the
		// same as your injected service.
		inject(function(_ProvidersService_) {
			providerService = _ProvidersService_;
		});
	});

	// check to see if it has the expected function
	it('should have an providers function', function () {
		expect(angular.isFunction(providerService.providers)).toBeDefined();
	});

	// check to see if it does what it's supposed to do.
	it('should check is array', function (){
		var result = providerService.providers;
		expect(result.length).toEqual(25);
	});
});
