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


(function() {
	"use strict";
	
	var main = function() {
		
		$.getJSON(url, function(sentimentResponse) {
			var $sunTable = $('<table>');
			var score = sentimentResponse.docSentiment.score;
            var sentiment = sentimentResponse.docSentiment.type;
            console.log(score)
            console.log(sentiment);
		});
	};
	
	$(document).ready(main);
}());


/*

(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment?apikey=fcff12e9ce3b2504d329e67bc8dafb0861d1d812&text=I hate how things get so stressful&outputMode=json&showSourceText=1&callback=?';
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
