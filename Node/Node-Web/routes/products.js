/**
 * http://usejsdoc.org/
 */

// products - Router

var express = require('express');
var router = express.Router();

router.get("/",function(req, res) {
	res.end('GET /products');
});

router.post("/",function(req, res) {
	res.end('POST /products');
});

router.put("/",function(req, res) {
	res.end('PUT /products');
});

router['delete']("/",function(req, res) {
	res.end('DELEET /products');
});

module.exports = router;