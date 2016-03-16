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

		expect(element).toBeDefined();

		var titleEl = element.find('h3');

		expect(titleEl.text()).toBe($scope.title);

		var uiSrefAttr = element.attr('ui-sref');

		expect(uiSrefAttr).toBe($scope.location);
	}));
});
