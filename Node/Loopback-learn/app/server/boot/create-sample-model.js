/**
 * http://usejsdoc.org/
 */

var async = require('async');

	module.exports = function(app) {

	function createProducts(cb){
		 app.dataSources.mysqlDS.automigrate('Product', function(err) {
			    if (err) throw err;
			    app.models.Product.create([
			     {id:11,name:'Laptop',price:1000.00,make:Date.now(),description:'bla bla'},
			     {id:12,name:'Mobile',price:2000.00,make:Date.now(),description:'ola ola'}
			    ], cb);
		});
	}
	      
	 
	 // data sources
	 var mongoDs = app.dataSources.mongoDS; 
	 
	// create all models
	  async.parallel({
	    reviewers: async.apply(createReviewers),
	    products : async.apply(createProducts),
	  }, function(err, results) {
	    if (err) throw err;
	    createReviews(results.reviewers, results.products, function(err) {
	      console.log('> models created sucessfully');
	    });
	  });
	 
	 // create reviewers
	  function createReviewers(cb) {
	    mongoDs.automigrate('Reviewer', function(err) {
	      if (err) return cb(err);
	      var Reviewer = app.models.Reviewer;
	      Reviewer.create([
	        {email: 'foo@bar.com', password: 'foobar'},
	        {email: 'john@doe.com', password: 'johndoe'},
	        {email: 'jane@doe.com', password: 'janedoe'}
	      ], cb);
	    });
	  }
	  
	// create reviews
	  function createReviews(reviewers, products, cb) {
	    mongoDs.automigrate('Review', function(err) {
	      if (err) return cb(err);
	      var Review = app.models.Review;
	      var DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
	      Review.create([
	        {
	          date: Date.now() - (DAY_IN_MILLISECONDS * 4),
	          rating: 5,
	          comments: 'A very good coffee shop.',
	          publisherId: reviewers[0].email,
	          productsId: products[0].id,
	        },
	        {
	          date: Date.now() - (DAY_IN_MILLISECONDS * 3),
	          rating: 5,
	          comments: 'Quite pleasant.',
	          publisherId: reviewers[1].email,
	          productsId: products[1].id,
	        },
	        {
	          date: Date.now() - (DAY_IN_MILLISECONDS * 2),
	          rating: 4,
	          comments: 'It was ok.',
	          publisherId: reviewers[2].email,
	          productsId: products[1].id,
	        },
	      ], cb);
	    });
	  }
	
};