// // Question#1

// function displayDateTime(){
//     var now = new Date();
//     document.write(now + "<br></br>");
// }
// displayDateTime();

// // Question#2

// function greetUser(firstName , lastName){
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + " ! Welcome.");
// }
// greetUser("Elea" , "xiiiii")

// // Question#3

// function addNumbers(){
//     var num1 = +prompt("Enter your first number");
//     var num2 = +prompt("Enter your second number");
//     var sum = num1 + num2;
//     return sum;
// }

// var result = addNumbers();
// alert("Sum is: " + result);

// // Question#4

// function calculator(num1 , num2 , operator){
//     var res;
//     if (operator === "+") {
//         res = num1 + num2;
//     }else if (operator === "-") {
//         res = num1 - num2;
//     }else if (operator === "*") {
//         res = num1 * num2;
//     }else if (operator === "/") {
//         res = num1 / num2;
//     }else{
//         res = " Invalid operator!" 
//     }
//     document.write("Result: " + res);
// }

// calculator(20 , 30 ,"+")

// // Question#5

// function squareNumber(num){
//     return num * num ;

// }

// alert(squareNumber(8));

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