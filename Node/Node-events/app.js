/**
 * http://usejsdoc.org/
 */

/*
 * 
 * All objects that emit events are instances of the EventEmitter class
 * 
 * 
 */

var events = require('events');
var util = require("util");
var EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

// -----------------------------------------------

// ee.on('some-event', function() {
// console.log('some-event handler....');
// });
//
//
// ee.emit('some-event');
// ee.emit('some-event');
// ee.emit('some-event');
// ee.emit('some-event');
// ee.emit('some-event');

// -----------------------------------------------

// ee.on('new-user', function(user) {
// console.log('new user joined....'+user.name);
// });
//
//
// ee.emit('new-user',{name:'Nag'});
// ee.emit('new-user',{name:'Ria'});
//

// -----------------------------------------------

// ee.on('some-event', function() {
// console.log('handler-1');
// });
// ee.on('some-event', function() {
// console.log('handler-2');
// });
// ee.on('some-event', function() {
// console.log('handler-3');
// });
//
// ee.emit('some-event');

// ------------------------------------------------
//
// ee.setMaxListeners(20);
//
// ee.on('some-event',function(){console.log('handle-1');});
// ee.on('some-event',function(){console.log('handle-2');});
// ee.on('some-event',function(){console.log('handle-3');});
// ee.on('some-event',function(){console.log('handle-4');});
// ee.on('some-event',function(){console.log('handle-5');});
// ee.on('some-event',function(){console.log('handle-6');});
// ee.on('some-event',function(){console.log('handle-7');});
// ee.on('some-event',function(){console.log('handle-8');});
// ee.on('some-event',function(){console.log('handle-9');});
// ee.on('some-event',function(){console.log('handle-10');});
// ee.on('some-event',function(){console.log('handle-11');});
//
//
// ee.emit('some-event');

// ----------------------------------------------------------

//
// ee.once('some-event', function() {
// console.log('once...');
// });
//
// ee.emit('some-event');
// ee.emit('some-event');

// -------------------------------------------------------

// function handler(){
// console.log('handler-1');
// }
// ee.on('some-event',handler);
//
// ee.emit('some-event');
// ee.emit('some-event');
//
// //ee.removeListener('some-event',handler);
// ee.removeAllListeners('some-event');
//
// ee.emit('some-event');

// ------------------------------------------------------

// Node Events Practical Example

// module: Door

function Door() {
	this.open = function() {
		console.log('door opened...');
		this.emit('door-open', {
			no : 5
		});
	};
	this.close = function() {
		console.log('door closed...');
		this.emit('door-close', {
			no : 5
		});

	};
}

util.inherits(Door, EventEmitter); // Inheritance...
//Door.prototype=EventEmitter.prototype;

var door = new Door();

setTimeout(function() {
	door.open();
}, 5000);

setTimeout(function() {
	door.close();
}, 10000);

// ----------------------------------------------------

// module : Light

var light = {
	setup : function() {

		// light - on
		door.on('door-open', function(data) {
			console.log('Light ON '+data.no);
		});

		// light - off
		door.on('door-close', function(data) {
			console.log('Light OFF '+data.no);
		});

	}
};

light.setup();
