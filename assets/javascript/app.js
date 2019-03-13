var time = 31;
var intervalId;
var wins = 0;
var losses = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var isThereTimeLeft = true;

$(document).ready(function() {

    $("#correct-answers").text("Correct Answers: "+ correct);
    $("#incorrect-answers").text("Incorrect Answers "+ incorrect);
    $("#unanswered").html("Unanswered Questions: "+ unanswered);
    $("#wins-losses").html("Wins: " + wins + "<br>Losses: " + losses);
    console.log(wins + " " + losses);

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
    
    // initializes button click status as null -- we use null to determine if the questions was unanswered
    var button1clicked;
    var button2clicked;
    var button3clicked;
    var button4clicked;
    var button5clicked;
    var button6clicked;
    var button7clicked;
    var button8clicked;
    var button9clicked;

    // resets the button statuses back to null -- we use this when resetting the game to play again
    function resetButtonStatus(){
        button1clicked = null;
        button2clicked = null;
        button3clicked = null;
        button4clicked = null;
        button5clicked = null;
        button6clicked = null;
        button7clicked = null;
        button8clicked = null;
        button9clicked = null;
    }

    // clicking on the radio buttons will result in different actions

    $("#button1").on("click", function() {
        // can only be clicked if there is time on the clock
        if (isThereTimeLeft == true) {
        // marks true for the button clicked
        button1clicked = true;
        // and false for the other two options in the questions
        // this prevents multiple selections from happening on the backend
        button2clicked = false;
        button3clicked = false;
        console.log("button1clicked= " + button1clicked);
        }
        else {
            // if a button is pushed with no time on the clock, an alert happens:
            alert ("Out of time. Please click Submit.");
            // also the button doesn't stay selected
            $("#button1").prop("checked", false);
        }
        // same actions below for each button -- there is surely a better way of doing this than having 9 separate ones
    });

    // the same actions for the other 8 buttons:

                    $("#button2").on("click", function() {
                        if (isThereTimeLeft == true) {
                        button1clicked = false;
                        button2clicked = true;
                        button3clicked = false;
                        console.log("button2clicked= " + button2clicked);
                        }
                    else {
                        alert ("Out of time. Please click Submit.");
                        $("#button2").prop("checked", false);
                    }
                    });
                    
                    $("#button3").on("click", function() {
                        if (isThereTimeLeft == true) {
                        button1clicked = false;
                        button2clicked = false;
                        button3clicked = true;
                        console.log("button3clicked= " + button3clicked);
                    }
                    else {
                        alert ("Out of time. Please click Submit.");
                        $("#button3").prop("checked", false);
                    }
                    });
                    $("#button4").on("click", function() {
                        if (isThereTimeLeft == true) {
                        button4clicked = true;
                        button5clicked = false;
                        button6clicked = false;
                        console.log(button4clicked);
                    }
                    else {
                        alert ("Out of time. Please click Submit.");
                        $("#button4").prop("checked", false);
                    }
                    });
                    $("#button5").on("click", function() {
                        if (isThereTimeLeft == true) {
                        button4clicked = false;
                        button5clicked = true;
                        button6clicked = false;
                        console.log(button5clicked);
                    }
                    else {
                        alert ("Out of time. Please click Submit.");
                        $("#button5").prop("checked", false);
                    }
                    });
                    $("#button6").on("click", function() {
                        if (isThereTimeLeft == true) {
                        button4clicked = false;
                        button5clicked = false;
                        button6clicked = true;
                        console.log(button6clicked);
                    }
                    else {
                        alert ("Out of time. Please click Submit.");
                        $("#button6").prop("checked", false);
                    }
                    });
                    $("#button7").on("click", function() {
                        if (isThereTimeLeft == true) {
                        button7clicked = true;
                        button8clicked = false;
                        button9clicked = false;
                        console.log(button7clicked);
                    }
                    else {
                        alert ("Out of time. Please click Submit.");
                        $("#button7").prop("checked", false);
                    }
                    });
                    $("#button8").on("click", function() {
                        if (isThereTimeLeft == true) {
                        button7clicked = false;
                        button8clicked = true;
                        button9clicked = false;
                        console.log(button8clicked);
                    }
                    else {
                        alert ("Out of time. Please click Submit.");
                        $("#button8").prop("checked", false);
                    }
                    });
                    $("#button9").on("click", function() {
                        if (isThereTimeLeft == true) {
                        button7clicked = false;
                        button8clicked = false;
                        button9clicked = true;
                        console.log(button9clicked);
                    }
                    else {
                        alert ("Out of time. Please click Submit.");
                        $("#button9").prop("checked", false);
                    }
                    });

    // a function to check if answers are right or wrong or unanswered, and to increase the score counts accordingly
    
    function checkRightWrong() {
        
        //question 1 - buttons 1, 2, 3

        // check if unanswered and score accordingly
        if ((button1clicked && button2clicked && button3clicked) == undefined) {
            unanswered++;
        }
        // check if correct answer and score accordingly
        else if (button2clicked == true) {
            correct++;
        }
        // check if wrong answer and score accordingly
        else if ((button1clicked == true) || (button3clicked == true)) {      incorrect++; }
        
        // question 2 - buttons 4, 5, 6
        if ((button4clicked && button5clicked && button6clicked) == undefined) {
            unanswered++;
        }
        else if (button5clicked == true) {
            correct++;
        }
        else if ((button4clicked == true) || (button6clicked == true)) {     incorrect++; }
        
        // question 3 - buttons 7, 8, 9
        if ((button7clicked && button8clicked && button9clicked) == undefined) {
            unanswered++;
        }
        else if (button7clicked == true) {
            correct++;
        }
        else if ((button8clicked == true) || (button9clicked == true)) {      incorrect++; }
    }

    // a function to update the counts for wins and losses

    function updateWinLoss() {
        // 
        if (correct > incorrect) {
            wins++;
        }
        else if (incorrect > correct) {
            losses++
        }
    }

    // placeholder text to have Time Remaining appear with a blank count -- otherwise the h2 tag in the decrement function pushes everything down when it first appears and that looks less than ideal

        $(".time-remaining").html("<h2>Time Remaining: ");

    // functions to show and hide the two seperate "pages" (the game page and the results page)

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

    // function that stops the clock -- called in the next function
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
            alert("Time's Up!")
        }
    }

    // function that starts the clock
    function run() {
        intervalId = setInterval(decrement, 1000);
    }  

    // initial call to the run function that starts the clock when the page loads
    run();

    // function that sets time back to 30 seconds
    function resetTime() {
        time = 31;
        isThereTimeLeft = true;
    }

    // Wraps up the round of the game and advances the player to the next page
    $("#submit").on("click", function() {
        // stops the clock and sets IsThereTimeLeft to false
        stop();
        // grades the answers and calculates correct vs incorrect
        checkRightWrong();
        // uses info from previous function to update wins or losses
        updateWinLoss();
        // clears "page1" contents
        hidePage1();
        // loads "page2" contents
        showPage2();
        // updates all the displayed stats
        $("#correct-answers").text("Correct Answers: "+ correct);
        $("#incorrect-answers").text("Incorrect Answers "+ incorrect);
        $("#unanswered").html("Unanswered Questions: "+ unanswered);
        $("#wins-losses").html("Wins: " + wins + "<br>Losses: " + losses);
    });

    // Starts the game over again
    $("#play-again").on("click", function() {
        // hides the results page
        hidePage2();
        // unhides the game page
        showPage1();
        // resets the clock to 30 seconds
        resetTime();
        // clears the selection of the radio buttons
        $("input").prop("checked", false);
        // resets button status back to inital state of null
        resetButtonStatus();
        // sets answer counts back to zero for the next round
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    });

});