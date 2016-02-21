/**
 * http://usejsdoc.org/
 */

(function() {

	var app = angular.module('storeService', []);

	// Services
	app.factory('productsService', function($q,$http) {
		var service = {
			loadAll : function() {
				var def=$q.defer();
				
				//
				var promise=$http.get('products.json');
				promise.then(function(response) {  // 2xx , 3xx
					def.resolve(response.data);
				},function(reason) {               // 4xx , 5xx
					def.reject(reason.statusText);
				});
				
				return def.promise;
			}
		};
		return service;
	});
	
	

})();
