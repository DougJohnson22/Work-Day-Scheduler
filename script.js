// create a function to use moment.js to insert the current date into the Headers
var date = moment().format("MMM Do YYYY")
$("#currentDay").text(date)

