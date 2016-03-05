/**
 * http://usejsdoc.org/
 */

var express = require('express');

var app = express();

app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

app.get('/', function(req, res) {

	// process req...

	// #1
	// res.send("TEXT");

	// #2
	// var product={name:'laptop',price:2000};
	// res.json(product);
	
	//#3
	//res.download("somefile.txt");  
	//res.sendFile(__dirname+"/other.txt");  // octet stream
	
	//#4
	//res.redirect("http://www.nodejs.org");

	//#5
	//	res.write("A");
	//	res.write("B");
	//	res.end();
	
	//#6
	//res.sendStatus(401);
	
	
	//#7
	res.render("index",{pageTitle:'Express Leaning',message:'Welcome To ExpressWorld'});
	
	
});

app.listen(3000, function() {
	console.log('server started....');
});
