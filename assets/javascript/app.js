$(document).ready(function() {

    var time = 30;
    var intervalId;
    var wins = 0;
    var losses = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    function hidePage2() {
        $("#page2").hide();
    }

    hidePage2();

    function showPage2() {
        $("#page2").show();
    }

    function hidePage1() {
        $("#page1").hide();
    }

    function showPage1() {
        $("#page1").show();
    }

    // $("#title2").hide();
    // $("#correct-answers").hide(); 
    // $("#incorrect-answers").hide();
    // $("#unanswered").hide();
    // $(".button2").hide();

    // function that starts the clock
    function run() {
        intervalId = setInterval(decrement, 1000);
    }  

    run();

    function stop() {
        clearInterval(intervalId);
      }

    // function that counts down the seconds
    function decrement() {
        time--;
        $(".time-remaining").html("<h2>Time Remaining: " + time + " seconds </h2>");
        if (time === 0) {
            stop();
            alert("Time's Up!")
        }
    }

    // function that sets time back to 30 seconds
    function resetTime() {
        time = 30000;
    }

        //  Start on click.
        $("#submit").on("click", function() {
            hidePage1();
            showPage2();
            // clear page contents
            // check if all the questions are correct
            // increase wins or losses, and display those
            // display counts for correct, incorrect, and unanswered
        });

        //  Start on click.
        $("#play-again").on("click", function() {
            // reload 
            // hide all previous elements
            // increase wins or losses, and display those
            // display counts for correct, incorrect, and unanswered
        });

});