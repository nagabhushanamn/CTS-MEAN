/**
 * http://usejsdoc.org/
 */


(function(){
	
	var pmModule=angular.module('pm', ['ui.router']);
	
	pmModule.run(function($rootScope){
		$rootScope.$on('$stateChangeSuccess', function(event, toState,
				toParams, fromState, fromParams) {
			console.log('state change success..');
		})
	});
	
	pmModule.config(function($stateProvider,$urlRouterProvider) {
		
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
		.state('home',{url:"/",templateUrl: "templates/pm-home.html"})
		.state('all', {
			url : "/view-all",
			templateUrl : "templates/pm-grid.html",
			resolve:{
				simpleObj:function(){
					return{
						name:'Nag'
					};
				},
				promiseObj:function($http){
					var promise= $http.jsonp("http://www.filltext.com/?callback=JSON_CALLBACK&rows=5&fname={firstName}&lname={lastName}");
					return promise;
				}
			},
			controller : 'ViewAllController'
		})
		.state('new',{url:"/add-new",templateUrl: "templates/pm-product-form.html",controller:'SaveController'})
		.state('all.edit', {
			url : "/edit-product/:prodId",
			views:{
				'read':{
					templateUrl : "templates/pm-product-view.html",
					controller : 'ViewAndEditController'
				},
				'edit':{
					templateUrl : "templates/pm-product-form.html",
					controller : 'ViewAndEditController'
				}
			}
		})
		.state('all.view', {
			url : "/view-product/:prodId",
			views : {
				"read" : {
					templateUrl : "templates/pm-product-view.html",
					controller : 'ViewAndEditController'
				}
			}
		});
		    
		
	});
	
	
	//-----------------------------------------------------
	
	pmModule.controller('ViewAllController', function($scope,pmService,$state,simpleObj,promiseObj) {
		
		console.log(simpleObj.name);
	    $scope.users = promiseObj.data;
		
		pmService.loadAll()
		.then(function(items) {
			$scope.products=items;
		});
		$scope.remove=function(id){
			pmService.remove(id)
			.then(function(){
				$state.reload();
			});
		};
	});
	
	pmModule.controller('ViewAndEditController', function($scope,pmService,$location,$stateParams) {
			
			if($stateParams.prodId){
				pmService.loadById($stateParams.prodId)
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
	


	pmModule.controller('SaveController', function($scope,pmService,$location,$state) {
		
		$scope.product={};
		
		$scope.save=function(){
			
			$scope.product.make= Date.now();
			$scope.product.notAvailable=false;
			
			pmService.save($scope.product)
			.then(function(){
				//$scope.$parent.message="New Product saved";
				$scope.product={};
				//$location.path('view-all');
				$state.go('all');
			});
		};
	});
	

	
	
	//	$resource  -->to consume REST API ( next week session )
	
	pmModule.factory('pmService', function($q,$http) {
		var url="http://localhost:3000/api/products";
		var service={
				loadAll:function(){
					var defer=$q.defer();
					$http.get(url)
					.then(function(response){
						defer.resolve(response.data);
					});
					return defer.promise;
				},
				loadById:function(id){
					var defer=$q.defer();
					$http.get(url+"/"+id)
					.then(function(response){
						defer.resolve(response.data);
					});
					return defer.promise;
				},
				save:function(newProduct){
					var defer=$q.defer();
					$http.post(url,newProduct)
					.then(function(){
						defer.resolve(newProduct);
					});
					return defer.promise;
				},
				update:function(newProduct){
					var defer=$q.defer();
					$http.put(url,newProduct)
					.then(function(){
						defer.resolve(newProduct);
					});
					return defer.promise;
				},
				remove:function(id){
					var defer=$q.defer();
					$http['delete'](url+"/"+id)
					.then(function(){
						defer.resolve('deleted...');
					});
					return defer.promise;
				}
		};
		return service;
		
	});
	
	
	
})();