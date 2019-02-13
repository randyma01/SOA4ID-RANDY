/* 
//----------------------------------------------------------------------------------------------------//
// Codigo basado en el tutorial de:
// - Derek Banas: JavaScript Tutorial (https://www.youtube.com/watch?v=fju9ii8YsGs)
// - Archivo HTML: jstut.html
//----------------------------------------------------------------------------------------------------//

//--------------------//
// -- Introduccion -- //
//--------------------//

//<p id="sayHello"></p> 

//var yourName = prompt("What is your name?");
//if(yourName != null){
//    document.write("Hello " + yourName, "<br />");
//    //document.getElementById("sayHello").innerHTML = "Hello " + yourName; 
//}else{
//    alert("Please enter a name next time");
//} 

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
document.write(age);
 
// If or Else
if ((age >= 5) && (age <= 6)){
  document.write("Go to Kindergarten<br />");
} else if (age > 18) {
  document.write("Go to College<br />");
} else {
  document.write("Go to Grade ", age - 5, "<br />");
}
document.write("------------------", "<br />");

document.write("true || false = ", true || false, "<br />");
 
document.write("!true = ", ! true, "<br />");
 
document.write("\"5\" == 5 = ", ("5" == 5), "<br />");
 
document.write("\"5\" === 5 = ", ("5" === 5), "<br />");
document.write("------------------", "<br />");

// Switch (bish)
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
document.write("------------------", "<br />");

 
// Operador "ternary", es una unica condicion
// -> (condicion) ? siEsTru : siEsNo
var canIVote = (age >= 18) ? true : false;
document.write("Can I Vote : ", canIVote, "<br />");
document.write("------------------", "<br />");

//--------------------//
// -- Loops -- //
//--------------------// 

// While 
var i = 1;
while (i <= 10){
  document.write(i, ", ");
  i++;
}
document.write("<br />");
document.write("------------------", "<br />");
 
// Do 
//do{
//  var guess = prompt("Guess a number between 1 and 20");
//}while(guess != 15)
 
//alert("You guessed it! 15 was the number");
//document.write("------------------", "<br />"); 
 
// For
for(j = 0; j <= 20; j++){
  if((j % 2) == 0){
    continue;
  }
  if(j == 15){
    break;
  }
  document.write(j, ", ");
}
document.write("------------------", "<br />");

var customer = {name : "Bob Thomas", address : "123 Main", balance : 50.50};
 for(k in customer){
  document.write(customer[k], "<br />");
}
document.write("------------------", "<br />");

//--------------------//
// -- Arreglos -- //
//--------------------// 

// Arreglos Silvestre, Salvaje y Comun
var tomSmith = ["Tom Smith", "123 Main", 120.50];
document.write("Arreglo Completo : ", tomSmith, "<br />");

// Primera Posicion
document.write("1st State : ", tomSmith[0], "<br />");
 
// Meter un Bicho
tomSmith[3] = "tsmith@aol.com";
 
// "Overwrite index 2 and fit everything else after index 2 without
// overwriting (Put 0 for second parameter to not overwrite)"
tomSmith.splice(2, 1, "Pittsburgh", "PA");
 
// "Delete the 4th index item"
tomSmith.splice(4,1);
 
// "Convert an array into a string (Also use toString())"
document.write("Array : ", tomSmith.valueOf(), "<br />");
 
// "Convert an array into a string with separator"
document.write("Arreglo : ", tomSmith.join(", "), "<br />");
 
// Borrar un Indice
delete tomSmith[3];
 
// Sort an array (reverse() for reverse sort)
// Works for sorting strings
tomSmith.sort();

document.write("------------------", "<br />");
 
// Sort numbers
var numbers = [4,3,9,1,20,43];
documento.write(numbers, "<br />");
 
// Ordenamiento solo para Numeros
//  X-Y: Ascendente 
// Y-X: Descendente
numbers.sort(function(x,y){ return x - y });
document.write("Num Array : ", numbers.toString(), "<br />");
 
// Mezclar los dos Arrays
var combinedArray = numbers.concat(tomSmith);
 
// Matar el Ultimo Bicho
tomSmith.pop();
 
// Meter un nuevo Bicho al Final
tomSmith.push("555-1212", "US");
 
// Matar el Primer Bicho
tomSmith.shift();
 
// Meter un nuevo Bicho al Inicio
tomSmith.unshift("Tom Smith");
 
for (var i = 0; i < tomSmith.length; i++) {
  document.write("Sentinela",tomSmith[i], "<br />");
}
document.write("------------------", "<br />");
 */


//--------------------//
// -- Funciones -- //
//--------------------// 

