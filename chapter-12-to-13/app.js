// QUESTION 1

var inputChar = prompt("1. Enter a character or number:");
var asciiCode = inputChar;

if (asciiCode >= 48 && asciiCode <= 57) {
    alert("It is a Number");
} else if (asciiCode >= 65 && asciiCode <= 90) {
    alert("It is an Uppercase Letter");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    alert("It is a Lowercase Letter");
} else {
    alert("It is a Special")
var firstNumber = prompt("2. Enter first number:");
var secondNumber = prompt("2. Enter second number:");
}

// QUESTION 2

if (firstNumber > secondNumber) {
    alert(firstNumber + " is larger");
} else if (secondNumber > firstNumber) {
    alert(secondNumber + " is larger");
} else {
    alert("Both numbers are equal");
}


// QUESTION 3

var checkNumber = prompt("3. Enter any number:");

if (checkNumber > 0) {
    alert("Positive number");
} else if (checkNumber < 0) {
    alert("Negative number");
} else {
    alert("Zero");
}


// QUESTION 4

var userLetter = prompt("4. Enter a single letter:");

if (userLetter === "a" || userLetter === "e" || userLetter === "i" || userLetter === "o" || userLetter === "u") {
    alert("True (It is a Vowel)");
} else {
    alert("False (Not a Vowel)");
}


// QUESTION 5

var correctPassword = "myPassword123";
var userPassword = prompt("5. Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}


// QUESTION 6

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert("6. Greeting output: " + greeting);


// QUESTION 7

var userTime = prompt("7. Enter time in 24-hour format (e.g., 1900):");

if (userTime >= 0 && userTime < 1200) {
    alert("Good Morning");
} else if (userTime >= 1200 && userTime < 1700) {
    alert("Good Afternoon");
} else if (userTime >= 1700 && userTime < 2100) {
    alert("Good Evening");
} else if (userTime >= 2100 && userTime <= 2359) {
    alert("Good Night");
} else {
    alert("Invalid time entered");
}