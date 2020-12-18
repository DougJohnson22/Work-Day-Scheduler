

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



// Create functions to read the textarea and then set to local storage when the save button is pressed and then get from local storage on refresh

// create click eventListener
$(".saveBtn").click(function () {
    localStorage.setItem("Task" + $(this).data("id"), ($(this).prev().val()))
})

// create a function to add a 0 to the number in the loop
var numberFormat = function (num) {
    if (num >= 10) {
        return num
    } return "0" + num
}

// create a for loop to run through the local history and fill in text to the textarea with the same id number
for (var i = 9; i < 18; i++) {
    $("#" + numberFormat(i)).val(localStorage.getItem("Task" + numberFormat(i)))

}

// create a function to activate the hover feature when the icon is moused over
var hoverEffect = $(".saveBtn").hover(handlerInOut)(function () {
    $(this).attr("class", "i:hover")
})