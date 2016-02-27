/**
 * http://usejsdoc.org/
 */

// write TestCase using Testing F.W ( e.g jasmine )
describe('ClacController test suite', function() {

	beforeEach(module('calculator')); // ng-app="calculator"

	var $controller = null;
	beforeEach(inject(function(_$controller_) {
		// we need this service to instantiate 'controller'
		$controller = _$controller_;
	}));

	var $scope;
	beforeEach(function() {
		$scope = {};
	});
	
	//--------------------------------------------------------
	var $httpBackend;
	beforeEach(inject(function($injector) {
	     // Set up the mock http service responses
	     $httpBackend = $injector.get('$httpBackend');
	     
	     $httpBackend.when('GET',"/abc")
	     .respond(200, {name:'Nag'},{}, 'OK');
	     
	}));
	
	it('$http-test',function(){
		
		var controller = $controller('CalcController', {
			$scope : $scope
		});
		
		$scope.getResult();
		
		$httpBackend.flush();
		
		expect($scope.data).toEqual({name:'Nag'})
		
	});
	
	//--------------------------------------------------------

	it('1+2=3', function() {
		// e.gng-controller="CalcController"
		var controller = $controller('CalcController', {
			$scope : $scope
		});

		$scope.first = 1;
		$scope.second = 2;
		$scope.doArith();

		expect($scope.latest).toBe(3);

	});

	it('1-2=-1', function() {
		// e.gng-controller="CalcController"
		var controller = $controller('CalcController', {
			$scope : $scope
		});

		$scope.first = 1;
		$scope.second = 2;
		$scope.operator = "-";
		$scope.doArith();

		expect($scope.latest).toBe(-1);

	});

	it('1*2=2', function() {

		// e.gng-controller="CalcController"
		var controller = $controller('CalcController', {
			$scope : $scope
		});

		$scope.first = 1;
		$scope.second = 2;
		$scope.operator = "*";
		$scope.doArith();

		expect($scope.latest).toBe(2);

	});

	it('2/2=1', function() {
		var controller = $controller('CalcController', {
			$scope : $scope
		});

		$scope.first = 2;
		$scope.second = 2;
		$scope.operator = "/";
		$scope.doArith();

		expect($scope.latest).toBe(1);

	});

	it('2%2=0', function() {

		var controller = $controller('CalcController', {
			$scope : $scope
		});

		$scope.first = 2;
		$scope.second = 2;
		$scope.operator = "%";
		$scope.doArith();

		expect($scope.latest).toBe(0);

	});

});