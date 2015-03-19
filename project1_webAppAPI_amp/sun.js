/*
(function () {
    "use strict";

    var main = function () {
        var url = 'http://api.sunrise-sunset.org/json?lat=35.59&lng=-82.29&callback=?';
        $.getJSON(url, function (sunResponse) {
            console.log(sunResponse);
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
			console.log(response);
		});
	};
	
	$(document).ready(main);
}());
*/


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
