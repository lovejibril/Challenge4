/*
Create a simple calculator that can add, subtract, multiply, and divide two numbers

1. Have two inputs for the user to put in 2 numbers
2. When an operation (+, -, *, /) is pushed, the 2 numbers are stored in variables
3. Perform addition, subtraction, multiplication, and division on the numbers
4. Display the sum, difference, product, and quotient of the two numbers
    -  You will need a display area on your page

CHALLENGE:
- When dividing, display the answer as a whole number quotient with remainder (no decimals)

HINT: you will need Modulus %

*/

// var number1 = document.querySelector("#number1").value;
// var number2 = document.querySelector("#number2").value;

function addNumber(){
    var number1 = document.querySelector("#number1").value;
    var number2 = document.querySelector("#number2").value;
    var a = parseInt(number1);
    var b = parseInt(number2);
    var result = a + b;
    document.getElementById("Answer").value = result;

}
function subNumber(){
    var number1 = document.querySelector("#number1").value;
    var number2 = document.querySelector("#number2").value;
    var a = parseInt(number1);
    var b = parseInt(number2);
    var result = a - b;
    document.getElementById("Answer").value = result;

}

function mutilNumber(){
    var number1 = document.querySelector("#number1").value;
    var number2 = document.querySelector("#number2").value;
    var a = parseInt(number1);
    var b = parseInt(number2);
    var result = a * b;
    document.getElementById("Answer").value = result;

}

function divideNumber(){
    var number1 = document.querySelector("#number1").value;
    var number2 = document.querySelector("#number2").value;
    var a = parseInt(number1);
    var b = parseInt(number2);
    var result = a / b;
    document.getElementById("Answer").value = result;

}

