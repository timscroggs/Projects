/*  API KEY: fcff12e9ce3b2504d329e67bc8dafb0861d1d812
    
    API Call: TextGetTextSentiment
        • ENDPOINT: http://access.alchemyapi.com/calls/text/TextGetTextSentiment
    
    API Call: TextGetTargetedSentiment
        • ENDPOINT: http://access.alchemyapi.com/calls/text/TextGetTargetedSentiment
    
    API Call: URLGetTextSentiment
        • ENDPOINT: http://access.alchemyapi.com/calls/url/URLGetTextSentiment
    
    API Call: URLGetTargetedSentiment
        • ENDPOINT: http://access.alchemyapi.com/calls/url/URLGetTargetedSentiment
        
http://access.alchemyapi.com/calls/text/TextGetTextSentiment?apikey=fcff12e9ce3b2504d329e67bc8dafb0861d1d812&outputMode=json&text=I love you.&showSourceText=1&callback=?


http://access.alchemyapi.com/calls/url/URLGetTargetedSentiment?apikey=fcff12e9ce3b2504d329e67bc8dafb0861d1d812&outputMode=json&target=Schrenker&url=http://www.cnn.com/2009/CRIME/01/13/missing.pilot/index.html&callback=?

http://access.alchemyapi.com/calls/url/URLGetTargetedSentiment?apikey=fcff12e9ce3b2504d329e67bc8dafb0861d1d812&outputMode=json&target=Google&url=http://www.zdnet.com/article/googles-project-zero-reveals-three-apple-os-x-zero-day-vulnerabilities/&callback=?


http://access.alchemyapi.com/calls/url/URLGetTargetedSentiment?apikey=YOUR_API_KEY&outputMode=rdf&target=Schrenker&url=http://www.cnn.com/2009/CRIME/01/13/missing.pilot/index.html

*/

(function () {
    "use strict";

    var main = function () {
        var endpoint = "http://access.alchemyapi.com/calls/url/URLGetTargetedSentiment",
            
            apiKey = "fcff12e9ce3b2504d329e67bc8dafb0861d1d812", // Insert your API key here.
            outputMode = "json",		// xml (default), json, rdf
            target = "Schrenker",
            showSourceText = 1,
            // select either this option or the following... not both.
            sourceURL = "http://www.cnn.com/2009/CRIME/01/13/missing.pilot/index.html",
            //inputText = "this is my input text and it doens't have much to it",
        
            url = "http://access.alchemyapi.com/calls/url/URLGetTargetedSentiment?apikey=fcff12e9ce3b2504d329e67bc8dafb0861d1d812&outputMode=json&target=Schrenker&url=http://www.cnn.com/2009/CRIME/01/13/missing.pilot/index.html&callback=?";
            
            //url = endpoint + "?apiKey=" + apiKey + "&outputMode=" + outputMode + "&target=" + target + "&url=" + sourceURL + "&callback=?;
        
        $.getJSON(url, function (reply) {
            console.log(reply);
        });
    };

    $(document).ready(main);
}());



/*
(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://api.sunrise-sunset.org/json?lat=35.59&lng=-82.29&callback=?';
		$.getJSON(url, function(sunResponse) {
			var $sunTable = $('<table>');
			var response = sunResponse.results;
			console.log(response);
		});
	};
	
	$(document).ready(main);
}());
*/

/*
(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://api.sunrise-sunset.org/json?lat=35.59&lng=-82.29&callback=?';
		$.getJSON(url, function(sunResponse) {
			var $sunTable = $('<table>');
			var response = sunResponse.results;
			for (var prop in response) {
				var $item = $('<tr>');
				var $itemProp = $('<td>').text(prop);
				var $itemVal = $('<td>').text(response[prop]);
				$item.append($itemProp);
				$item.append($itemVal);
				$sunTable.append($item);	
			}
			
			$('main').append($sunTable);
		});
	};
	
	$(document).ready(main);
}());
*/