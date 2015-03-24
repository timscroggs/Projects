(function () {
    "use strict";

    var $item = $('');
    
    
var start = function () {
    
    var apikey = 'fcff12e9ce3b2504d329e67bc8dafb0861d1d812',

        outputMode = 'json',
        mixed = 'mixed',
        showSourceText = '1';
    
    
    $("input[type=submit]").on("click", function (evt) {

        $("main .container").slideUp(400);
        var $text = $('#userInput').val();
        console.log($text);

        var url = 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment?' + 'apikey=' + apikey + '&text=' + $text + '&outputMode=' + outputMode + '&showSourceText=' + showSourceText;

        $.getJSON(url, function (sentimentResponse) {

            var score = sentimentResponse.docSentiment.score;
            var sentiment = sentimentResponse.docSentiment.type;
            var mixed = sentimentResponse.docSentiment.mixed;
            console.log(score);
            console.log(sentiment);
            console.log(mixed);

            if (score < -0.5) {
                //$item = $('<p id="negResponse">');
                $('<p id="negResponse">This text comes off as really negative. WARNING: You may be burning bridges!</p>').appendTo("main .response");
            }else if (score < 0) {
                //$item = $('<p id="slightNegResponse">');
                if(mixed == 1) {
                    $('<p id="slightNegResponse">This text has mixed signals but comes off as mostly negative. WARNING: You may be starting fires that end up burning bridges!</p>').appendTo("main .response");  
                }else{
                    $('<p id="slightNegResponse">This text comes off as slightly negative. WARNING: You may be starting fires that end up burning bridges!</p>').appendTo("main .response");
                }
            }else if (sentiment == "neutral") {
                //$item = $('<p id="neutralResponse">');
                if(mixed == 1) {
                    $('<p id="neutralResponse">This text has mixed signals but in the end comes off as neutral.</p>').appendTo("main .response");
                }else{
                    $('<p id="neutralResponse">This text comes off as neutral.</p>').appendTo("main .response");
                }
            }else {
                //$item = $('<p id="posResponse">');
                if(mixed == 1) {
                   $('<p id="posResponse">This text has mixed signals but comes off as mostly positive.</p>').appendTo("main .response");
                }else{
                    $('<p id="posResponse">This text comes off as really positive and should be taken well.</p>').appendTo("main .response");
                }
            }
             
        }); //end of getJSON Call 
     $('userInput').empty();
        refresh();
        
    }); //button ending
   
}; //end of Start function

    
var refresh = function() {
    var $refreshButton = $('<input type="submit" id="refreshButton" value="Do it again!">');
    $refreshButton.insertAfter("main .response")    
    
    $refreshButton.on("click", function(evt) {
        
        $("#negResponse").hide();
        $("#slightNegResponse").hide();
        $("#neutralResponse").hide();
        $("#posResponse").hide();
        
        $refreshButton.hide();
        
        $("main .container").slideDown("slow", function() {
            location.reload(true);
        });  
    });
    
};


    var main = function () {
        start();
       
    };
    
    $(document).ready(main);
    
}());