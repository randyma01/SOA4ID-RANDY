/*
 * Estudiantes: Randy Martinez y Gustavo Fallas
 
 * Carnets: 2014047395 y 2014035394

 * Proyecto #1: IoT - Basurero Inteligente

 * Descripción: El siguiente código forma parte del módulo de los sensores
   de peso. 
 
 * Nota: El código original es propiedad de Nathan Seidle llamado:
   "Example using the SparkFun HX711 breakout board with a scale" 
   tomado del siguiente enlace:
   https://learn.sparkfun.com/tutorials/load-cell-amplifier-hx711-breakout-hookup-guide/all.
   Para este módulo se utiliza una biblioteca externa llamada: HX711, esta se desacargo del
   repositorio oficial, el cual se puede encontrar en el siguiente enlace:
   https://github.com/bogde/HX711.


 * Aclaración: El código fue ajustado y modificado por Randy y Gustavo
   por las necesidades del proyecto respectivamente. 
*/

#include "HX711.h"

#define firstDOUT 3
#define firstCLK 2

#define secondDOUT 5
#define secondCLK 4

HX711 scaleOne;
HX711 scaleTwo;

float calibration_factor = -92050.00;

void setup()
{
  Serial.begin(9600);
   
  Serial.println("Calibrando e Iniciando");

  //Serial.println("HX711 calibration sketch");
  //Serial.println("Remove all weight from scale");
  //Serial.println("After readings begin, place known weight on scale");
  //Serial.println("Press + or a to increase calibration factor");
  //Serial.println("Press - or z to decrease calibration factor");
  
  scaleOne.begin(firstDOUT, firstCLK);
  scaleOne.set_scale();
  scaleOne.tare();

  scaleTwo.begin(secondDOUT, secondCLK);
  scaleTwo.set_scale();
  scaleTwo.tare();
  
  //long zero_factor = scaleOne.read_average();
  //Serial.print("Zero factor: ");
  //Serial.println(zero_factor);
}

void loop()
{

  scaleOne.set_scale(calibration_factor);
  scaleTwo.set_scale(calibration_factor);

  Serial.print("Lectura de Compartimiento 1: ");
  Serial.print(scaleOne.get_units(), 1);
  Serial.print(" lbs ");
  Serial.print(" ó ");
  Serial.print(scaleOne.get_units() * 453.592, 3);
  Serial.print(" g ");

  Serial.print('\n');

  Serial.print("Lectura de Compartimiento 2: ");
  Serial.print(scaleTwo.get_units(), 1);
  Serial.print(" lbs ");
  Serial.print(" ó ");
  Serial.print(scaleTwo.get_units() * 453.592, 3);
  Serial.print(" g ");
  Serial.print('\n');




  if (Serial.available())
  {
    char temp = Serial.read();
    if (temp == '+' || temp == 'a')
      calibration_factor += 1000;
    else if (temp == '-' || temp == 'z')
      calibration_factor -= 1000;
    else if (temp == 't' || temp == 'T')
      scaleOne.tare();
      scaleTwo.tare();
  }
}
