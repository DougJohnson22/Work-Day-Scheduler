// create a function to use moment.js to insert the current date into the Headers
var date = moment().format("dddd, MMM Do")
$("#currentDay").text(date)


// Create a function to check the time and set the display colors
var checkTime = function() {
// Get current time
var currentTime = moment().format('H')
console.log(currentTime)

// Get all elements with tag textarea
var textareaEl = $("textarea")

// loop through to get index
for (var i=0; i < textareaEl.length; i++) {

// grab each tag's id
var timeOfDayId = textareaEl[i].id;

var manipID = document.getElementById(textareaEl[i].id)

console.log(manipID)

if (timeOfDayId < currentTime) {
    $(textareaEl[i].id).addClass("past")
} else if (timeOfDayId > currentTime) {
    $(textareaEl[i].id).addClass("future")
} else {
    $(textareaEl[i].id).addClass("present")
}

    
}}

checkTime()