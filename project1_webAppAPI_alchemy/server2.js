(function () {
	"use strict";
	
	var express = require("express"),
			http = require("http"),
			app = express();

	//app.use(express.static(__dirname + "/test"));
    app.use(express.static(__dirname));
	http.createServer(app).listen(3000);

	app.get("/hello", function(req, res) {
		res.send("Hello, world!");
	});

	app.get("/goodbye", function(req, res) {
		res.send("Goodbye, world!");
	});

	console.log("server2.js really is working!");
	console.log("Server running on port 3000");
}());