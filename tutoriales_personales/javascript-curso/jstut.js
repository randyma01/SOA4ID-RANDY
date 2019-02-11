//--------------------//
// -- Introduccion -- //
//--------------------//

//<p id="sayHello"></p> **

/* var yourName = prompt("What is your name?");

if(yourName != null){
    document.write("Hello " + yourName, "<br />");
    //document.getElementById("sayHello").innerHTML = "Hello " + yourName; **
}else{
    alert("Please enter a name next time");
} */

//--------------------//
// -- Varibales -- //
//--------------------//

var myName = "Randy";
var myAge = 23;
document.write(myName, "<br />");
document.write(myAge, "<br />");
document.write("------------------", "<br />");
myName = 100;
document.write(myName, "<br />");

//--------------------//
// -- Math Functions -- //
//--------------------//

document.write("5 + 4 = ", 5 + 4, "<br />");
document.write("5 + 4 = " + 5 + 4, "<br />");
document.write("------------------", "<br />");
document.write("5 - 4 = ", 5 - 4, "<br />");
document.write("5 * 4 = ", 5 * 4, "<br />");
document.write("5 / 4 = ", 5 / 4, "<br />");
document.write("5 % 4 = ", 5 % 4, "<br />");
document.write("------------------", "<br />");
document.write("Max Num = ", Number.MAX_VALUE, "<br />");
document.write("Min Num = ", Number.MIN_VALUE, "<br />");
document.write("------------------", "<br />");
precisionTest = 0.1000000000000001;
document.write(precisionTest + 0.1000000000000001, "<br/>");
document.write("------------------", "<br />");
var balance = 1563.87;
document.write("Monthly payment : ", (balance / 12).toFixed(2), "<br />");
document.write("------------------", "<br />");
var randNum = 5;
document.write("El valor de randNum es: ", randNum, "<br/>");
document.write("randNum++ = ", randNum++, "<br/>");
document.write("++randNum = ", ++randNum, "<br/>");
document.write("randNum-- = ", randNum--, "<br/>");
document.write("--randNum = ", --randNum, "<br/>");
document.write("randNum += 5 = ", randNum += 5, "<br/>");
document.write("randNum -= 5 = ", randNum -= 5, "<br/>");
document.write("randNum *= 5 = ", randNum *= 5, "<br/>");
document.write("randNum /= 5 = ", randNum /= 5, "<br/>");
document.write("------------------", "<br />");
document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br/>");
document.write("(3 + 2) * 5 = ", (3 + 2) * 5, "<br/>");