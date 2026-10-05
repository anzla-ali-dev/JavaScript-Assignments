// Question#1 

var currentDate = new Date();
document.write(currentDate + "</br></br>");

// Question#2

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now2 = new Date();
var currentMonth = monthNames[now2.getMonth()];
document.write(`Current Month ${currentMonth}</br></br>`);

// Question#3

var now3 = new Date();
var dayString = now3.toString();
var currentDay = dayString.slice(0,3);
document.write("Today is " + currentDay + "</br></br>");

// Question#4

var now4 = new Date();
var dayIndex = now4.getDay();

if (dayIndex === 0 || dayIndex === 6) {
    document.write("Its Fun Day </br></br>");
}

// Question#5

var now5 = new Date();
var date = now5.getDate();

if (date <=15) {
    document.write("First fifteen days of the month </br></br>");
}else{
    document.write("Last days of the month </br></br>");
}

// Question#6

var now6 = new Date();
var milliSec = now6.getTime();
var minutes = milliSec / (1000 * 60);
document.write("Current Date: " + now6 + "</br></br>");
document.write("Elapsed milliseconds since January 1, 1970: " + milliSec + "</br></br>");
document.write("Elapsed minutes since January 1, 1970: " + minutes + "</br></br>");

// Question#7

var now7 = new Date();
var hours = now7.getHours();
if (hours < 12) {
    alert("Its AM");
}else{
    alert("Its PM");
}

// Question#8

var now8 = new Date(2020, 11, 31);
document.write(`later date ${now8}</br></br>`)

// Question#9

var ramdanStart = new Date("june 18, 2015");
var today = new Date();
var diffTime = today.getTime() - ramdanStart.getTime();
var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
alert(diffDays + " days have passed since 1st Ramadan, 2015");

// Question#10

var refrenceDate = new Date();
var starOf2015 = new Date("january 1, 2015");
var diffSeconds = Math.floor(refrenceDate.getTime() - starOf2015.getTime() / 1000);
document.write("On reference date " + refrenceDate + ",<br>");
document.write(diffSeconds + " seconds had passed since beginning of 2015"); 