/**
 * http://usejsdoc.org/
 */


// primitives

// string

//var name="nag";
//var selection='a';
//
//console.log(typeof name);
//console.log(typeof selection);

//---------------------------------------

// number

//var count=5;
//var cost=12.12;
//
//console.log(typeof count);
//console.log(typeof cost);

//----------------------------------------

// boolean

//var found=true;
//console.log(typeof found);

//----------------------------------------

// undefined

//var v;
//console.log(typeof v);

//----------------------------------------

// null

//var o=null;
//
//console.log(typeof o);

//----------------------------------------

//undefined  vs null

//var o=null;
//
//console.log(o===null);

/*
 *  ==
 *  ===
 * 
 */

//console.log("5"==5);   // implicit conversion  --> bad result
//console.log("5"===5);


//console.log(undefined==null);
//console.log(undefined===null);


//----------------------------------------



// Reference Types --> Objects

/*
 *  what is object ?
 *  
 *  collection of key:value pair properties
 * 
 */

/*
 *  how to create obj in JS ?
 *  
 *  new CF();  --> object
 *  
 *  imp note : No 'Class' in JS
 *  
 *  
 *  constructor constructor 
 *  
 *    a func with camel-case naming notation
 *     
 *     e.g
 *     
 *       Object
 *       Array
 *       
 *       EventEmitter
 *  
 *  
 *  
 */

//
//var person=new Object();
//person.name='Nag';  // string
//person.age=32;      // number
//person.doWork=function(){
//	console.log('Teaching JS..');
//};
//
//console.log(person.name);
//person.doWork();
//
//delete person.age;
//
//console.log(person.age);



// How to access JS obj properties ?

/*
 *   '.' notation
 *   '[]' notation
 * 
 */

//var person=new Object();
//person.name='Nag';
//person['full-name']='Nag N';
//
//console.log(person.name);
////console.log(person['name']);  // good practice
//console.log(person['full-name']);


//--------------------------------------------------------


/*
 *  built-in types  ( constructor function )
 *  
 *  
 *  Object
 *  Array
 *  RegExp
 *  Function
 *  
 *  new CF()  or literal-style ( recommended )
 * 
 * 
 */

// a. Object

//var person=new Object();
//person.name='Nag';
//person.age=32;
//person.doWork=function(){
//	console.log('teaching JS');
//};

// or Literal style  ( compact syntax )
//var newPerson={
//		name:'Nag',
//		age:32,
//		doWork:function(){
//			console.log('teaching JS');
//		}
//};

//---------------------------------------

// b. Array

//var arr=new Array();
//arr.push(10);
//arr[1]=20;


// literal style
//var newArray=[10,20];


//----------------------------------------

// c. RegExp

//var re=new RegExp("\\d");
//console.log(re.test("231313"));

// literal style
//var newRe=/\d/;
//console.log(newRe.test("231313"));


//----------------------------------------

// d. function
/*
 *  imp note : every function by default an object internally
 *  
 */
//
//var add=new Function('n1','n2',"var result=n1+n2;return result;");
//console.log(add(12,13));

// Literal style

//function add(n1,n2){
//	var result=n1+n2;
//	return result;
//}
//console.log(add(12,13));


//----------------------------------------

// Primitives as an Object

//var name='nag';  // string
//var newName=name.toUpperCase();

/*
 * var temp=new String(name)
 * var newName=temp.toUpperCase();
 * temp=null;
 * 
 */

//var a="string";
//var b=new String('string');  // performance issues

//---------------------------------------------------------

//
//var boo=new Boolean(false);  // never create primitive as an object
//if(boo){
//	console.log('YES');
//}else{
//	console.log('NO');
//}

/*
 *  In JS , falsy values
 *  
 *  false,null,undefined,"",0
 * 
 */


//-------------------------------------------------------------









