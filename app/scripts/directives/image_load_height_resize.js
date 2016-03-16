'use strict';
/**
 * Created by Anton_Ovcharuk on 3/10/2016.
 */

angular.module('webPlayerApp').directive('imageLoadHeightResize', function() {
	return {
		restrict: 'A',
		link: function(scope, el, attr) {
			var img, loaded = false;

			scope.$on("resetSizes", function(event, data){
				if(data && loaded){
					setElementCSS();
				}
			});

			function setElementCSS(){
				var w, h;

				if(attr.resizeMode === "height") {
					w = el[0].parentElement.offsetHeight / img.height * img.width;
					el.css({
						opacity: 1,
						backgroundImage: "url(" + attr.imageLoadHeightResize + ")",
						width: w + 'px',
						height: 100 + '%'
					});
				} else{
					h = el[0].parentElement.offsetWidth / img.width * img.height;
					el.css({
						opacity: 1,
						backgroundImage: "url(" + attr.imageLoadHeightResize + ")",
						height: h + 'px',
						width: 100 + '%'
					});
				}
			}

			return attr.$observe('imageLoadHeightResize', function() {
				loaded = false;
				el.css({
					opacity: 0
				});
				img = new Image();
				scope.$applyAsync(function() {
					scope[attr.loaded] = false;
				});



				img.onload = function() {
					setElementCSS();
					loaded = true;
					scope.$applyAsync(function() {
						scope[attr.loaded] = true;
					});
				};
				img.src = attr.imageLoadHeightResize;
			});
		}
	};
});


/*
 //@ sourceMappingURL=image_load_opacity_height_resize.js.map
 */