'use strict';

describe('Directive: discoverySection', function () {

	// load the directive's module
	beforeEach(module('webPlayerAppDirectives'));
	beforeEach(module('views/templates/discovery_section.html'));

	var element,
		$scope;

	beforeEach(inject(function ($rootScope) {
		$scope = $rootScope.$new();
		$scope.title = 'FOX +';
		$scope.location = 'channelLocation';
	}));

	it('should render itself', inject(function ($compile) {
		element = $compile('<div discovery-section title="{{title}}" location="{{location}}"></div>')($scope);
		$scope.$digest();
		expect(element.html()).toMatch(/FOX/);
	}));
});
