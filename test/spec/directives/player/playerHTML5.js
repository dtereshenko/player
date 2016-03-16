describe('Unit testing great quotes', function() {
	var $scope, element;


	beforeEach(module('webPlayerApp'));
	beforeEach(module('views/player/playerThird.html'));

	beforeEach(inject(function($rootScope){
		$scope = $rootScope.$new();
	}));

	it('exposes the controller to the template', inject(function ($compile) {
		element = $compile('<div player-third></div>')($scope);
		$scope.$digest();
		expect(element.html()).toMatch(/Third player/);
	}));


	//it('should have span element', function () {
	//	//var element = angular.element('<div player-third></div>');
	//	var compiledElement = $compile('<div player-third></div>')($rootScope);
	//	$rootScope.$digest();
    //
    //
	//	//var spanElement = compiledElement.find('div');
	//	//expect(spanElement).toBeDefined();
	//	//expect(spanElement.text()).toEqual('html5 player');
	//});
});

