/**
 * http://usejsdoc.org/
 */

/*
 *  NG-APP
 *  
 *   -> module-1
 *      component(s)
 *   -> module-2
 *   
 *   how to make modules ? on what basis
 *   
 *    --> based on functionality
 *    --> based on component r/s
 *    
 */

(function(){
	


	var app = angular.module('store', ['lbServices']);


	// Controller
	app.controller('StoreController', function($scope,Product) {
		
		$scope.products=Product.find();
		
		//......
		
	});

	app.controller('TabsController', function($scope,Product) {
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(tabValue,product) {
			$scope.tab = tabValue;
			var reviews=Product.reviews({id:product.id});
			console.dir(reviews);
			product.reviews=reviews;
		};
		$scope.isTabSelected = function(tabValue) {
			return $scope.tab === tabValue;
		};
	});


	// Filter
	app.filter('priceDiscount', function() {
		return function(originalPrice, discount) {
			if (discount) {
				return originalPrice - discount;
			}
			return originalPrice - 1;
		};
	});

	// Directives
	app.directive('productTitle', function() {
		return {
			restrict : "E",
			scope : false,
			replace : true,
			templateUrl : "templates/product-title.html",
			link : function(scope, jqEle, attr) {
				console.log('link function invoked...');
				jqEle.on('mouseenter', function() {
					jqEle.css('background-color', '#def');
				});
				jqEle.on('mouseleave', function() {
					jqEle.css('background-color', '#fff');
				});
			}
		};
	});
	app.directive('productTabs', function() {
		return {
			restrict : "E",
			scope : false,
			templateUrl : "templates/product-tabs.html",
			controller : "TabsController"
		};
	});

	app.directive('productReviewForm', function() {
		return {
			restrict : "E",
			scope : false,
			templateUrl : "templates/product-review-form.html",
			link : function(scope, jqEle, attr, controller, transcludeFunc) {
			},
			controller : function($scope) {
				$scope.newReview = {
					author : 'nag@gmail.com'
				};
				$scope.addNewReview = function(product) {
					// send to server..
					// 
					product.reviews.push($scope.newReview);
					$scope.newReview = {
						author : 'nag@gmail.com'
					};
				};
			}
		};
	});

	
})();