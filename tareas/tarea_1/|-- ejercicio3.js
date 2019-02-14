//----------------------------------------------------------------------------------------------------//
// Estudiante: Randy Martinez
// Carnet: 2014047395
// Tarea #1: Ejercicios de Introducción a Javascript
// Ejercicio #3
//----------------------------------------------------------------------------------------------------//

function verifyNumber(number){
  if (typeof number == 'number' && number>0){
      return true
  }else{
      return false
  }
}

function numberAmstrong(number){
  if (verifyNumber(number) == true){

    var value = number;
    var result;
    var pw = number.toString().lenght;
    
    while(value != 0){
      temp = Math.pow(value%10,pw);
      result = result + temp;
      value = Math.floor(value/10);
    }

    if (result == number){
      alert("The number is type Amstrong!")
    }else{
      alert("The number is not type Amstrong!")
    }

  }else{
    alert("The parameter is incorrect. Check again!")
  }
}