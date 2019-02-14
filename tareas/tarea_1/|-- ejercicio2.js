//-----------------------------------------------------------------------------------------------------//
// Estudiante: Randy Martinez
// Carnet: 2014047395
// Tarea #1: Ejercicios de Introducción a Javascript
// Ejercicio #2
//----------------------------------------------------------------------------------------------------//

function verifySide(side){
    if (typeof side == 'number' && side>0){
        return true;
    }else{
        return false;
    }
}

function findTriangleType (sideA, sideB, sideC){
    if ((verifySide(sideA) == true) && (verifySide(sideB) == true) && (verifySide(sideC) == true)){
        if (sideA == sideB && sideB == sideC){
            alert("The triangle is Equilateral.");
        } else if (sideA == sideB || sideB == sideC || sideC == sideA){
            alert("The triangle is Isosceles.")
        }else{
            alert("The triangle is Scalene.");
        }
    }else{
        alert("The values of the sides of the triangle are wrong. Check again!");
    }
  }

function main(){
    findTriangleType(2,2,2);
    findTriangleType(2,3,4);
    findTriangleType(2,2,5);
}