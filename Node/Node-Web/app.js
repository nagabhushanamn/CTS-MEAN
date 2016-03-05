/**
 * http://usejsdoc.org/
 */

var http = require('http');

var app = http.createServer(function(request, response) {
	
	
	//	// by URL
	//	var reqURL=request.url;
	//	console.log(reqURL);
	//	
	//	// by HTTP-method
	//	var reqMethod=request.method;
	//	console.log(reqMethod);
	//	
	//	// by HTTP-Headers
	//	console.log(JSON.stringify(request.headers));
	//	
	//	
	//	response.writeHead(200, {
	//		"Content-Type" : "text/plain"
	//	});
	//	response.end("Hello World\n");
	
	
	// URL - GET: /
	if (request.url === "/" && request.method==="GET") {
		response.writeHead(200, {
			"Content-Type" : "text/plain"
		});
		response.end("/");
	}else
	
	// URL - GET: /products
	if (request.url === "/products" &&request.method==="GET") {
		response.writeHead(200, {
			"Content-Type" : "text/plain"
		});
		response.end("/products");
	}else
	{
		response.writeHead(404, {
			"Content-Type" : "text/plain"
		});
		response.end("404 error ! Not Found");
	}
	
	
	
	
	
	
});

app.listen(3000, function() {
	console.log('Server running on http://localhost:3000');
});