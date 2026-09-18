// Question#1

var multiArr = [[] , [] , [] ,];

// Question#2

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 0;  i < matrix.length; i++) {
    document.write(matrix[i].join(" ") + "<br>")
    
}

// Question#3

for (var i = 0;  i <=10; i++) {
    document.write(i + "<br>")
    
}

// Question#4

// var num = +prompt("Enter Your Table Number")
// var maltipule = +prompt("Enter Your Table Maltipication number")

// for(var i = 1 ; i <=maltipule ; i++ ){
//     document.write(`${num} x ${i} = ${num*i} <br>`);
// }

// Question#5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0;  i <fruits.length; i++) {
    document.write(`${fruits[i]} <br>`)
    
}

document.write("<br>")

for (var j = 0;  j <fruits.length; j++) {
    document.write(`Element at index ${j} is ${fruits[j]} <br>`)
    
}

// Question#6

// counting

for (var i = 1;  i <=15; i++) {
    document.write(i + (","))
    
}

document.write("<br><br>")

// Reverse counting

for (var i = 15;  i >=1; i--) {
    document.write(i + (","))
    
}

document.write("<br><br>")

// Even numbers

for (var i = 0;  i <=20; i+=2) {
    document.write(i + (","))
    
}

document.write("<br><br>")

// ood number

for (var i = 1;  i <=20; i+=2) {
    document.write(i + (","))
    
}

document.write("<br><br>")

for (var i = 2;  i <=20; i+=2) {
    document.write(i + ("k, "))
    
}

document.write("<br><br>")

// Question#7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase()

var matched = false;

for (var i = 0; i < A.length; i++) {
    if (userInput === A[i] ) {
         matched = true;
        document.write(`${userInput} is available`);
    }
}
if (matched === false) {
    document.write(`${userInput} is not available`);
}
document.write("<br><br>")

// Question#8

var arr = [24 , 53 , 78 , 91 , 12];
var largest = arr[0];

for (var i = 1;  i < arr.length; i++) {
   if (arr[i] > largest) {
        largest = arr[i]
   }
    
    
}
document.write(`${largest} is the largest`);

document.write("<br><br>")

// Question#9

var arr = [24 , 53 , 78 , 91 , 12];
var smallest = arr[0];

for (var i = 0;  i < arr.length; i++) {
   if (arr[i] < smallest) {
        smallest = arr[i]
   }
    
    
}
document.write(` smallest number is  ${smallest} `);

document.write("<br><br>")

// Question#10

for (var  i=5;  i<105; i+=5){
    document.write(i + ",");
     
}

