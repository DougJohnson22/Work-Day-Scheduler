// create a function to use moment.js to insert the current date into the Headers
var date = moment().format("dddd, MMM Do")
$("#currentDay").text(date)


// Create a function to check the time and set the display colors
var checkTime = function () {
    // Get current time
    var currentTime = moment().format('H')
    console.log(currentTime)

    $("textarea").each(function (index) {

        // set a variable to capture the id from each textarea
        var boxtime = $(this).attr("id")

        // These if statement checks current time and compares it to the id captured above
        if (boxtime < currentTime) {
            $(this).addClass("past")
        }
        else if (boxtime > currentTime) {
            $(this).addClass("future")
        }
        else {
            $(this).addClass("present")
        }

    });

}
checkTime()

// create click eventListener
$(".saveBtn").click(function () {

    // create variable toDo to capture text from textarea
    var toDO = $("textarea").val()
    console.log(this)




})

// Grab the text from each textarea and save it local storage when the button is pushed

this.previousElementSibling

// event delegation: FYI project