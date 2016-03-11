/**
 * Created by Anton_Ovcharuk on 3/10/2016.
 */

angular.module('webPlayerApp').directive('imageLoadHeightResize', function() {
	return {
		restrict: 'A',
		link: function(scope, el, attr) {
			return attr.$observe('imageLoadHeightResize', function() {
				var img;
				el.css({
					opacity: 0
				});
				img = new Image();
				scope.$applyAsync(function() {
					return scope[attr.loaded] = false;
				});
				img.onload = function() {
					var h;
					h = el[0].parentElement.offsetWidth / img.width * img.height;
					el.css({
						opacity: 1,
						backgroundImage: "url(" + attr.imageLoadHeightResize + ")",
						height: h + 'px',
						width: 100 + '%'
					});
					scope.$applyAsync(function() {
						scope[attr.loaded] = true;
					});
				};
				return img.src = attr.imageLoadHeightResize;
			});
		}
	};
});


/*
 //@ sourceMappingURL=image_load_opacity_height_resize.js.map
 */