/*  API KEY: 276zgea5n9ysrfuhke91h9sczn8zqiqm
    ENDPOINT: 
*/

(function () {
        "use strict";

        var main = function () {

                src = "http://portaltnx20.openamplify.com/AmplifyWeb_v30/
                AmplifyThis ? analysis = all & apikey = 276zgea5n9ysrfuhke91h9sczn8zqiqm & outputformat = json_js & inputtext = This % 20 is % 20 a % 20 test % 20 text. % 20 Hello % 20 world!"> 


                
                    var topics = amplifyOutput.AmplifyResponse.AmplifyReturn.Topics;
                for (var i = 0; i < .TopTopics.length; i++) {
                    document.write("<p>Topic Name: " +
                        topics.TopTopics[i].Topic.Name + "</p>");
                    document.write("<p>Topic Score: " +
                        topics.TopTopics[i].Topic.Value + "</p>");
                }

                /*
                (function () {
                    "use strict";

                    var main = function () {
                        
                        var apiKey = "276zgea5n9ysrfuhke91h9sczn8zqiqm", // Insert your API key here.
                            analysis = "all", // all (default), actions, topics, demographics, styles.
                            outputFormat = "json",		// xml (default), json, dart.
                            // select either this option or the following... not both.
                            // sourceURL = "http://www.example.com";
                            inputText = "this is my input text and it doens't have much to it";
                        
                        
                        var endpoint = "http://portaltnx.openamplify.com/AmplifyWeb_v21/AmplifyThis",
                            url = "http://portaltnx.openamplify.com/AmplifyWeb_v21/AmplifyThis",
                            urlendpoint = endpoint + "apiKey=" + apiKey + ",inputText=" + inputText + ",outputFormat=" + outputFormat;
                        
                        $.getJSON(url, function (reply) {
                            console.log(reply);
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