'use strict';

describe('Directive: channelPillar', function () {

	// load the directive's module
	beforeEach(module('webPlayerAppDirectives'));
	beforeEach(module('views/templates/channel_pillar.html'));

	var $compile,
		$scope,
		$rootScope;

	beforeEach(inject(function (_$rootScope_, _$compile_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$scope.name = 'TV Shows';
		$scope.description = 'Description';
		$scope.location = 'location';
		$compile = _$compile_;
	}));

	it('should render itself', inject(function () {
		var element = $compile('<div channel-pillar name="{{name}}" location="{{location}}" description="{{description}}"></div>')($scope);

		$scope.$digest();
		expect(element).toBeDefined();

		var uiSrefAttr = element.attr('ui-sref');

		expect(uiSrefAttr).toBe($scope.location);

		var nameEl = element.find('h2'),
			descriptionEl = element.find('h3');

		expect(nameEl.text()).toBe('TV Shows');
		expect(descriptionEl.text()).toBe('Description');

	}));
});
