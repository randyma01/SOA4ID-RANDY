/*
 * Estudiantes: Randy Martinez y Gustavo Fallas
 * Carnets: 2014047395 y 2014035394
 * Proyecto #1: IoT - Basurero Inteligente
 
 * Descripción: El siguiente código parte del módulo movimiento 
   autónomo del la tapa del basurero, de manera que se accione 
   por medio de los motores.

   Aclaración: El código fue escrito y probado por Randy y Gustavo.
*/

#include <Servo.h>

Servo servo_1;
Servo servo_2;

int pos = 0;

void setup()
{
  Serial.begin(9600);
  servo_1.attach(8);
  servo_2.attach(9);
}

void loop()
{
  //tapa abierta
  servo_1.write(180);
  servo_2.write(0);
  delay(1500);
  //tapa cerrada
  servo_1.write(90);
  servo_2.write(90);

  delay(1500);
}
