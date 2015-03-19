(function () {
	"use strict";
	
	var express = require("express"),
			http = require("http"),
			Curl = require( 'node-libcurl' ).Curl,			
			app = express(),
			curl = new Curl();

	app.use(express.static(__dirname));
	http.createServer(app).listen(3000);

	console.log("Server running on port 3000");

	curl.setOpt( 'URL', 'http://star-api.herokuapp.com/api/v1/stars' );
	curl.setOpt( 'FOLLOWLOCATION', true );

	curl.on( 'end', function( statusCode, body, headers ) {
		app.get("/myStars", function(req, res) {
			res.send(body);
		});
	});

	curl.perform();
}());