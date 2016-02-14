/**
 * http://usejsdoc.org/
 */

var storeModule = angular.module('store', []);

// Controller
storeModule.controller('StoreController', function($scope,$filter) {
	// logic/behav
	//this.product = item;
	//$scope.product=item;  // View Model  // request.setAttribute('product',item)
	$scope.products=items;
	
	//console.log($filter('uppercase')('nag'));
	//console.log($filter('priceDiscount')(10000,1000));
	
});

// Filter
storeModule.filter('priceDiscount', function() {
	return function(originalPrice,discount){
		//
		if(discount){
			return originalPrice-discount;
		}
		return originalPrice-1;
	};
});



// Model ( Business Data )
var items = [{
	name : 'Laptop',
	price : 148000,     // number
	description : 'New Model',
	canBuy:true,
	notAvailable:false,
	make:Date.now()
},
{
	name : 'Mobile',
	price : 28000,
	description : 'New Model',
	canBuy:true,
	notAvailable:false,
	make:Date.now()
}];



// Imperative programming
// document.querySelectorAll("h4")[0].innerHTML=item.name;
// document.querySelectorAll("h4")[1].innerHTML=item.price;
// document.querySelector("p").innerHTML=item.description;
