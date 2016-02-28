/**
 * http://usejsdoc.org/
 */

var http = require("http");
var fs = require("fs");

var httpServer = http.createServer();
httpServer.on('request', function(req, resp) {

	// fs.readFile('rhymes.mp4', function(err, data) { // 650mb * 1000
	resp.writeHead(200, {
		"Content-Type" : 'video/mp4'
	});
	// resp.write(data);
	// resp.end();
	// });

	/*
	 * 1. Readable streams 2. Writable streams 3. duplex 4. Transformer
	 * 
	 */

	var rs = fs.createReadStream('rhymes.mp4'); // EventEmiter
	// rs.on('data', function(chunk) {
	// console.log('data-event' + chunk.length);
	// resp.write(chunk);
	// });
	// rs.on('end', function() {
	// resp.end();
	// });

	rs.pipe(resp);

});

httpServer.listen(8080);