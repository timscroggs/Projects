// PASTE INTO A TERMINAL WINDOW (while in project directory): 
//      node alchemyapi.js fcff12e9ce3b2504d329e67bc8dafb0861d1d812

var express = require('express');

var app = express();

var AlchemyAPI = require('./alchemyapi');
var alchemyapi = new AlchemyAPI();

var http = require('http');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);

/*app.get('/', function(req, res) {
    res.end('Sentiment');
});*/

app.get('/', start);


http.createServer(app).listen(3000);



var myText = "You arrive at Starbucks. You stare at the line and think to yourself, 'This is going to take forever!' The girl at the front of the line seems to be placing a long order with customized details. You think again, 'Ugh, why are people so picky?'";


var demo_url = 'http://www.rantchic.com/2015/01/22/20-things-women-need-to-stop-doing-at-starbucks/?utm_source=RantLifestyle&utm_medium=RantWidget&utm_term=Slot10';

var demo_html = '<html><head><title>Node.js Demo | AlchemyAPI</title></head><body><h1>Did you know that AlchemyAPI works on HTML?</h1><p>Well, you do now.</p></body></html>';

//***********************


function start(req, res) {
    var output = {};

    //Start the analysis chain
    sentiment(req, res, output);
}


function sentiment(req, res, output) {
    alchemyapi.sentiment("text", myText, {}, function (response) {
        var $result = "Sentiment 1: " + response["docSentiment"]["type"];
        console.log($result);
        output['sentiment'] = {
            text: myText,
            response: JSON.stringify(response, null, 4),
            results: response['docSentiment']
        };
        res.render('index.html', output);
        console.log(output);

        //console.log("Sentiment 1: " + response["docSentiment"]["type"]);
    });
}


/*alchemyapi.sentiment("text", myText, {}, function (response) {
    var $result = "Sentiment 1: " + response["docSentiment"]["type"];
    console.log($result);

});*/

/*alchemyapi.sentiment("url", demo_url, {}, function (response) {
    console.log("Sentiment 2: " + response["docSentiment"]["type"]);
});

alchemyapi.sentiment("html", demo_html, {}, function (response) {
    console.log("Sentiment 3: " + response["docSentiment"]["type"]);
});*/