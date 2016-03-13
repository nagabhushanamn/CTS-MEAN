/**
 * http://usejsdoc.org/
 */

var express = require('express');
//var path = requir("path")

module.exports = function(app) {

	var router = app.loopback.Router();
	
	router.get("/ping", function(req, resp) {
		resp.send("pong");
	});
	
	// app.use(loopback.static(path.resolve(__dirname, '../../client')));

	app.use(router);
}