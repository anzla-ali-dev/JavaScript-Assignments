// Question#1
var city = prompt("Enter your city name:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

// Question#2

var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}

// Question#3

var signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):");
signalColor = signalColor.toLowerCase();

if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move now");
}

// Question#4

var fuel = Number(prompt("Enter remaining fuel in car (in litres):"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Question#5

// a. Alert chalega (++a value ko 5 bana dega).

// b. Alert nahi chalega (Post-increment b++ comparison ke waqt 82 hi rahega).

// c. Condition 2 aur Condition 4 walay alerts chalenge.

// d. Alert chalega (totalCost barabar hai laborCost + materialCost ke).

// e. Sirf "True" wala alert chalega.

// f. Alert chalega (Alphabetically "car" chhota hai "cat" se).

// Question#6

var marks1 = parseInt(prompt("Enter marks for subject 1:")) || 0;
var marks2 = parseInt(prompt("Enter marks for subject 2:")) || 0;
var marks3 = parseInt(prompt("Enter marks for subject 3:")) || 0;
var totalMarks = parseInt(prompt("Enter total marks:", "300")) || 300;

var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / totalMarks) * 100;

var grade = "";
var remarks = "";

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1><br>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + totalObtained + "<br>");
document.write("Percentage : " + percentage + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");

// Question#7

var secretNumber = 7;
var userGuess = Number(prompt("Guess the secret number (1 to 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

// Question#8

var num = Number(prompt("Enter a number:"));
if (num % 3 === 0) {
    alert("The number is divisible by 3");
}

// Question#9

var num = Number(prompt("Enter a number:"));
if (num % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}

// Question#10

var temp = Number(prompt("Enter temperature:"));

if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today's Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
}

// Question#11

var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
}

alert("Result: " + result);