// Question#1

var firstName = prompt("Enter your First Name:");
var lastName = prompt("Enter your Last Name:");

var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Wellcome." );

// Question#2

var favtMobile = prompt("Enter your favorite Mobile Phone Model:");
document.write(`My Favorite Phone is: ${favtMobile} </br>`);
document.write(`Lenght of String: ${favtMobile.length} </br></br>`);

// Question#3

var word = "Pakistan";
var indexNum = word.indexOf("n");
document.write(`string ${word} </br>`);
document.write(`Index of 'n': ${indexNum} </br></br>`);

// Question#4

var str = "Hello World";
var indexLastNum = str.lastIndexOf("l");
document.write(`string ${str} </br>`);
document.write(`Last Index of 'l': ${indexLastNum} </br></br>`);

// Question#5

word = "Pakistani";
var charAtIndex3 = word.charAt(3);
document.write(`string: ${word} </br>`);
document.write(`Charecter At Index 3: ${charAtIndex3} </br></br>`);

// Question#6

var firstName = prompt("Enter your First Name:");
var lastName = prompt("Enter your Last Name:");

var fullName = firstName.concat(" " , lastName);
alert("Hello, " + fullName + "! Wellcome." );

// Question#7

var city = "Hydarabad";
var newCity = city.replace("Hydar" , "Islam");
document.write(` City: ${city} </br>`);
document.write(`After Replacement: ${newCity} </br></br>`);

// Question#8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var updateMessage = message.replace(/and/g , "&");
document.write(` Message: ${message} </br>`);
document.write(`Update Message: ${updateMessage} </br></br>`);

// Question#9

var strNum = "472";
document.write(`Value: ${strNum} </br>`);
document.write("type: " + typeof(strNum) + "</br></br>");
var convertedNum = Number(strNum);
document.write(`Value: ${convertedNum} </br>`);
document.write("type: " + typeof(convertedNum) + "</br></br>");

// Question#10

var userInput = prompt("Enter any Text:");
var upparCase = userInput.toUpperCase();
document.write(`User Input: ${userInput} </br></br>`);
document.write(`Upper Case: ${upparCase} </br></br>`);

// Question#11

var userInput2 = prompt("Enter any Text");
var titleCase = userInput2.charAt(0).toUpperCase() + userInput2.slice(1).toLowerCase();
document.write(`User Input: ${userInput2} </br></br>`);
document.write(`Title Case: ${titleCase} </br></br>`);

// Question#12

var num = 35.36;
var numstr = num.toString().replace("." , "");
document.write(`Number: ${num} </br>`);
document.write(`Result: ${numstr} </br>`);

// Question#13

var userName = prompt("Enter your UserName:");
var flag = true;
for (var i = 0; i <userName.length; i++) {
    var charcode = userName.charCodeAt(i);
    if (charcode === 33 || charcode === 44 || charcode === 46 || charcode === 64) {
        flag = false;
        break
    }
}
if (!flag) {
    alert("Please enter a valid username");
}else{
    alert("user accepted:" + userName);
}

// Question#14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userinput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var searchIteam = userinput.toLowerCase();
var isFound = false;
var indexnum;
for (var i = 0; i <A.length; i++) {
   if (A[i].toLowerCase() === searchIteam) {
    isFound = true;
    indexnum = i;
    break
   }
}
if (isFound) {
    document.write(`${userinput} is <b>available</b> at index ${indexnum} in our Bakery`);
}else{
    document.write(`We are sorry. ${userinput} is <b>not available</b> in our bakery`)
}

// Question#15

// a-z 97 - 122
// A-Z 65 - 90
// 0-9 48 - 57

var password = prompt("Enter Your Pssword:");
var hasCapitalAlphabet = false;
var hasSmallAlphabet = false;
var hasNum = false;
var startWithNum = false;

if (password.length < 6) {
    alert("It Must at Least 6 Characters Long");
    console.log("It Must at Least 6 Characters Long");

}else{
for (var i = 0; i< password.length; i++) {
   var code = password.charCodeAt(i)
   if (code >=97 && code <=122) {
    hasSmallAlphabet = true;
    
   }
   if (code >=65 && code <=90) {
    hasCapitalAlphabet = true;
    
   }
   if (code >=48 && code <=57 ) {
    hasNum = true;
   
   }
   if (i===0 && code >=48 && code <=57 ) {
    startWithNum = true;
   
   }
    
}
}
if (!hasCapitalAlphabet) {
    alert("password must content Capital alphabets ")
}
if (!hasSmallAlphabet) {
    alert("password must content Small alphabets ")
}
if (!hasNum) {
    alert("Password must content number")
}
if (startWithNum) {
    alert("Password must whit not start number")
}


// Question#16

var uni = "University of Karachi";
var arr = uni.split("");
for (var i = 0; i < arr.length; i++) {
    document.write(`${arr[i]} </br>`);
}

// Question#17

var userInput3 = prompt("Enter any String:");
var lastChar = userInput3.charAt(userInput3.length -1);
document.write(`User Input ${userInput3} </br>`);
document.write(`Last Character of Input ${lastChar}</br></br>`);

// Question#18

var text ="The quick brown fox jumps over the  lazy dog";
var lowerText = text.toLowerCase();
var word = lowerText.split(" ");
var count = 0;
for (var i = 0; i < word.length; i++) {
    if (word[i] === "the") {
        count++;
    }
    
}
document.write(`Text ${text} </br></br>`);
document.write(`There are ${count} occurrence(s) of word 'the'</br></br> `);
