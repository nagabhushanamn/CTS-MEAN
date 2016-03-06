module.exports = function(Product) {

	Product.getName = function(prodId, cb) {

		if (!prodId) {
			cb('Need Product Id', null);
			return;
		}

		Product.findById(prodId, function(err, product) {
			var response = product.name;
			cb(null, response);
		});

	};

	Product.remoteMethod('getName', {
		http : {
			path : '/getName',
			verb : 'get'
		},
		accepts : {
			arg : 'id',
			type : 'number',
			http : {
				source : 'query'
			}
		},
		returns : {
			arg : 'name',
			type : 'string'
		}
	});

};
