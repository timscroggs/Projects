(function () {
    "use strict";

    var express = require("express"),
        http = require("http"),
        app = express();
    
    var server = require('http').createServer(app);
    
    var AlchemyAPI = require('./alchemyapi');
    var alchemyapi = new AlchemyAPI();

    //app.use(express.static(__dirname + "/test"));
    //app.use(express.static(__dirname));
    //http.createServer(app).listen(3000);
    
    
    var port = process.env.PORT || 3000;
    server.listen(port, function(){
        console.log('Express server listening on port ' + port);
        console.log('To view the example, point your favorite browser to: localhost:3000'); 
    });
    

    var myText = "Whoa, AlchemyAPI's Node.js SDK is really great, I can't wait to build my app!";

    
    
    //***********************
    
    //app.get('/', main);
    
    var main = function () {  
        alchemyapi.sentiment("text", myText, {}, function (response) {
            console.log("Sentiment: " + response["docSentiment"]["type"]);
        });
    };

}());











//var consolidate = require('consolidate');


//var server = require('http').createServer(app);

//Create the AlchemyAPI object



