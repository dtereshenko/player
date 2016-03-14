//describe('Unit testing great quotes', function() {
//	var compile, scope, directiveElem;
//
//	beforeEach(function(){
//		module('webPlayerApp');
//
//		inject(function(_$compile_, _$rootScope_){
//			//template = $templateCache.get('views/player/playerThird.html');
//			//$templateCache.put('views/player/playerThird.html',template);
//
//			compile = _$compile_;
//			scope = _$rootScope_;
//		});
//
//		var $httpBackend;
//		beforeEach(inject(function($injector) {
//			$httpBackend = $injector.get('$httpBackend');
//			$httpBackend.whenGET('../views/root.html').respond(200, '');
//		}));
//		//directiveElem = '1asdfasdf';//getCompiledElement();
//		//console.log('is');
//	});
//
//	//function getCompiledElement(){
//	//	var element = angular.element('<div player-third></div>');
//	//	var compiledElement = compile(element)(scope);
//	//	scope.$digest();
//	//	console.log('el', compiledElement);
//	//	return 'asdfasdf';//compiledElement;
//	//}
//
//	it('should have span element', function () {
//		var element = angular.element('<div player-third></div>');
//		var compiledElement = compile(element)(scope);
//		scope.$digest();
//		//console.log('el');
//
//		//console.log(directiveElem);
//		var spanElement = compiledElement.find('div');
//		expect(spanElement).toBeDefined();
//		expect(spanElement.text()).toEqual('html5 player');
//	});
//});
