//----------------------------------------------------------------------------------------------------//
// Estudiante: Randy Martinez
// Carnet: 2014047395
// Tarea #1: Ejercicios de Introducción a Javascript
// Ejercicio #1
//----------------------------------------------------------------------------------------------------//


function  isLetter(phrase){
  var len = phrase.length;
  for (let i = 0; i < len; i++) 
     if (!(phrase[i] >= "A" && phrase[i] <= "Z")){
       return false;
     }
  return true;
}

function isPhrase(phrase){
  if(typeof phrase == "string"){
    if(isLetter(phrase)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function isPanagram(phrase){
  phrase = phrase.replace(/\s/g, '');
  phrase = phrase.toUpperCase();
  console.log(phrase);
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var len = alphabet.length;

  if(isPhrase(phrase)){

    for (let i = 0; i < len; i++){
      if(phrase.includes(alphabet[i])){
        continue;
      }else{
        console.log("The input not an Panagram.");
        return;
      }
    }
    console.log("The input is a Panagram.");
  }else{
    console.log("The input is incorrect.");
  }
 
}

function main(){
  isPanagram("The quick brown fox jumps over the lazy dog");
  isPanagram("The quick brown fox jums over the lazy dog");
  isPanagram("abcdefgn");


}

main();

