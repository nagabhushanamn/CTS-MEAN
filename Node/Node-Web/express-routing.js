/**
 * http://usejsdoc.org/
 */

var express = require('express');
var products=require('./routes/products');
var app = express();

// HTTP - methods
//app.all('/secret', function(req, res,next) {
//	console.log('accessing secret resource...');
//});
//
//app.get('/', function(req, res) {
//	res.send('GET method req');
//});
//
//app.post('/', function(req, res) {
//	res.send('POST method req');
//});


// HTTP - path
//
//app.get('/products', function(req, res) {
//	res.send('Products');
//});
//app.get('/file.txt', function(req, res) {
//	res.send('file.txt');
//});

//app.get('/ab?cd', function(req, res) {
//	res.send('/ab?cd');
//});

//app.get('/ab+cd', function(req, res) {
//	res.send('/ab+cd');
//});

//app.get('/ab*cd', function(req, res) {
//	res.send('/ab*cd');
//});


//app.get('/ab(cd)?e', function(req, res) {
//	res.send('/ab(cd)?e');
//});


//
//app.get(/a/, function(req, res) {
//	res.send('/a/');
//});


//app.get(/.*pdf$/, function(req, res) {
//	res.send('PDF request...');
//});

//--------------------------------------

//app.get("/products", function(req, res, next) {
//console.log('f1() called...');
//next();
//}, function(req, res, next) {
//res.end('Response from f2()');
//});


//----------------------------------------

//
//app.route("/products")
//.get(function(req, res) {
//	res.end('GET /products');
//})
//.post(function(req, res) {
//	res.end('POST /products');
//})
//.put(function(req, res) {
//	res.end('PUT /products');
//})
//['delete'](function(req, res) {
//	res.end('DELEET /products');
//});

//---------------------------------------

app.use("/products",products);








app.listen(3000);
console.log('server started...');