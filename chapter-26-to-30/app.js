// Question # 1

var num = +prompt("Enter a positive floating point number (e.g., 3.45214):");
document.write(`Number: ${num} </br> Round off value: ${Math.round(num)} </br> Floor value: ${Math.floor(num)} </br> Ceil value: ${Math.ceil(num)} </br></br>`);

// Question # 2

var negNum = +prompt("Enter a positive floating point number (e.g., -2.45214):");
document.write(`Number: ${negNum} </br> Round off value: ${Math.round(negNum)} </br> Floor value: ${Math.floor(negNum)} </br> Ceil value: ${Math.ceil(negNum)} </br></br>`);

// Question # 3

var userInput = +prompt("Enter any Number:");
document.write(`The absolute value of ${userInput} is ${Math.abs(userInput)} </br></br>`);

// Question # 4

var diceValue = Math.floor(Math.random() * 6) + 1;
document.write(`Random Dice value: ${diceValue} </br></br>`);

// Question # 5

var toss = Math.floor(Math.random() * 2) + 1;

if (toss === 2) {
    document.write(`${toss} </br> random coin value: Heads`);
}else{
    document.write(`${toss} </br> random coin value: Tails`);
}

document.write(`</br></br>`);

// Question # 6

var randomNum = Math.floor(Math.random() * 100) + 1;
document.write(`random number between 1 and 100: ${randomNum} </br></br>`);

// Question # 7

var user = prompt("Enter your weight in kilograms:");
var weight = parseFloat(user)

document.write(`The weight of user is ${weight} kilograms </br></br>`)

// Question # 8

var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Enter a number between 1 and 10:");

if (userGuess === secretNum) {
    alert("Congratulations! You guessed the correct number.   secret number is  " + secretNum);
}else{
    alert("Try again!  secret  is   " + secretNum)
}