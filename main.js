function printNumber() {
    var number = prompt("Enter a number:");
    document.getElementById("span").innerHTML = number;
}

function checkDivisibility() {
    var number = prompt("Enter a number:");
    if (number % 3 === 0 && number % 4 === 0) {
        document.getElementById("span").innerHTML = "Yes";
    } else {
        document.getElementById("span").innerHTML = "No";
    }
}

function printMaxOfTwo() {
    var num1 =Number( prompt("Enter the first number:"));
    var num2 = Number(prompt("Enter the second number:"));
    var max ;
    if(num1>num2){
        max = num1;
    }
    else{
        max = num2;
    }
    document.getElementById("span").innerHTML = max;
}

function checkNegativePositive() {
    var number = prompt("Enter a number:");
    if (number < 0) {
        document.getElementById("span").innerHTML = "Negative";
    } else {
        document.getElementById("span").innerHTML = "Positive";
    }
}
// with built in function; max()and min()
function findMaxMinOfThree() {
    var num1 = prompt("Enter the first number:");
    var num2 = prompt("Enter the second number:");
    var num3 = prompt("Enter the third number:");
    var max = Math.max(num1, num2, num3);
    var min = Math.min(num1, num2, num3);
    document.getElementById("span").innerHTML = "Max: " + max + ", Min: " + min;
}

function checkEvenOdd() {
    var number = prompt("Enter a number:");
    if (number % 2 === 0) {
        document.getElementById("span").innerHTML = "Even";
    } else {
        document.getElementById("span").innerHTML = "Odd";
    }
}

function checkVowelConsonant() {
    var char = prompt("Enter a character:").toLowerCase();
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        document.getElementById("span").innerHTML = "Vowel";
    } else {
        document.getElementById("span").innerHTML = "Consonant";
    }
}

function printNumbers() {
    var number = prompt("Enter a number:");
    var result = "";
    for (var i = 1; i <= number; i++) {
        result += i + " ";
    }
    document.getElementById("span").innerHTML = result.trim();
}

function printMultiplicationTable() {
    var number = prompt("Enter a number:");
    var result = "";
    for (var i = 1; i <= 12; i++) {
        result += `${number} * ${i} = ${number * i}<br>`;
    }
    document.getElementById("span").innerHTML = result;
}

function printEvenNumbers() {
    var number = prompt("Enter a number:");
    var result = "";
    for (var i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            result += i + " ";
        }
    }
    document.getElementById("span").innerHTML = result.trim();
}

function printPower() {
    var result =1;
    var base = Number(prompt("Enter the base number:"));
    var exponent = Number(prompt("Enter the exponent:"));
    for(var i = 0; i < exponent ;i++){
        result*=base;
    }
    document.getElementById("span").innerHTML = result;
}

function calculateMarks() {
    var marks = [];
    for (var i = 0; i < 5; i++) {
        marks.push(Number(prompt(`Enter marks for subject ${i + 1}:`)));
    }
    var total = marks.reduce((a, b) => a + b, 0);
    var average = total / 5;
    var percentage = (total / 500) * 100;
    document.getElementById("span").innerHTML = `Total: ${total}<br>Average: ${average}<br>Percentage: ${percentage}`;
}

function printDaysInMonth() {
    var month = Number(prompt("Enter the month number:"));
    var days;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        default:
            days = "Invalid month";
    }
    document.getElementById("span").innerHTML = "Days in month: " + days;
}

function calculatePercentageAndGrade() {
    var subjects = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer"];
    var totalMarks = 0;
    subjects.forEach(subject => {
        var marks = Number(prompt(`Enter marks for ${subject}:`));
        totalMarks += marks;
    });
    var percentage = (totalMarks / 500) * 100;
    var grade;
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    document.getElementById("span").innerHTML = `Percentage: ${percentage}<br>Grade: ${grade}`;
}

function maxSwitch(){
    var num1 = Number(prompt("Enter the 1st number :"));
    var num2 = Number(prompt("Enter the 2nd number :"));
    // var temp =num1;
    switch(true){
        case (num1>num2):
            document.getElementById("span").innerHTML= num1;
        break;
        case (num2>num1):
            document.getElementById("span").innerHTML = num2
        break;
        default:
            document.getElementById("span").innerHTML="inavail Number (;";
    }
}

function printNumbers1To10() {
    var result = "";
    for (var i = 1; i <= 10; i++) {
        result += i + " ";
    }
    document.getElementById("span").innerHTML = result.trim();
}

function sumOfFirst10NaturalNumbers() {
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += i;
    }
    document.getElementById("span").innerHTML = "Sum: " + sum;
}

function printEvenNumbers1To20() {
    var result = "";
    for (var i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            result += i + " ";
        }
    }
    document.getElementById("span").innerHTML = result.trim();
}

function factorial() {
    var number = Number(prompt("Enter a number:"));
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result *= i;
    }
    document.getElementById("span").innerHTML = "Factorial: " + result;
}

function reverseString() {
    var str = prompt("Enter a string:");
    var reversedStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    document.getElementById("span").innerHTML = reversedStr;
}

function printArrayElements() {
    var arrLength = Number(prompt("Enter the length of the array:"));
    var result = "";
    for (var i = 0; i < arrLength; i++) {
        var element = prompt(`Enter element ${i + 1}:`);
        result += element + " ";
    }
    document.getElementById("span").innerHTML = result.trim();
}

function findMaxInArray() {
    var arrLength = Number(prompt("Enter the length of the array:"));
    var max = -Infinity;
    for (var i = 0; i < arrLength; i++) {
        var element = Number(prompt(`Enter element ${i + 1}:`));
        if (element > max) {
            max = element;
        }
    }
    document.getElementById("span").innerHTML = "Maximum element is: " + max;
}

function printMultiplicationTable10() {
    var number = Number(prompt("Enter a number:"));
    var result = "";
    for (var i = 1; i <= 10; i++) {
        result += `${number} * ${i} = ${number * i}<br>`;
    }
    document.getElementById("span").innerHTML = result;
}

function countVowels() {
    var str = prompt("Enter a string:");
    var vowels = "aeiouAEIOU";
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    document.getElementById("span").innerHTML = "Number of vowels: " + count;
}

function checkPrime() {
    var number = Number(prompt("Enter a number:"));
    var isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    document.getElementById("span").innerHTML = isPrime ? "Prime" : "Not Prime";
}
