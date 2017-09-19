var userName = window.prompt("Please enter your name.");

var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;

var num1 = window.prompt("Enter a number");
var num2 = window.prompt("Enter another number");

document.getElementById("operand1").innerHTML = num1;
document.getElementById("operand2").innerHTML = num2;

var sum = parseInt(num1) + parseInt(num2);
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

var resultMessage = "<span>" + num1 + "</span> and <span>" + num2 + "</span> is ";
document.getElementById("addition").innerHTML = "The sum of " + resultMessage + sum;
document.getElementById("subtraction").innerHTML = "The difference between " + resultMessage + difference;
document.getElementById("multiplication").innerHTML = "The product of " + resultMessage + product;
document.getElementById("division").innerHTML = "The quotient of " + resultMessage + quotient;
document.getElementById("modulus").innerHTML = "The result of the mod operation on " + resultMessage + modResult;
