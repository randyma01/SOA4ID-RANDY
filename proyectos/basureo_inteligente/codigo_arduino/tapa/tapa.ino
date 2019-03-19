/*
 * Estudiantes: Randy Martínez y Gustavo Fallas
 
 * Carnets: 2014047395 y 2014035394
 
 * Proyecto #1: IoT - Basurero Inteligente
 
 * Descripción: El siguiente código parte del módulo movimiento 
   autónomo del la tapa del basurero, de manera que se accione 
   por medio de los motores.

 * Aclaración: El código fue escrito y probado por Randy y Gustavo.
*/

#include <Servo.h>

Servo servo_1;
Servo servo_2;

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  if (Serial.available())
  {
    char temp = Serial.read();
    if (temp == 'a')
    {
      abrir();
    }
    if (temp == 'c')
    {
      cerrar();
    }
  }
}

void abrir()
{
  servo_1.attach(4);
  servo_2.attach(3);
  servo_1.writeMicroseconds(2000);
  servo_2.writeMicroseconds(1000);
  delay(100);
  //servo_1.writeMicroseconds(1000);
  //servo_2.writeMicroseconds(2000);
  servo_1.detach();
  servo_2.detach();
  Serial.println("abriendo...");
}

void cerrar()
{
  servo_1.attach(4);
  servo_2.attach(3);
  servo_1.writeMicroseconds(1000);
  servo_2.writeMicroseconds(2000);
  delay(100);
  //servo_1.writeMicroseconds(2000);
  //servo_2.writeMicroseconds(1000);
  servo_1.detach();
  servo_2.detach();
  Serial.println("cerrando...");
}