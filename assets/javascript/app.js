$(document).ready(function() {

        //  Start on click.
        $("#button1").on("click", function() {
            //  Set the button alert's timeout to run three seconds after the function's called.
            testAlert = setTimeout(function() {
            alert("Test Alert.");
            }, 1000);
        });

});