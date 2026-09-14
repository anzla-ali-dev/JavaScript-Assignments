// Question#1
var studentsName = [];

// Question#2

var studentsName = new Array();

// Question#3

var stringArray = ["Apple" , "Banana" , "Orange"];

// Question#4

var numberArray = [16 , 52 , 34 , 95 ];

// Question#5

var booleanArray = [true , false , true , false ];

// Question#6

var mixedArray = ["Elea" , 21 , true , null , 42.6];

// Question#7

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write(`<h1>Qualifications:</h1>
   1) ${qualifications[0]} <br> 2) ${qualifications[1]} <br> 3) ${qualifications[2]} <br>
   4) ${qualifications[3]} <br> 5) ${qualifications[4]} <br> 6) ${qualifications[5]} <br>
   7) ${qualifications[6]} <br> 8) ${qualifications[7]} <br><br><br>`)

// Question#8

var students = ["Michael" , "Jhon" , "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

document.write(`Scores of ${students[0]} is ${scores[0]} . Percentage:${scores[0] / 500 * 100}% <br> Scores of ${students[1]} is ${scores[1]} . Percentage:${scores[1] / 500 * 100}% <br> Scores of ${students[2]} is ${scores[2]} . Percentage:${scores[2] / 500 * 100}% <br><br>
`)

// Question#9 

var color = ["red" ,  "green" , "blue" , "black" , "gray"]
document.write (`${color} <br><br>`)
console.log(color);


color.unshift("pink")
document.write (`${color} <br><br>`)
console.log(color);

var userClr = prompt("color you want in the end");
color.push(userClr)
document.write(`${color}<br><br>`)
console.log(color);

color.unshift("brown" , "silver")
document.write (`${color} <br><br>`)
console.log(color);

color.shift()
document.write (`${color} <br><br>`)
console.log(color);

color.pop()
document.write (`${color} <br><br>`)
console.log(color);

var userIndex = +prompt("Which Index")
var userClr = prompt("Which Color")

color.splice(userIndex , 0 , userClr)
document.write (`${color} <br><br>`)
console.log(color);

var deltIndex = +prompt("at which index you want to delete a color?")
var clrQuantity = +prompt("How many colors you want to remove?")

color.splice(deltIndex , clrQuantity)
document.write (`${color} <br><br>`)
console.log(color);

// Question#10

var studentScore = [320, 230, 480, 120]
studentScore.sort()
document.write (`${studentScore} <br><br>`)
console.log(studentScore);

// Question#11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2 , 4);
document.write (`${cities} <br><br>`)
document.write (`${selectedCities} <br><br>`)
console.log(cities)
console.log(selectedCities);

// Question#12

var arr = ["This " , " is " , " My " , " cat"];
var singleString = arr.join("")
document.write (`${arr} <br><br>`)
document.write (`${singleString} <br><br>`)
console.log(arr)
console.log(singleString);

// Question#13

var devices = []

devices.push("Keyboard")
devices.push("Mouse")
devices.push("Printer")
devices.push("Moniter")
document.write (`${devices} <br><br>`)
console.log(devices);
document.write("Out:<br>" + devices.shift() + "<br>");
console.log(devices);
document.write("Out:<br>" + devices.shift() + "<br>");
console.log(devices);
document.write("Out:<br>" + devices.shift() + "<br>");
console.log(devices);
document.write("Out:<br>" + devices.shift() + "<br>");
console.log(devices);

// Question#14

var devices = []

devices.push("Keyboard")
devices.push("Mouse")
devices.push("Printer")
devices.push("Moniter")
document.write (`${devices} <br><br>`)
console.log(devices);
document.write("Out:<br>" + devices.pop() + "<br>");
console.log(devices);
document.write("Out:<br>" + devices.pop() + "<br>");
console.log(devices);
document.write("Out:<br>" + devices.pop() + "<br>");
console.log(devices);
document.write("Out:<br>" + devices.pop() + "<br>");
console.log(devices);

// Question#15

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`<select>
        <option value=" phoneManufacturers[0] "> ${phoneManufacturers[0]} </option>
        <option value=" phoneManufacturers[1] "> ${phoneManufacturers[1]} </option>
        <option value=" phoneManufacturers[2] "> ${phoneManufacturers[2]} </option>
        <option value=" phoneManufacturers[3] "> ${phoneManufacturers[3]} </option>
        <option value=" phoneManufacturers[4] "> ${phoneManufacturers[4]} </option>
        <option value=" phoneManufacturers[5] "> ${phoneManufacturers[5]} </option>
    </select>`)

    console.log(phoneManufacturers);
    
