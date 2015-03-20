var AlchemyAPI = require('./alchemyapi');
var alchemyapi = new AlchemyAPI();



var myText = "You arrive at Starbucks. You stare at the line and think to yourself, 'This is going to take forever!' The girl at the front of the line seems to be placing a long order with customized details. You think again, 'Ugh, why are people so picky?'";


var demo_url = 'http://www.rantchic.com/2015/01/22/20-things-women-need-to-stop-doing-at-starbucks/?utm_source=RantLifestyle&utm_medium=RantWidget&utm_term=Slot10';

var demo_html = '<html><head><title>Node.js Demo | AlchemyAPI</title></head><body><h1>Did you know that AlchemyAPI works on HTML?</h1><p>Well, you do now.</p></body></html>';

//***********************

function myFunction() {
    alchemyapi.sentiment("text", myText, {}, function (response) {
        console.log("Sentiment 1: " + response["docSentiment"]["type"]);
    });
}


alchemyapi.sentiment("text", myText, {}, function (response) {
    var $result = "Sentiment 1: " + response["docSentiment"]["type"];
    console.log($result);
});

alchemyapi.sentiment("url", demo_url, {}, function (response) {
    console.log("Sentiment 2: " + response["docSentiment"]["type"]);
});

alchemyapi.sentiment("html", demo_html, {}, function (response) {
    console.log("Sentiment 3: " + response["docSentiment"]["type"]);
});