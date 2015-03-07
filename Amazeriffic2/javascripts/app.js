var main = function () {
    "use strict";

    var toDos = [
        "Finish writing this book.",
        "Take Gracie to the Park.",
        "Answer emails.",
        "Prep for Monday's class.",
        "Make up some new ToDos.",
        "Get Groceries."
    ];

    //This version uses the jQuery shorthand techniques

    $(".tabs span").toArray().forEach(function (element) {
        //creates a click handler for this element

        $(element).on("click", function () {
            //since were using the jQuery version of element, we'll go ahead
            //and create a temp variable so we don't have to keep recreating
            //it
            var $element = $(element),
                $content;

            $(".tabs span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();


            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                var i = 0;
                for (i = toDos.length - 1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                };
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(3)")) {
                var $newTodo = $("<input id='newTodo'>"),
                    $addButton = $("<button id='addIt'>").text("+");

                $addButton.on("click", function () {
                    if ($newTodo.val() !== "") {
                        toDos.push($newTodo.val());
                        $newTodo.val("");
                    }
                });
                $content = $("<div>").append($newTodo).append($addButton);
            }
            $("main .content").append($content);
            return false;
        });
    });



    //++++++++++++++++++++++++++++++++++++++++++++++++//
    //This uses traditional for loop to iterate through tabs

    /*var tabNumber;
    
    for(tabNumber = 1; tabNumber <=3; tabNumber++) {
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        
        $(tabSelector).on("click", function (event) {
            $(".tabs span").removeClass("active");
            $(event.target).addClass("active");
            $("main .content").empty();
            return false;
        });
    }*/


    //++++++++++++++++++++++++++++++++++++++++++++++++//
    // this version has too much repeated code

    /*var makeTabActive = function(tabNumber) {
        //construct the selector from the tabNumber
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(".tabs span").removeClass("active");
        $(tabSelector).addClass("active");
        $("main .content").empty();
    };
    
    $(".tabs a:nth-child(1)").on("click",function() {
        makeTabActive(1);
        return false;
    });
    
    $(".tabs a:nth-child(2)").on("click",function() {
        makeTabActive(2);
        return false;
    });
    
     $(".tabs a:nth-child(3)").on("click",function() {
        makeTabActive(3);
        return false;
    });*/

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);