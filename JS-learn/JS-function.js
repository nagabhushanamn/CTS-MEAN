/**
 * http://usejsdoc.org/
 */

/*
 * IN JS ,
 * 
 * we can declare/create function in 2 ways
 * 
 * a. function declaration b. function expression
 * 
 */

// a. function declaration
// console.log(add(12,13));
// function add(n1,n2){
// return n1+n2;
// }
// console.log(add.name);
// console.log(add(12,13));
// ----------------------------------
// b. function expression
// console.log(add(12,13));
//
// var add=function(n1,n2){return n1+n2};
// console.log(add.name);
// console.log(add(12,13));
// ----------------------------------
//
// function reflect(arg1,arg2,arg3){
// console.dir(arguments);
// return arguments[0]+" "+arguments[1]+" "+arguments[2];
// }
//
// console.log(reflect(12,13,14));
// -----------------------------------------------
// function sum(){
// var r=0,
// i=0,
// len=arguments.length;
// while(i<len){
// r=+arguments[i];
// i++;
// }
// return r;
// }
//
// console.log(sum(1,2,3,4,5,6));
// -----------------------------------------------
// function --> variable hoisting/lifting-up
// var i=100;
// function display(){
// var i;
// console.log(i);
// i=200;
// }
// display();
// recommended pattern : Single Var Pattern
// -----------------------------------------------
/*
 * var scope -----------
 * 
 * global scope function scope
 * 
 * till ES 5 , no block-scope
 * 
 * in ES-6
 * 
 * have ' block-scope' with 'let' keyword
 * 
 */

// Ques
// function f(){
//	
// "use strict";
//	
// {
// let i=100; // block-scope
// }
//	
// console.log(i);
//	
// }
//
// f();
// -----------------------------------------------
/*
 * 'this' keyword
 * 
 */

/*
 * why we need 'this' keyword ?
 * 
 */
//
// var person={
// name:'Nag',
// sayName:function(){
// console.log('im '+this.name);
// }
// };
//
// var oldPerson=person;
// person={name:'Riya'};
//
// //person.sayName();
// oldPerson.sayName();
// -------------------------------------------------------
// global
// global.name='GLOBAL';
//
// function sayNameForAll(){
// console.log('im '+this.name);
// }
//
// //
// //var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
// //var p2={name:'Riya',sayName:function(){console.log('im '+this.name);}};
//
//
// var p1={name:'Nag',sayName:sayNameForAll};
// var p2={name:'Riya',sayName:sayNameForAll};
//
//
// sayNameForAll(); // im ? : function invocation : ( this --> global )
// p1.sayName(); // im Nag : method invocation : ( this --> invoker )
// p2.sayName(); // im Riya
//
//
// -------------------------------------------------------
// third-party
// var greetUtil = {
// sayName : function(message,from) {
// console.log(message + ' im ' + this.name+", "+from);
// }
// };
// business objs
//
// var p1 = {
// name : 'Nag'
// };
// var p2 = {
// name : 'Riya'
// };
// eager invocation
// greetUtil.sayName.call(p1,"Hello","Bangalore"); // call-invocation
// greetUtil.sayName.call(p2,"Hi","Chennai");
// lazy invocation ( on-event )
// var newF=greetUtil.sayName.bind(p1,"Hello",'Bengalore');
// on greet-event
// console.log('on greet event..');
// newF();
// --------------------------------------------------------

// need 1000+ person objects
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		console.log('im ' + this.name);
	};
}

// var p1=new Person('Nag', 32); // constructor-invocation : ( this -->
// new-object )
// var p2=new Person('Riya',0.9);
//
// p1.sayName();
// p2.sayName();

// var p=new Person('Nag',32);

// -----------------------------------------------------------

/*
 * in JS , can invoke function in 4 ways
 * 
 * --> function : this --> global --> method : this --> invoker --> call/bind :
 * this --> arg-obj --> constructor : this --> new-obj
 * 
 * 
 */

// -----------------------------------------------------------

// function as values

// function sayHello(){
// console.log('hello');
// }
//
// var sayHi=sayHello;
// sayHi();

//-----------------------------------------------------------

// function as arguments

// function sayHello(greet) {
// greet();
// }
// sayHello(function() {
// console.log('Hello...');
// });

//var arr = [ 1, 3, 5, 8, 9, 4, 6, 7, 10, 2 ];
//arr.sort(function(a, b) {
//	return a - b;
//});
//console.log(arr);

//-----------------------------------------------------------------

//function as return values


//function tng(){
//	
//	console.log('tng.....');
//	
//	function learn(){
//		console.log('learn....');
//	}
//	
//	return learn;
//	
//}
//
//var learnFunc=tng();
//learnFunc();
//

//-----------------------------------------------------------------


// Functions as 'closures'

//function tng(){
//	console.log('tng....');
//	var info='JS notes...';
//	function learn(){
//		console.log('learn with '+info);
//	}
//	return learn;
//}
//
//var learnFunc=tng();
//learnFunc();
//learnFunc();


//-----------------------------------------------------------------

// Practical Example


// e.g Counter-Module
//
//function init(){
//	// Private   ( Encapsulation )
//	var count=0;
//	// Public    ( Abstraction   )
//	return{
//		doCount:function(){
//			count++;
//		},
//		getCount:function(){
//			return count;
//		}
//	};
//}
//var counter=init();

// IIFE ( Immediatly Invokable Func Exp ) / Self Executable func


var counter=(function(){
	// Private   ( Encapsulation )
	var count=0;
	// Public    ( Abstraction   )
	return{
		doCount:function(){
			count++;
		},
		getCount:function(){
			return count;
		}
	};
})();

//----------------------------

counter.doCount();
counter.doCount();


console.log(counter.getCount());


