// Funcion para Verificar si hay Repetidos en un Arreglo
function inArray(arrayToCheck, value){
    for(i = 0; i < arrayToCheck.length; i++){
      if(arrayToCheck[i] === value){
        return true;
      }
    }
    return false;
  }

  // Arreglo para la Funcion
  var randArray = [1,2,3,4,5];

  // Invocar la Funcion
  document.write("In Array : ", inArray(randArray, 4), "<br />");
  document.write("------------------", "<br />");
      
  // Esta seria la Auxiliar
  function times3(num){
    return num * 3;
  }
   
  // Una Funcion como Parametro de Otra
  function multiply(func, num){
    return func(num);
  }

  document.write("3 * 15 = ", multiply(times3, 15), "<br />");
  document.write("------------------", "<br />");
   
  // "Define a function expression
  // We can assign functions to variables, store them in arrays,
  // pass them into other functions and return them from functions"
  var triple = function(num){
    return num * 3;
  };
   
  document.write("3 * 45 = ", multiply(triple, 45), "<br />");
   
  // Recibir una Cantidad Variable de Argumentos
  function getSum(){
    var sum = 0;
    for(i = 0; i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum;
  }
   
  // Mandarle un Ejercito de Argumentos
  document.write("Sum : ", getSum(1,2,3,4,5), "<br />");
  document.write("------------------", "<br />");

  function times2(theArray){
    var newArray = [];
    for(i = 0; i < theArray.length; i++){
      newArray.push(theArray[i] * 2);
    }
    return newArray;
  }
  document.write("Array Doubled : ", times2([1,2,3,4,5]).toString(), "<br />");
  document.write("------------------", "<br />");

  // Recursividad
  function factorial(num){
    if(num <= 1){
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  document.write("Factorial of 4 : ", factorial(4), "<br />");
  document.write("------------------", "<br />");

   
//--------------------//
// -- OO -- //
//--------------------// 

// "The variable is a reference to the object in memory"
// Un Objeto Lleno de Variables
// Atributos -> Propiedades ("Propiedades")
// Funciones o Metodos -> Capacidades ("Capabilities")

// Bicho 1
var cust1 = {
  name: "John Smith",
  street: "123 Main",
  city: "Pittsburgh",
  state: "PA",
  email: "jsmith@aol.com",
  balance: 120.50,
  payDownBal: function(amtPaid){
    this.balance -= amtPaid;
  },
  addToBal: function(amtCharged){
    this.balance += amtCharged;
  }
};
 
// Get Name
document.write("Customer Name : ", cust1.name, "<br />");
 
// Get Street
cust1.street = "215 Main St";
document.write("Customer Address : ", cust1.street, "<br />");
 
// Add & Set Country
cust1.country = "US";
document.write("Customer Country : ", cust1.country, "<br />");
 
// Borrar una Propiedad
delete cust1.country;
 
// Recorrido de todas las Propiedades
for (var prop in cust1) {
    if (cust1.hasOwnProperty(prop)) {
        document.write(prop, "<br />");
    }
}
 
// Verificar si hay una Propiedad en una Objeto
document.write("name in cust1 : ", "name" in cust1, "<br />");
 
// Funcion con un Objeto como Parametro
function getInfo(cust){
  return cust1.name + " lives at " + cust1.street + " in " + cust1.city + " " + cust1.state + " email : " + cust1.email + " and has a balance of $" + cust1.balance;
}
 
document.write(getInfo(cust1), "<br />");
 
// Call object methods
cust1.payDownBal(20.50);
cust1.addToBal(10.00);
 
document.write(getInfo(cust1), "<br />");
document.write("------------------", "<br />");
 
// Create an object constructor
function Customer(name, street, city, state, email, balance){
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.email = email;
  this.balance = balance;
 
  this.payDownBal = function(amtPaid){
    this.balance -= amtPaid;
  };
  this.addToBal = function(amtCharged){
    this.balance += amtCharged;
  };
}
 
// Bicho 2
var cust2 = new Customer("Sally Smith", "234 Main", "Pittsburgh", "PA", "ssmith@aol.com", 0.00);
document.write(getInfo(cust2), "<br />");
cust2.addToBal(15.50);
document.write(getInfo(cust2), "<br />");
document.write("------------------", "<br />");

// Define a shared prototype property for all objects
Customer.prototype.isCreditAvail = true;
 
// We define prototype methods that are shared by every object created
Customer.prototype.toString = function(){
    return this.name + " lives at " + this.street + " in " + this.city + " " + this.state + " email : " + this.email + " and has a balance of $" + this.balance.toFixed(2) + " Creditworthy : " + this.isCreditAvail;
};
 
document.write(cust2.toString());