/**
 * http://usejsdoc.org/
 */

module.exports = function(app) {

	var router = app.loopback.Router();

	router.get("/ping", function(req, resp) {
		resp.send('pong...');
	});

	app.use(router);

};
