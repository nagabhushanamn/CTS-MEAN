/**
 * http://usejsdoc.org/
 */

(function() {

	var calcModule = angular.module('calculator', []);

	// NG components ( controller | filter | directive | service )

	calcModule.controller('CalcController', function($scope, $http) {

		$scope.memory = [];
		$scope.latest = 0;

		$scope.operators = {
			ADDITION : '+',
			SUBTRACTION : '-',
			MULTIPLICATION : '*',
			DIVISION : '/',
			MODULO : '%'
		};

		$scope.operator = $scope.operators.ADDITION;

		$scope.doArith = function() {
			var first = parseInt($scope.first);
			var second = parseInt($scope.second);
			switch ($scope.operator) {
			case '+':
				latestResult = first + second;
				break;
			case '-':
				latestResult = first - second;
				break;
			case '*':
				latestResult = first * second;
				break;
			case '/':
				latestResult = first / second;
				break;
			case '%':
				latestResult = first % second;
				break;
			}

			$scope.memory.unshift({
				timestamp : new Date(),
				first : $scope.first,
				operator : $scope.operator,
				second : $scope.second,
				value : latestResult
			});

			$scope.first = $scope.second = '';
			$scope.latest = latestResult;
		};

		$scope.getResult = function() {

			var promise=$http.get('/abc')
			promise.then(function(result) {
				console.log("Result :"+result);
				$scope.data = result.data;
			});

		}

	});

})();