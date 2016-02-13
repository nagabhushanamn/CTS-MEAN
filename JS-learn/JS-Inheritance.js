/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
	// this.sayName = function() {
	// console.log('im ' + this.name);
	// };
}

Person.prototype.sayName = function() {
	console.log('im ' + this.name);
};

var p1 = new Person('Nag', 32);
var p2 = new Person('Riya', 0.9);

p1.sayName();
p2.sayName();

/*
 * How to do Inheritance in JS ?
 * 
 * prototype-based inheritance...
 * 
 */

//--------------------------------------

var p11=Object.create(p1);

//console.log(p11.name);
p11.name='New Nag';

console.log(p1.name);
console.log(p11.name);
console.log(p11.age);

//-----------------------------------


// ES-6  - Inheritance

var p={
		__proto__:p1
};
console.log(p.name);

//-------------------------------
















