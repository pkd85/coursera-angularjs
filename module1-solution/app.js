(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.myLunch = "";
		$scope.message = "";

		$scope.displayMessage = function () {
			if ($scope.myLunch == "") { $scope.message = "Please enter data first"; }
				else if ($scope.myLunch.split(',').length <= 3 ) { $scope.message = "Enjoy!"; }
				else { $scope.message = "Too much!"; }
		};
	}

})();