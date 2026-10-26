// Question#1

function displayDateTime(){
    var now = new Date();
    document.write(now + "<br></br>");
}
displayDateTime();

// Question#2

function greetUser(firstName , lastName){
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + " ! Welcome.");
}
greetUser("Elea" , "xiiiii")

// Question#3

function addNumbers(){
    var num1 = +prompt("Enter your first number");
    var num2 = +prompt("Enter your second number");
    var sum = num1 + num2;
    return sum;
}

var result = addNumbers();
alert("Sum is: " + result);

// Question#4

function calculator(num1 , num2 , operator){
    var res;
    if (operator === "+") {
        res = num1 + num2;
    }else if (operator === "-") {
        res = num1 - num2;
    }else if (operator === "*") {
        res = num1 * num2;
    }else if (operator === "/") {
        res = num1 / num2;
    }else{
        res = " Invalid operator!" 
    }
    document.write("Result: " + res);
}

calculator(20 , 30 ,"+")

// Question#5

function squareNumber(num){
    return num * num ;

}

alert(squareNumber(8));

// Question#6

function computeFactorial(num){
    var fact = 1 ;
    for (var i = 1; i <=num ; i++) {
        fact = fact * i;   
    }
    return fact;
}

alert(computeFactorial(5))

// Question#7

function printCounting(strat , end){
    for (var i = strat; i <= end; i++) {
        document.write(i + " </br>");
    }
}

printCounting(1 , 10);

// Question#8

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    
    var hyp = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hyp;
}


document.write("Hypotenuse is: " + calculateHypotenuse(3, 4));

// Question#9

function calculateArea(width , height){
    return width * height;
}

var area1 = calculateArea(5 , 10);
var w = 7;
var h = 3;
var area2 = calculateArea(w , h);
document.write("</br>Area 1: " + area1 + "<br>Area 2: " + area2);

// Question#10

function checkPalindrome(str){
    var reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        alert(str + " is a palindrome.")
    }else{
        alert(str + " is not a palindrome.")
    }
}
checkPalindrome("civic")

// Question#11

function capitalizeWords(str) {
    var words = str.split(" ");
    var result = [];
    
    for (var i = 0; i < words.length; i++) {
        var capitalized = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        result.push(capitalized);
    }
    
    return result.join(" ");
}

document.write(capitalizeWords('the quick brown fox' + '</br>')); 

// Question#12

function findLongestWord(str) {
    var words = str.split(" ");
    var longest = words[0];
    
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}


document.write(findLongestWord('Web Development Tutorial')); 

// Question#13

function countLetter(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}

document.write(countLetter('JSResources.com', 'o')); 

// Question#14

function calcCircumference(radius) {
    var y = 2 * Math.PI * radius;
    document.write("The circumference is " + y.toFixed(2) + "<br>");
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("The area is " + area.toFixed(2) + "<br>");
}


calcCircumference(5);
calcArea(5);