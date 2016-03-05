/**
 * http://usejsdoc.org/
 */

var express = require("express");
var router = express.Router();
var _ = require("underscore");

router.get("/", function(req, res) {
	res.json(items);
});
router.get("/:prodId", function(req, res) {
	var product = null;
	console.log(req.params.prodId);
	items.forEach(function(elt, i) {
		if (elt.id == req.params.prodId) {
			product = elt;
		}
	});
	res.json(product);
});
router.post("/", function(req, res) {
	var newProduct = req.body;
	items.push(newProduct);
	res.send('Saved..'); // really bad response..
});

router.put("/", function(req, res) {
	res.send('PUT:/products/');
});
router['delete']("/:prodId", function(req, res) {
	res.send('DELETE:/products/');
});

module.exports = router;

// ------------------------------------------------

var items = [ {
	id : 1,
	name : 'Mobile',
	price : 1000.00,
	desc : 'New Model',
	canBuy : true,
	notAvailable : false,
	make : new Date()
}, {
	id : 2,
	name : 'Laptop',
	price : 2000.00,
	desc : 'New Model',
	canBuy : true,
	notAvailable : false,
	make : new Date()
} ];