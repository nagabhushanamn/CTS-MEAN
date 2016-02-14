/**
 * http://usejsdoc.org/
 */

var storeModule = angular.module('store', []);

// Controller
storeModule.controller('StoreController', function() {
	// logic/behav
	this.product = item;
});

// Model ( Business Data )
var item = {
	name : 'Laptop',
	price : 148000,
	description : 'New Model'
};

// Imperative programming
// document.querySelectorAll("h4")[0].innerHTML=item.name;
// document.querySelectorAll("h4")[1].innerHTML=item.price;
// document.querySelector("p").innerHTML=item.description;
