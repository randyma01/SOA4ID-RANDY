//----------------------------------------------------------------------------------------------------//
// Estudiante: Randy Martinez
// Carnet: 2014047395
// Tarea #1: Ejercicios de Introducción a Javascript
// Ejercicio #1
//----------------------------------------------------------------------------------------------------//

function verifyPhrase(phrase){
  if(typeof phrase == "string"){
    return true 
  }else{
    return false
  }
}

function isPanagram(phrase){
  if(verifyPhrase(phrase) == true){

    var phraseLenght = phrase.length;

    for(let i = 0; i <= phraseLenght; i++){

      if(phrase.codePointAt(i) >= 65 && phrase.codePointAt(i) <= 122){
        continue;
      }else{
        alert("The phrase is not a Panagram.");
        break;
      }
    }
  }else{
    alert("The input is not correct. Check again!")
  }
}

function main(){
  isPanagram("The quick brown fox jumps over the lazy dog");
}

main();
