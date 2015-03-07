var main = function () {
    "use strict";

    //getJSON even parses the JSON for us, so we don't neet to
    //call JASON.parse
    $.getJSON("cards/aceOfSpades.json", function (card) {
        //print the card to the console
        console.log(card);
    });

};

$(document).ready(main);