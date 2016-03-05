/**
 * http://usejsdoc.org/
 */

var express = require('express');
var morgan = require('morgan')

// var http = require("http");

var app = express();

// Add some middlewae(s)

// logging

// app.use(function(req, res, next) {
// console.log("Log: method:"+req.method +"- Path:"+req.url);
// next();
// });

//app.use(morgan());

//
//app.use(function(req, res, next) {
//	res.writeHead(200, {
//		"Content-Type" : "text/plain"
//	});
//	res.end("Hello! Welcome to Express F.W world");
//});


// Routing..

app.all('*', function(req, res,next) {
	res.writeHead(200, {
		"Content-Type" : "text/plain"
	});
	next();
});
app.get("/", function(req, res) {
	res.end("/");
});
app.get("/hello", function(req, res) {
	res.end("Hello");
});
app.get("/products", function(req, res) {
	res.end("products");
});
app.get('*',function(req, res) {
	res.end("404");
});




// http.createServer(app).listen(3000);
app.listen(3000, function() {
	console.log('server started....');
});
