// Question#1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>" );

// Question#2
var num1 = 5;
var num2 = 3;

// Subtraction
var sub = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");

// Multiplication
var multiply = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br>");

// Division
var divide = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + divide + "<br>");

// Modulus (Remainder)
var modulus = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br><br>");

// Question#3
var myVar;

document.write("Value after variable declaration is: " + myVar + " <br>");

myVar = 5;
document.write("Initial value: " + myVar + " <br>")

myVar++;
document.write("Value after increment is: " + myVar + "<br>");

myVar = myVar + 7;
document.write("Value after addition is: " + myVar + "<br>");

myVar--;
document.write("Value after decrement is: " + myVar + "<br>");

var remainder = myVar % 3;
document.write("The remainder is: " + remainder + "<br><br>");

// Question#4
var ticketPrice = 600;
var ticketCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + ticketCost + "PKR"  + "<br><br>")

// Question#5
var num4 = 4;
document.write("Table of " + num4 + "<br><br>");

document.write(num4 + " x 1 = " + (num4*1) + "<br>")
document.write(num4 + " x 2 = " + (num4*2) + "<br>")
document.write(num4 + " x 3 = " + (num4*3) + "<br>")
document.write(num4 + " x 4 = " + (num4*4) + "<br>")
document.write(num4 + " x 5 = " + (num4*5) + "<br>")
document.write(num4 + " x 6 = " + (num4*6) + "<br>")
document.write(num4 + " x 7 = " + (num4*7) + "<br>")
document.write(num4 + " x 8 = " + (num4*8) + "<br>")
document.write(num4 + " x 9 = " + (num4*9) + "<br>")
document.write(num4 + " x 10 = " + (num4*10) + "<br><br>")

// Question#6
// Celsius to Fahrenheit
var celsius = 25;
var fahrenheitFromC = (celsius * 9 / 5) + 32;
document.write(celsius + "<sup>o</sup>C is " + fahrenheitFromC + "<sup>o</sup>F<br>");

// Fahrenheit to Celsius
var fahrenheit = 70;
var celsiusFromF = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "<sup>o</sup>F is " + celsiusFromF + "<sup>o</sup>C" + "<br><br>");

// Question#7
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1><br>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);