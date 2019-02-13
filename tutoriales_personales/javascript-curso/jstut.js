//----------------------------------------------------------------------------------------------------//
// Codigo basado en los tutoriales de:
// - Derek Banas: JavaScript Tutorial (https://www.youtube.com/watch?v=fju9ii8YsGs)
// - Fazt: Curso Javascript para Principiantes (https://www.youtube.com/watch?v=RqQ1d1qEWlE)
//----------------------------------------------------------------------------------------------------//

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
// -- Variabales -- //
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

// Operaciones
document.write("5 + 4 = ", 5 + 4, "<br />");
document.write("5 + 4 = " + 5 + 4, "<br />");
document.write("------------------", "<br />");
document.write("5 - 4 = ", 5 - 4, "<br />");
document.write("5 * 4 = ", 5 * 4, "<br />");
document.write("5 / 4 = ", 5 / 4, "<br />");
document.write("5 % 4 = ", 5 % 4, "<br />");
document.write("------------------", "<br />");

// Maximos y Minimos
document.write("Max Num = ", Number.MAX_VALUE, "<br />");
document.write("Min Num = ", Number.MIN_VALUE, "<br />");
document.write("------------------", "<br />");

// Precision 
precisionTest = 0.1000000000000001;
document.write(precisionTest + 0.1000000000000001, "<br/>");
document.write("------------------", "<br />");

// Redondeos
var balance = 1563.87;
document.write("Monthly payment : ", (balance / 12).toFixed(2), "<br />");
document.write("------------------", "<br />");

// Acciones a un Numero
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
document.write("------------------", "<br />");
document.write("Math.E = ", Math.E, "<br/>");
document.write("Math.PI = ", Math.PI, "<br/>");
document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>");
document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>");
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>");
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>");
document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>");
document.write("------------------", "<br />");

// log natural
document.write("Math.log(10) = ", Math.log(10), "<br/>"); 

// log10
document.write("Math.log10(10) = ", Math.log10(10), "<br/>"); 
document.write("Math.max(10,5) = ", Math.max(10,5), "<br/>");
document.write("Math.min(10,5) = ", Math.min(10,5), "<br/>");
document.write("Math.pow(4,2) = ", Math.pow(4,2), "<br/>");
document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>");

// Escoger un Brandon Random
document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>"); 
document.write("------------------", "<br />");

//--------------------//
// -- Conversiones -- //
//--------------------//

// Strings -> Numeros
document.write("Converted String : ", Number("3.14"), "<br />");
document.write("Converted Int : ", parseInt("5"), "<br />");
document.write("Converted Float : ", parseFloat("5.555"), "<br />");
document.write("------------------", "<br />");

//--------------------//
// -- Strings -- //
//--------------------//

var randStr = "A long " + "string that " + "goes on and on";
document.write(randStr, "<br />");
 
// Largo de un String
document.write("String Length : ", randStr.length + "<br/>");
document.write("------------------", "<br />");

// Indice de Posicion de un Caracter
document.write("Index for \"goes\" : ", randStr.indexOf("goes"), "<br/>");
document.write("------------------", "<br />");
 
// Corta el String de un Rango
document.write(randStr.slice(19, 23) + "<br/>");
 document.write(randStr.slice(19) + "<br/>");
 document.write(randStr.substr(19, 4) + "<br/>");
 document.write("------------------", "<br />");
 
// Replazar un String dado Otro
document.write(randStr.replace("and on", "forever") + "<br/>");
document.write("------------------", "<br />");
 
// Obtener un Caracter en un Posicion dada
document.write("At Index 2 : ", randStr.charAt(2) + "<br/>");
document.write("------------------", "<br />");

// Dividir un String
var randStrArray = randStr.split(" ");
document.write("------------------", "<br />");
 
// Quitar espacios en Blancos
randStr = randStr.trim();
document.write("------------------", "<br />");
 
// Todo en MAYUSCULA
document.write(randStr.toUpperCase() + "<br/>");
document.write("------------------", "<br />");
 
// Todo en miniscula
document.write(randStr.toLowerCase() + "<br/>");
document.write("------------------", "<br />");
 
// Estilos de JS
var strToStyle = "Random String";
document.write(strToStyle, "<br />");
 
document.write("Big : ", strToStyle.big(), "<br />");
document.write("Bold : ", strToStyle.bold(), "<br />");
document.write("Font Color : ", strToStyle.fontcolor("blue"), "<br />");
document.write("Font Size : ", strToStyle.fontsize("8em"), "<br />");
document.write("Italics : ", strToStyle.italics(), "<br />");
document.write("Google : ", strToStyle.link("http://google.com"), "<br />");
document.write("Small : ", strToStyle.small(), "<br />");
document.write("Strike : ", strToStyle.strike(), "<br />");
document.write("Sub : ", strToStyle.sub(), "<br />");
document.write("Sup : ", strToStyle.sup(), "<br />");
document.write("------------------", "<br />");


//--------------------//
// -- Condiciones -- //
//--------------------//


var age = 8;
 
if ((age >= 5) && (age <= 6)){
  document.write("Go to Kindergarten<br />");
} else if (age > 18) {
  document.write("Go to College<br />");
} else {
  document.write("Go to Grade ", age - 5, "<br />");
}
 
document.write("true || false = ", true || false, "<br />");
 
document.write("!true = ", ! true, "<br />");
 
document.write("\"5\" == 5 = ", ("5" == 5), "<br />");
 
document.write("\"5\" === 5 = ", ("5" === 5), "<br />");
 
// Switch is used to match a limited number of options
switch(age) {
  case 5 :
  case 6 :
    document.write("Go to Kindergarten<br />");
    break;
 
  case 7 :
    document.write("Go to 1st Grade<br />");
    break;
 
  default :
    document.write("Subtract 5 from your age<br />");
}
 
// Ternary Operator assigns a value based on a condition
// (condition) ? iftrue : ifFalse
var canIVote = (age >= 18) ? true : false;
 
document.write("Can I Vote : ", canIVote, "<br />");