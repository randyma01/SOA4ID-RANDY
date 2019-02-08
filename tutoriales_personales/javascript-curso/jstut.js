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