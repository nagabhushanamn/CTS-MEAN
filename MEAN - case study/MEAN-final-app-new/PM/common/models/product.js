module.exports = function(Product) {

	Product.getName = function(prodId, cb) {

		Product.findById(prodId, function(err, instance) {
			if (err) {
				cb("Not Found", null)
			}
			var resp = instance.name;
			cb(null, resp);
		});

	};

	Product.remoteMethod('getName', {
		http : {
			path : "/name",
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
