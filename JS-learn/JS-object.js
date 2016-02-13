/**
 * http://usejsdoc.org/
 */


//var person={
//		name:'Nag'
//};

// 

//if(person.name){
//	console.log('name property on person');
//}

//if("name" in person){
//	console.log('name property on person');
//}

//-----------------------------------------------

// enumurate obj properties

//var person={
//		name:'Nag',
//		age:31
//};
//
//for(prop in person){
//	if(person.hasOwnProperty(prop)){
//		console.log(prop+":"+person[prop]);
//	}
//}


//-----------------------------------------------


/*
 * 
 * JS obj , can have 2 types of properties
 * 
 * --> data property
 * --> accessor property
 * 
 */
//
//
//var person={
//		_name:'Nag', // Data Property
//	    set name(newName){ // accessor Property 
//			console.log('setting new Name');
//			if(newName){
//				this._name=newName;
//			}
//		},
//		get name(){
//			return this._name;
//		}
//};
//
//person.name='New Nag';  // write
//
//console.log(person.name);


//----------------------------------------------------------
"use strict";

//var person={name:'Nag',age:32};
//Object.defineProperty(person, 'name', {configurable:false,writable:false});
//
////delete person.name;
//person.name='';
//
//console.log(person.name);

//-----------------------------------------------------------
//
//var person={name:'Nag',age:32};
////Object.preventExtensions(person);
////Object.seal(person);
//Object.freeze(person);
//
//
//console.log(person.name);

//-----------------------------------------------------------





















