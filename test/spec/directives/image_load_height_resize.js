'use strict';

describe('Directive: imageLoadHeightResize', function () {

	// load the directive's module
	beforeEach(module('webPlayerApp'));

	var $compile,
		$scope,
		element,
		parentElement,
		$rootScope;

	beforeEach(inject(function (_$rootScope_, _$compile_, $httpBackend) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$scope.resizeMode = 'height';
		$scope.item = {image: 'http://test_image.jpg'};
		$compile = _$compile_;
	}));

	function compileDirective(tpl) {
		element = $compile(
			'<div resize-mode = \'{{resizeMode}}\' image-load-height-resize=\'{{item.image}}\' class=\'poster\'></div>'
		)($scope);
		parentElement = $compile(
			'<div></div>'
		)($scope);
		parentElement.append(element);
		$scope.$digest();
	}

	it('initialisation', inject(function () {

		beforeEach(function() {
			compileDirective();
		});
		// a single test example, check the produced DOM
		it('should be rendered ', function() {
			expect(element).toBeDefined();
		});
	}));

	it('Should have set background image that equal to image-load-height-resize attribute value', inject(function () {
		compileDirective();
		var imageUrl = element.attr('image-load-height-resize');
		expect(imageUrl).toBe($scope.item.image);
		expect(element.css('background-image')).toEqual('');

		$scope.$broadcast('resetSizes', {force: true});
		$scope.$digest();

		expect(element.css('background-image')).toContain($scope.item.image);
	}));
});
