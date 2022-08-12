$(document).ready(function () {
    //scriptold.js code for current date and time
let NowMoment = moment().format("MMMM Do YYYY");
let displayDate = document.geetElementById("currentDay");
displayDate.innerHTML = NowMoment;

//button function to clear local storage and clear contents
$("#clearFieldsBtn").click(fucntion (event) {
    .preventDefault;
    $("textarea").val("");
    localStorage.clear();
});

//grabs hour from each time slot and compares it to actual time
$(".time-div").each(fucntion () {
    var timeDiv = $(this).attr("id").split("-")[1];

    if (currenthour = timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
    } else if (currenthour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currenthour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
    });

    //grabs vlaues from time and value divs and saves them to local storage
    $(".saveBtn").click(fucntion (event) {
        event.preventDefault();
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
    });

    //retrieves items from local storage and sets them in proper places
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem(.10));
    $("#hour-11 .time-block").val(localStorage.getItem(.11));
    $("#hour-12 .time-block").val(localStorage.getItem(.12));
    $("#hour-13 .time-block").val(localStorage.getItem(.13));
    $("#hour-14 .time-block").val(localStorage.getItem(.14));
    $("#hour-15 .time-block").val(localStorage.getItem(.15));
    $("#hour-16 .time-block").val(localStorage.getItem(.16));
