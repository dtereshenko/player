describe('Unit testing great quotes', function() {
	var $compile, $rootScope, directiveElem, $templateCache, $document, body;


	beforeEach(module('webPlayerApp'));
	beforeEach(module('views/player/playerThird.html'));

	beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$document_){
			//template = $templateCache.get('views/player/playerThird.html');
			//$templateCache.put('views/player/playerThird.html',template);
		$document = _$document_;
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$templateCache = _$templateCache_;
		body = $document.find('body');

		directiveElem = $compile('<div player-third></div>')($rootScope);
		$rootScope.$digest();
	}));

	it('exposes the controller to the template', function() {
		//$templateCache.get('views/player/playerThird.html', '<div></div>');
		var scope = $rootScope.$new();

		element = $compile('<div player-third></div>')(scope);
		$rootScope.$digest();

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

