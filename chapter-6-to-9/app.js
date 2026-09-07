// Question#1
var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("...................................<br><br>");

// Pre-increment (++a)
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment (a++)
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement (--a)
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement (a--)
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Question#2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br>");

// Question#3
var userName = prompt("Enter Your Name:");
alert("Hello " + userName + "!");

// Question#4
var num5 = prompt("Enter a Number for Table:" , 5)

if(num5 === "" || num5 === null){
    num5 = 5;
}

document.write("Table of " + num5 + "<br><br>");
document.write(num5 + " x 1 = " + (num5 * 1) + "<br>");
document.write(num5 + " x 2 = " + (num5 * 2) + "<br>");
document.write(num5 + " x 3 = " + (num5 * 3) + "<br>");
document.write(num5 + " x 4 = " + (num5 * 4) + "<br>");
document.write(num5 + " x 5 = " + (num5 * 5) + "<br>");
document.write(num5 + " x 6 = " + (num5 * 6) + "<br>");
document.write(num5 + " x 7 = " + (num5 * 7) + "<br>");
document.write(num5 + " x 8 = " + (num5 * 8) + "<br>");
document.write(num5 + " x 9 = " + (num5 * 9) + "<br>");
document.write(num5 + " x 10 = " + (num5 * 10) + "<br><br>");

//Question#5
// Subjects input
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarksPerSubject = 100;

// Marks input
var marks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));
var marks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculations
var totalMarks = totalMarksPerSubject * 3;
var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / totalMarks) * 100;

// HTML Table Result
document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td><td>" + marks1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td><td>" + marks2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td><td>" + marks3 + "%</td></tr>");
document.write("<tr><th></th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + percentage + "%</th></tr>");
document.write("</table>");
