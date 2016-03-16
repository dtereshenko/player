describe('Unit testing great quotes', function() {
	var $compile, $rootScope, $scope, directiveElem, $templateCache, $document, body;


	beforeEach(module('webPlayerApp'));
	beforeEach(module('views/player/playerThird.html'));

	beforeEach(inject(function(_$compile_, _$rootScope_){

		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();

		//directiveElem = $compile('<div player-third></div>')($rootScope);
		//$rootScope.$digest();
	}));

	it('exposes the controller to the template', function() {
		inject(function($templateCache){
			var e = $compile('<div player-third></div>')($scope);
			$scope.$digest();
			console.log(e);
			//expect(e.html().indexOf('class') > 0);
		})
	});


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

