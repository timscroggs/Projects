var main = function (toDoObjects) {
    "use strict";

    var toDos = toDoObjects.map(function (toDo) {
        //we'll just return the description of this toDoObject
        return toDo.description;
    });
    // now main has access to our toDo list!



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
                
                console.log("the tags tab was clicked!");

                var organizedByTag = [
                    {
                        "name": "shopping",
                        "toDos": ["Get groceries"]
                    },
                    {
                        "name": "chores",
                        "toDos": ["Get groceries", "Take Gracie to the park"]
                    },
                    {
                        "name": "writing",
                        "toDos": ["Make up some new ToDos", "Finish writing this book"]
                    },
                    {
                        "name": "work",
                        "toDos": ["Make up some new ToDos", "Prep for Monday's class", "Answer emails", "Finish writing this book"]
                    },
                    {
                        "name": "teaching",
                        "toDos": ["Prep for Monday's class"]
                    },
                    {
                        "name": "pets",
                        "toDos": ["Take Gracie to the park"]
                    }
                ];

                organizedByTag.forEach(function (tag) {
                    var $tagName = $("<h6 id='tags'>").text(tag.name),
                        $content = $("<ul>");

                    tag.toDos.forEach(function (description) {
                        var $li = $("<li>").text(description);
                        $content.append($li);
                    });

                    $("main .content").append($tagName);
                    $("main .content").append($content);
                });

            } else if ($element.parent().is(":nth-child(4)")) {
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

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
        //call main with the to-dos as an argument
        main(toDoObjects);
    });
});