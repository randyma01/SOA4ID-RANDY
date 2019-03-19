/*
 * Estudiantes: Randy Martínez y Gustavo Fallas
 
 * Carnets: 2014047395 y 2014035394

 * Proyecto #1: IoT - Basurero Inteligente

 * Descripción: El siguiente código parte del módulo movimiento 
   autónomo del la tapa del basurero, de manera que se accione 
   por medio del sensor radar.

 * Nota: El código original es propiedad de GeekFactory llamado:
   "Sensor ultrasónico HC-SR04 y Arduino" tomado del siguient enlace:
   https://www.geekfactory.mx/tutoriales/tutoriales-arduino/sensor-ultrasonico-hc-sr04-y-arduino/.

 * Aclaración: El código fue ajustado y modificado por Randy y Gustavo
   por las necesidades del proyecto respectivamente.
 
*/

#include <NewPing.h>
#include <Servo.h>

#define TRIGGER_PIN 12
#define ECHO_PIN 11
#define MAX_DISTANCE 200

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

int pos = 0;
Servo servo_9;
bool state;

void radar()
{
  delay(200);
  servo_9.write(pos);

  int uS = sonar.ping_median();
  int distance = (uS / US_ROUNDTRIP_CM);

  /*
  Serial.print("Distancia: ");
  Serial.print(distance);
  Serial.println("cm");
  */

  if (distance <= 20)
  {
    Serial.println("Abriendo tapa del de basurero...");
    state = true;
    pos = 180;
  }

  if (state && distance <= 5)
  {
    Serial.println("Cerrando tapa del basurero...");
    state = false;
    pos = 0;
  }
}

void setup()
{
  Serial.begin(9600);
  servo_9.attach(9);
  state = false;
}

void loop()
{
  radar();
}
