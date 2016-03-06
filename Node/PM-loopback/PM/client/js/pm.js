/**
 * http://usejsdoc.org/
 */


(function(){
	
	var pmModule=angular.module('pm', ['ngRoute','lbServices']);
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
		
		$scope.remove=function(id){
			
		};
	});
	
	pmModule.controller('ViewAndEditController', function($scope,Product,$location,$routeParams) {
			
			if($routeParams.prodId){
				
			}
			
			$scope.save=function(){
				
			};
		});
	


	pmModule.controller('SaveController', function($scope,Product,$location) {
		
		$scope.product={};
		
		$scope.save=function(){
			
			$scope.product.make= Date.now();
			$scope.product.notAvailable=false;
			
		
		};
	});
	

	
	
})();