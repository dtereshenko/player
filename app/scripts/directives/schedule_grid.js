/**
 * Created by Anton_Ovcharuk on 3/3/2016.
 */
'use strict';

angular.module('webPlayerApp').directive('scheduleGrid', function ($window, $document, $timeout) {
	return {
		templateUrl: "views/templates/schedules_grid.html",
		restrict: 'EA',
		replace: true,
		scope: {
			intervalsNumber: "=intervalsNumber",
			intervalSizeSeconds: "=intervalSizeSeconds",
			visibleIntervals: "=visibleIntervals",
			timelineStartTime: "=timelineStartTime"
		},
		controller: "SchedulesGridCtrl",
		link: function(scope, element, attrs, SchedulesGridCtrl) {
			scope.horizontalWidth = "100%";

			scope.$watch(function(){
					return scope.intervalsNumber;
				},

				function(newValue){
					if(_.isNumber(scope.intervalsNumber)){
						reSetDimensions();
						var timelineItems = [], intervalTime = scope.timelineStartTime, dateObj;
						for(var i = 0; i < scope.intervalsNumber; i++){
							timelineItems.push({
								time: new Date(intervalTime)
							});
							intervalTime += scope.intervalSizeSeconds*1000;
						}
						scope.timelineItems = timelineItems;
						scope.timelineItemWidth = (1/scope.intervalsNumber * 100) + "%";
					}

				}
			);

			scope.$watch(function(){
				return scope.visibleIntervals;
			},
				function(newValue){
					reSetDimensions()
				}
			);

			function reSetDimensions(){
				if(_.isNumber(scope.visibleIntervals) && _.isNumber(scope.intervalsNumber)){
					var pagesNumber = scope.intervalsNumber/scope.visibleIntervals;
					scope.horizontalWidth = (pagesNumber*100) + "%"
				}
			}

			SchedulesGridCtrl.createChannels()


			//var scrollableElement = $document[0].getElementsByClassName(scope.scrollableClass)[0], stepSize = 0, slowTimeout;
			//console.log($document, scrollableElement);
			//
			//function calculateStepSize() {
			//	if(!_.isUndefined(slowTimeout)) {
			//		$timeout.cancel(slowTimeout)
			//	}
			//
			//	slowTimeout = $timeout(function(){
			//		stepSize = scrollableElement.clientWidth/5;
			//		console.log(stepSize);
			//	}, 200)
			//}
			//
			//
			//
			//if(!_.isUndefined(scrollableElement)) {
			//	calculateStepSize();
			//	$window.addEventListener("resize", calculateStepSize);
			//
			//	scope.$on("$destroy", function () {
			//
			//		$window.removeEventListener("resize", calculateStepSize);
			//	});
			//}
		}
	};
});
