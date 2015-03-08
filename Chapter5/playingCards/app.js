var main = function () {
    "use strict";
console.log("hello world");
    
    $.getJSON("cards/hand.json", function (hand) {
        var $list = $("<ul>");
        
        // hand is an array, so we can iterate over it // using a forEach loop
        hand.forEach(function (card) {
            
            // create a list item to hold the card
            // and append it to the list
            var $card = $("<li>");
            $card.text(card.rank + " of " + card.suit);
            $list.append($card);
        });
        // append the list to main
        $("main").append($list);
    });
    
    $.getJSON("cards/aceOfSpades.json", function (card) { 
        
        // create an element to hold the card
        var $cardParagraph = $("<p>");
       
        // add text to the paragraph element
        $cardParagraph.text(card.rank + " of " + card.suit);
        
        // append the card paragraph to main
        $("main").append($cardParagraph);
    });
    
};


$(document).ready(main);