(function() {
	"use strict";

	var main = function() {
		var http = require("http"),
				express = require("express3"),
				mongoose = require("mongoose"),
				app = express();
		
		app.use(express.static(__dirname));
		app.use(express.urlencoded());
		
		mongoose.connect("mongodb://localhost/warehouse");
		
		var ItemSchema = mongoose.Schema({
			"description" : String,
			"sku" : String,
			"quantity" : Number,
			"price" : Number});
		
		var Item = mongoose.model("Item", ItemSchema); 
		
		app.post("/getItem", function(req, res) {
			Item.find(req.body, function(err, item) {
				if (err !== null) {
					res.send("ERROR");
				} else {
					res.send(item);
				}
			});
		});
		
		app.post("/putItem", function(req, res) {
			var newItem = new Item({"description" : req.body.description,
									 						"sku" : req.body.sku,
									 						"quantity" : req.body.quantity,
									 						"price" : req.body.price});
			newItem.save(function(err, result) {
				if (err !== null) {
					console.log(err);
					res.send("ERROR");
				} else {
					res.send("Item inserted/updated.");	
				}
			});
		});
		
		http.createServer(app).listen(3000);
		console.log("listening on port 3000");
		
	};
	
	main();
	
}());
	