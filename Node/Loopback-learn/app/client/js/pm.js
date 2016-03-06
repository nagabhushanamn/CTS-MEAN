/**
 * http://usejsdoc.org/
 */


(function(){
	
	var pmModule=angular.module('pm', ['ngRoute',"lbServices"]);
	pmModule.config(function($routeProvider) {
		$routeProvider
		.when('/', {templateUrl: "templates/pm-home.html"})
		.when('/view-all', {templateUrl: "templates/pm-grid.html",controller: "ViewAllController"})
		.when('/add-new', {templateUrl: "templates/pm-product-form.html",controller: "SaveController"})
		.when('/edit/:prodId', {templateUrl: "templates/pm-product-form.html",controller: "ViewAndEditController"})
		.when('/view/:prodId', {templateUrl: "templates/pm-product-view.html",controller: "ViewAndEditController"});
	});
	
	
	pmModule.controller('ViewAllController', function($scope,Product,$route) {
		$scope.products=Product.find();
//		.then(function(items) {
//			$scope.products=items;
//		});
		$scope.remove=function(id){
			pmService.remove(id)
			.then(function(){
				$route.reload();
			});
		};
	});
	
	pmModule.controller('ViewAndEditController', function($scope,Product,$location,$routeParams) {
			
			if($routeParams.prodId){
				pmService.loadById($routeParams.prodId)
				.then(function(item){
					$scope.product=item;
				});
			}
			
			$scope.save=function(){
				pmService.update($scope.product)
				.then(function(item){
					$scope.product={};
					$scope.message=item.name+"updated ";
					$location.path('view-all');
				});
			};
		});
	


	pmModule.controller('SaveController', function($scope,Product,$location) {
		
		$scope.product={};
		
		$scope.save=function(){
			
			$scope.product.make= Date.now();
			$scope.product.notAvailable=false;
			
			pmService.save($scope.product)
			.then(function(){
				//$scope.$parent.message="New Product saved";
				$scope.product={};
				$location.path('view-all');
			});
		};
	});
	

	
	
})();