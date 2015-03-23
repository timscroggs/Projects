/*
(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment?apikey=fcff12e9ce3b2504d329e67bc8dafb0861d1d812&text=I hate how things get so stressful&outputMode=json&showSourceText=1';
		$.getJSON(url, function(sentimentResponse) {
			console.log(sentimentResponse);	
		});
	};
	
	$(document).ready(main);
}());
*/

(function () {
    "use strict";

var start = function () {
    
    var apikey = 'fcff12e9ce3b2504d329e67bc8dafb0861d1d812',

        outputMode = 'json',
        showSourceText = '1';
    
    
    $("input[type=submit]").on("click", function (evt) {

        $("main .container").slideUp(400);
        var $text = $('#userInput').val();
        console.log($text);

        var url = 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment?' + 'apikey=' + apikey + '&text=' + $text + '&outputMode=' + outputMode + '&showSourceText=' + showSourceText;

        $.getJSON(url, function (sentimentResponse) {

            var score = sentimentResponse.docSentiment.score;
            var sentiment = sentimentResponse.docSentiment.type;
            console.log(score);
            console.log(sentiment);

            if (score < -0.5) {
                var $item = $('<p id="negResponse">');
                $item.append("This text comes off as negative and may be burning bridges.");                   
            }else if (score < 0) {
                var $item = $('<p id="slightNegResponse">');
                $item.append("This text is on the verge of being negative and may begin fires that end up burning bridges.");
            }else if (sentiment == "neutral") {
                var $item = $('<p id="neutralResponse">');
                $item.append("In the end this text comes off as neutral – whether positive or negative at times.");
            }else {
                var $item = $('<p id="posResponse">');
                $item.append("This text comes off as positive and should be taken well.");
            }
            
            $('main').append($item);
            
        }); //end of getJSON Call 
        
    }); //button ending
    
}; //end of Start function






    var main = function () {
        start();
    };
    
    $(document).ready(main);
    
}());