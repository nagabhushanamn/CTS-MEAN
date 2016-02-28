/**
 * http://usejsdoc.org/
 */

// require('./package1'); // index.js
var fs = require('fs');
var _ = require('underscore');

var util = {
	findMax : function(arr) {
		return _.max(arr);
	},
	findMin : function(arr) {
		return _.min(arr);
	}
};

module.exports = util;
