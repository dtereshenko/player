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
		$scope.description = 'TV Shows section';

		$compile = _$compile_;
	}));

	it('should render itself', inject(function () {
		var element = $compile('<div channel-pillar name="{{name}}" description="{{description}}"></div>')($scope);
		$scope.$digest();
		expect(element.html()).toMatch(/TV Shows/);
	}));
});
