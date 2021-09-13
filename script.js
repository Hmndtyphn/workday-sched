 //waits for DOM to execute before running the javascript function
$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mma")); // using moment.js formatting and date display
    //assign saveBtn click listener for user input and time stamp
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        // taking from the sibling html description attribute
        var text = $(this).siblings(".description").val(); 
        // taking from the parent html id attribute
        var time = $(this).parent().attr("id"); 

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load saved data from local storage, convert time properly using 24 hr conversion rate
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    //get current number of hours.
    function hourTracker() {
        
        // using moment.js to determine the current hour
        var now = moment().hour(); 

        // loop over time blocks
        $(".time-blocks").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockTime, now)

            //check the current hour time, and add class to past, present, future accordingly
            if (blockTime < now) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockTime === now) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
     //run function again
    hourTracker(); 
})




 
//  1. Display today's date---------
//  2. A single row for a task (hour,label, input box, button)
//  3. Repeat this for 9-5pm (JavaScript?)
//  4. Color code the different cells
//  5. Make saveable

//  7. Saving stuff to local storage

