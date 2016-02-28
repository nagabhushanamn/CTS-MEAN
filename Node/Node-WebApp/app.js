/**
 * http://usejsdoc.org/
 */

var http = require('http');
var server = http.createServer();

server.on('request', function(request, resp) {

	console.log('New Http Request received......');

	resp.writeHead(200, {
		'Content-Type' : "text/plain"
	});
	resp.write("Hello");
	resp.end();

});

server.listen(8000, function() {
	console.log('server listening...');
});