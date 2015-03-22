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

    var main = function () {
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
                console.log(score)
                console.log(sentiment);

                if (score < -0.5) {
                    //alert('negative');
                    var $item = $('<p id="negResponse">');
                    $item.append("Your text was negative, with this email you may be burning bridges");                   
                    
                } else if (score < 0) {
                    //alert('negative');
                    var $item = $('<p id="slightNegResponse">');
                    $item.append("Your text was on the verge of negative, and may be burning bridges if sent");  
                }
                else {
                    var $item = $('<p id="posResponse">');
                    $item.append("Your score was calculated as positive");
                }  

                $('main').append($item);
            });
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