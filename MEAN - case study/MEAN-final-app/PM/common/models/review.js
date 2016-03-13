module.exports = function(Review) {

	Review.beforeCreate = function(next, newReview) {
		newReview.date = Date.now();
		next();
	};

};
