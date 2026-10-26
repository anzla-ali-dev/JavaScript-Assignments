// Question#1

function power(a, b) {
    var result = 1;
    for (var i = 1; i <= b; i++) {
        result = result * a;
    }
    return result;
}


alert(power(2, 3)); 

// Question#2

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert(year + " is a leap year.");
    } else {
        alert(year + " is not a leap year.");
    }
}

var userYear = Number(prompt("Enter a year:"));
checkLeapYear(userYear);

// Question#3

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    var S = calculateS(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

document.write("Area of triangle is: " + calculateArea(3, 4, 5));

// Question#4

function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
    var totalMarks = 300; // Farz karein har subject 100 marks ka hai
    var obtained = m1 + m2 + m3;
    return (obtained / totalMarks) * 100;
}

function mainFunction() {
    var m1 = Number(prompt("Enter marks for subject 1:"));
    var m2 = Number(prompt("Enter marks for subject 2:"));
    var m3 = Number(prompt("Enter marks for subject 3:"));
    
    var avg = calculateAverage(m1, m2, m3);
    var perc = calculatePercentage(m1, m2, m3);
    
    document.write("Average Marks: " + avg.toFixed(2) + "<br>");
    document.write("Percentage: " + perc.toFixed(2) + "%");
}

mainFunction();

// Question#5

function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            return i; 
        }
    }
    return -1;
}


alert(customIndexOf("hello", "e")); 

// Question#6

function removeVowels(sentence) {
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
        var char = sentence.charAt(i).toLowerCase();
        if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
            result += sentence.charAt(i);
        }
    }
    return result;
}


alert(removeVowels("hello world"));

// Question#7

function isVowel(c) {
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
}

function countSuccessiveVowels(text) {
    var count = 0;
    var lowerText = text.toLowerCase();
    
    for (var i = 0; i < lowerText.length - 1; i++) {
        var char1 = lowerText.charAt(i);
        var char2 = lowerText.charAt(i + 1);
        
        if (isVowel(char1) && isVowel(char2)) {
            var pair = char1 + char2;
            switch (pair) {
                default:
                    count++;
                    break;
            }
        }
    }
    return count;
}

var sampleText = "Pleases read this application and give me gratuity";
alert("Successive vowel count: " + countSuccessiveVowels(sampleText));

// Question#8

function convertDistance(km) {
    var meters = km * 1000;
    var feet = km * 3280.84;
    var inches = km * 39370.1;
    var cm = km * 100000;
    
    document.write("Distance in meters: " + meters + " m<br>");
    document.write("Distance in feet: " + feet.toFixed(2) + " ft<br>");
    document.write("Distance in inches: " + inches.toFixed(2) + " in<br>");
    document.write("Distance in centimeters: " + cm + " cm<br>");
}


var distanceKm = Number(prompt("Enter distance between two cities in km:"));
convertDistance(distanceKm);

// Question#9

function calculateOvertime(hoursWorked) {
    if (hoursWorked > 40) {
        var overtimeHours = hoursWorked - 40;
        var overtimePay = overtimeHours * 12.00;
        return "Overtime pay is: Rs. " + overtimePay.toFixed(2);
    } else {
        return "No overtime pay. Employee worked 40 hours or less.";
    }
}

var hours = Number(prompt("Enter total hours worked:"));
alert(calculateOvertime(hours));

// Question#10

function calculateNotes(amount) {
   
    var notes100 = Math.floor(amount / 100);
    var remainder = amount % 100; 
    
    var notes50 = Math.floor(remainder / 50);
    remainder = remainder % 50; 
    
    var notes10 = Math.floor(remainder / 10);
    
    document.write("You will have " + notes100 + " hundred notes, " + notes50 + " fifty notes, " + notes10 + " ten notes.");
}

var withdrawAmount = Number(prompt("Enter amount to withdraw!!"));
calculateNotes(withdrawAmount);