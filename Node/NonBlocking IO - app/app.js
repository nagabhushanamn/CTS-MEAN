/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

// event...
fs.open('info.txt', 'r', function(err, handle) {  
	if (err) {
		return;
	}
	var buffer = new Buffer(100000);
	// event
	fs.read(handle, buffer, 0, 100000, null, function(err, length) {
		if (err) {
			return;
		}
		console.log(buffer.toString('utf8', 0, length));
		fs.close(handle, function() {
			//
		});
	});
});

console.log('....');
