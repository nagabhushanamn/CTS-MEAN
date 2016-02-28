/**
 * http://usejsdoc.org/
 */

var http = require('http');

var server = http.createServer(function(req, resp) {
	console.log('new Req received....');
	resp.end('hello...');
}); // EventEmitter
//
// server.on('request', function(req,resp) {
// console.log('new Req received....');
// resp.end('hello...');
// });

server.listen(8080, function() {
	console.log('http server listening on 8080');
});