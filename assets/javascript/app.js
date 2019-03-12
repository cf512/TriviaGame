$(document).ready(function() {

    var time = 31;
    var intervalId;
    var wins = 0;
    var losses = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var isThereTimeLeft = true;

    // the questions
    var questions = {
            question1: {
                question: "Where did the revolution take place?",
                choice1: "Brazil",
                choice2: "France",
                choice3: "Pakistan",
                answer: "France",
            },
            question2: {
                question: "Who was King at the time?",
                choice1: "George II",
                choice2: "Louis XVI",
                choice3: "Napoleon",
                answer: "Louis XVI",
            },
            question3: {
                question: "Who was Queen at the time?",
                choice1: "Marie Antoinette",
                choice2: "Mary Queen of Scots",
                choice3: "Catherine the Great",
                answer: "Marie Antionette",
            }
      };

    // pulling from above object, and displaying the questions on the front-end
    $("#question1").html("<hr>" + questions.question1.question + "<hr>");
    $("#question2").html("<br><hr>" + questions.question2.question + "<hr>");
    $("#question3").html("<br><hr>" + questions.question3.question + "<hr>");
    $("#choice1").html(questions.question1.choice1);
    $("#choice2").html(questions.question1.choice2);
    $("#choice3").html(questions.question1.choice3);
    $("#choice4").html(questions.question2.choice1);
    $("#choice5").html(questions.question2.choice2);
    $("#choice6").html(questions.question2.choice3);
    $("#choice7").html(questions.question3.choice1);
    $("#choice8").html(questions.question3.choice2);
    $("#choice9").html(questions.question3.choice3);

    var button1clicked = false;
    var button2clicked = false;
    var button3clicked = false;
    var button4clicked = false;
    var button5clicked = false;
    var button6clicked = false;
    var button7clicked = false;
    var button8clicked = false;
    var button9clicked = false;

    $("#button1").on("click", function() {
        if (isThereTimeLeft = true) {
            console.log("test");
            button1clicked = true;
            button2clicked = false;
            button3clicked = false;
            console.log(button1clicked);
        }
        else {
            alert ("Out of time. Please click Submit.");
        }
    });
    $("#button2").on("click", function() {
        if (isThereTimeLeft = true) {
        console.log("test");
        button1clicked = false;
        button2clicked = true;
        button3clicked = false;
        console.log(button2clicked);
    }
    else {
        alert ("Out of time. Please click Submit.");
    }
    });
    $("#button3").on("click", function() {
        if (isThereTimeLeft = true) {
        console.log("test");
        button1clicked = false;
        button2clicked = false;
        button3clicked = true;
        console.log(button3clicked);
    }
    else {
        alert ("Out of time. Please click Submit.");
    }
    });
    $("#button4").on("click", function() {
        if (isThereTimeLeft = true) {
        console.log("test");
        button4clicked = true;
        button5clicked = false;
        button6clicked = false;
        console.log(button4clicked);
    }
    else {
        alert ("Out of time. Please click Submit.");
    }
    });
    $("#button5").on("click", function() {
        if (isThereTimeLeft = true) {
        console.log("test");
        button4clicked = false;
        button5clicked = true;
        button6clicked = false;
        console.log(button5clicked);
    }
    else {
        alert ("Out of time. Please click Submit.");
    }
    });
    $("#button6").on("click", function() {
        if (isThereTimeLeft = true) {
        console.log("test");
        button4clicked = false;
        button5clicked = false;
        button6clicked = true;
        console.log(button6clicked);
    }
    else {
        alert ("Out of time. Please click Submit.");
    }
    });
    $("#button7").on("click", function() {
        if (isThereTimeLeft = true) {
        console.log("test");
        button7clicked = true;
        button8clicked = false;
        button9clicked = false;
        console.log(button7clicked);
    }
    else {
        alert ("Out of time. Please click Submit.");
    }
    });
    $("#button8").on("click", function() {
        if (isThereTimeLeft = true) {
        console.log("test");
        button7clicked = false;
        button8clicked = true;
        button9clicked = false;
        console.log(button8clicked);
    }
    else {
        alert ("Out of time. Please click Submit.");
    }
    });
    $("#button9").on("click", function() {
        if (isThereTimeLeft = true) {
        console.log("test");
        button7clicked = false;
        button8clicked = false;
        button9clicked = true;
        console.log(button9clicked);
    }
    else {
        alert ("Out of time. Please click Submit.");
    }
    });

    // check if answers are right or wrong or unanswered
    // question 1
    function checkRightWrong() {
        // check if right answer was clicked and score as correct
        if (button2clicked == true) {
            correct++;
        }
        // check if wrong answer and score as incorrect
        else if ((button1clicked == true) || (button3clicked == true)) { incorrect++; }
        // check if unanswered and score accordingly
        else if ((button1clicked && button2clicked && button3clicked) == null) {
            unanswered++;
        }
        // question 2
        if (button5clicked == true) {
            correct++;
        }
        else if ((button4clicked == true) || (button6clicked == true)) { incorrect++; }
        else if ((button4clicked && button5clicked && button6clicked) == null) {
            unanswered++;
        }
        // question 3
        if (button2clicked == true) {
            correct++;
        }
        else if ((button4clicked == true) || (button6clicked == true)) { incorrect++; }
        else if ((button7clicked && button8clicked && button9clicked) == null) {
            unanswered++;
        }
    }

    // text to have Time Remaining appear as blank -- otherwise the h2 tag in the decrement function pushes everything down when it first appears

    $(".time-remaining").html("<h2>Time Remaining: ");

    // functions to show and hide the two seperate pages (the game page and the results page)

        function hidePage2() {
            $("#page2").hide();
        }

        function showPage2() {
            $("#page2").show();
        }

        function hidePage1() {
            $("#page1").hide();
        }

        function showPage1() {
            $("#page1").show();
        }

    // initial hiding of Page2
    hidePage2();

    // function that starts the clock
    function run() {
        intervalId = setInterval(decrement, 1000);
    }  

    // initial call to the run function that starts the clock
    run();

    // function that stops the clock
    function stop() {
        clearInterval(intervalId);
        isThereTimeLeft = false;
      }

    // function that counts down the seconds
    function decrement() {
        time--;
        $(".time-remaining").html("<h2>Time Remaining: " + time + " seconds </h2>");
        if (time === 0) {
            // call to function that stops the clock
            stop();
            // alert("Time's Up!")
        }
    }

    // function that sets time back to 30 seconds
    function resetTime() {
        time = 30000;
    }

    // Wraps up the round of the game and advances the player to the next page
    $("#submit").on("click", function() {
        // clear page contents
        hidePage1();
        showPage2();
        // check if all the questions are correct

        // increase wins or losses, and display those
        // display counts for correct, incorrect, and unanswered
    });

    // Starts the game over again
    $("#play-again").on("click", function() {
        hidePage2();
        showPage1();
        resetTime();
        isThereTimeLeft = true;
        // reload 
        // hide all previous elements
        // increase wins or losses, and display those
        // display counts for correct, incorrect, and unanswered
    });

});