module.exports = function(Product) {

	Product.status = function(cb) {

		var currentDate = new Date();
		var currentHour = currentDate.getHours();

		var OPEN_HOUR = 6;
		var CLOSE_HOUR = 20;

		console.log('Current hour is ' + currentHour);

		var response;
		if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
			response = 'OPEN';
		} else {
			response = 'CLOSE';
		}

		cb(null, response);

	};

	Product.getName = function(prodId, cb) {
		var response;
		Product.findById(prodId, function(err, instance) {
			response = "Name of Product is " + instance.name;
			cb(null, response);
			console.log(response);
		});
	}

	Product.remoteMethod('status', {
		http : {
			path : '/status',
			verb : 'get'
		},
		returns : {
			arg : 'status',
			type : 'string'
		}
	});

	Product.remoteMethod('getName', {
		http : {
			path : '/getname',
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
