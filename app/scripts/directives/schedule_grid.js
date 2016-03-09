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
			intervalSizeSeconds: "=intervalSizeSeconds",
			visibleIntervals: "=visibleIntervals",
			timelineStartTime: "=timelineStartTime",
			timelineEndTime: "=timelineEndTime"
		},
		controller: "SchedulesGridCtrl",
		link: function(scope, element, attrs, SchedulesGridCtrl) {
			scope.horizontalWidth = "100%";

			scope.$watch(function(){
					return scope.timelineStartTime;
				},
				function(newValue){
					if(_.isDate(scope.timelineStartTime)){
						calculateIntervalsQuantity();
						reSetDimensions();
					}
				}
			);

			scope.$watch(function(){
					return scope.timelineEndTime;
				},
				function(newValue){
					if(_.isDate(scope.timelineEndTime)){
						calculateIntervalsQuantity();
						reSetDimensions();
					}
				}
			);

			scope.$watch(function(){
				return scope.visibleIntervals;
			},
				function(newValue){
					reSetDimensions();
				}
			);

			function calculateIntervalsQuantity(){
				if(_.isDate(scope.timelineStartTime) && _.isDate(scope.timelineEndTime) && _.isNumber(scope.intervalSizeSeconds)){
					scope.intervalsNumber = Math.floor((scope.timelineEndTime.getTime() - scope.timelineStartTime.getTime())/(1000*scope.intervalSizeSeconds));
					if (_.isNumber(scope.intervalsNumber)) {
						var timelineItems = [], intervalTime = scope.timelineStartTime.getTime(), dateObj;
						for (var i = 0; i < scope.intervalsNumber; i++) {
							timelineItems.push({
								time: new Date(intervalTime)
							});
							intervalTime += scope.intervalSizeSeconds * 1000;
						}
						scope.timelineItems = timelineItems;
						scope.timelineItemWidth = (1 / scope.intervalsNumber * 100) + "%";
						console.log(scope.timelineItems, scope.timelineItemWidth);
					}
					SchedulesGridCtrl.init();
				}
			}

			function reSetDimensions(){
				if(_.isNumber(scope.visibleIntervals) && _.isNumber(scope.intervalsNumber)){
					var pagesNumber = scope.intervalsNumber/scope.visibleIntervals;
					scope.horizontalWidth = (pagesNumber*100) + "%";
				}
			}




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
