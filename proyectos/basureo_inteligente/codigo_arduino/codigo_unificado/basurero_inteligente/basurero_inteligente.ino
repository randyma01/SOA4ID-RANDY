/*
 * Estudiantes: Randy Martínez y Gustavo Fallas
 
 * Carnets: 2014047395 y 2014035394

 * Proyecto #1: IoT - Basurero Inteligente

 * Descripción: El siguiente código parte del módulo movimiento 
   autónomo del la tapa del basurero, de manera que se accione 
   por medio del sensor.

 * Nota: Las referencias respectivas de algunas partes de este código
   se pueden encontrar en el archivo referencias_codigo.txt que se 
   encuentran en esta misma carpeta. 
 
 * Aclaración: El código fue ajustado y modificado por Randy y Gustavo
   por las necesidades del proyecto respectivamente.
 
*/

#include <NewPing.h>
#include <Servo.h>
#include "HX711.h"

//-Sensor Radar-//
#define ECHO_PIN 13
#define MAX_DISTANCE 200
#define TRIGGER_PIN 12
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);
bool state;


//-Motor DC-//
int dcOne = 8;
int dcTwo = 9;
int valorpote;
int pwm1;
int pwm2;

//-LedIR-//
bool estadoLed = false;
int periodo =3000;
unsigned long tiempoAnterior = 0;
const int analogInPin = A1;
const int OutPin = 13;
int sensorValue = 0;

//-Motores Servo-//
Servo servoRight;
Servo servoLeft;

//-Sensores Peso-//
#define rightDOUT 5
#define rightCLK 4
#define leftDOUT 7
#define leftCLK 6
HX711 scaleRight;
HX711 scaleLeft;
float calibrationFactor = -92050.00;

void compressor()
{
    if (millis() - tiempoAnterior >= periodo)
    {
        estadoLed = !estadoLed;
        tiempoAnterior = millis();
    }

    valorpote = 0;
    if (estadoLed)
    {
        valorpote = 1023;
    }

    /*
   Serial.print("Direccion:" );
   Serial.println(valorpote);
    */

    pwm1 = map(valorpote, 0, 1023, 0, 255);
    pwm2 = map(valorpote, 0, 1023, 255, 0);

    analogWrite(dcOne, pwm1);
    analogWrite(dcTwo, pwm2);
}

void controlTop()
{
    if (Serial.available())
    {
        char temp = Serial.read();
        if (temp == 'a')
        {
            openTop();
        }
        if (temp == 'c')
        {
            closeTop();
        }
    }
}

void closeTop()
{
    servoRight.attach(10);
    servoLeft.attach(11);
    servoRight.writeMicroseconds(1000);
    servoLeft.writeMicroseconds(3000);
    delay(100);
    /*
    
    servoRight.writeMicroseconds(2000);
    servoLeft.writeMicroseconds(1000);
    */
    servoRight.detach();
    servoLeft.detach();
    Serial.println("Closing top door...");
}

void getWeight()
{
    scaleRight.set_scale(calibrationFactor);
    scaleLeft.set_scale(calibrationFactor);

    Serial.print("Reading compartment right: ");
    Serial.print(scaleRight.get_units(), 1);
    Serial.print(" lbs ");
    Serial.print(" ó ");
    Serial.print(scaleRight.get_units() * 453.592, 3);
    Serial.print(" g ");

    Serial.print('\n');

    Serial.print("Reading compartment left: ");
    Serial.print(scaleLeft.get_units(), 1);
    Serial.print(" lbs ");
    Serial.print(" ó ");
    Serial.print(scaleLeft.get_units() * 453.592, 3);
    Serial.print(" g ");
    Serial.print('\n');

    if (Serial.available())
    {
        char temp = Serial.read();
        if (temp == '+' || temp == 'b')
        {
            calibrationFactor += 1000;
        }
        else if (temp == '-' || temp == 'z')
        {
            calibrationFactor -= 1000;
        }
        else if (temp == 't' || temp == 'T')
        {
            scaleRight.tare();
            scaleLeft.tare();
        }
    }
}

void ledIR()
{
    sensorValue = analogRead(analogInPin);

    if (sensorValue > 900)
    {
        Serial.println("Detection > 900");
        compressor();
    }
    else
    {
        Serial.println("Detection < 900");
    }

    Serial.print("Sensor = ");
    Serial.println(sensorValue);
    delay(100);
}

void openTop()
{
    servoRight.attach(10);
    servoLeft.attach(11);
    servoRight.writeMicroseconds(3000);
    servoLeft.writeMicroseconds(1000);
    delay(100);
    /*
    delay(100);
    servoRight.writeMicroseconds(1000);
    servoLeft.writeMicroseconds(2000);
    */
    servoRight.detach();
    servoLeft.detach();
    Serial.println("Opening top door...");
}

void radar()
{
    delay(200);
    int uS = sonar.ping_median();
    int distance = (uS / US_ROUNDTRIP_CM);

    
  Serial.print("Distancia: ");
  Serial.print(distance);
  Serial.println("cm");
    

    if (distance <= 20)
    {
        Serial.println("Opening top door...");
        state = true;
        openTop();
    }

    if (state && distance <= 5)
    {
        Serial.println("Closing top door...");
        state = true;
        closeTop();
    }
}

void setup()
{
    Serial.begin(9600);
    Serial.println("Starting system.....");
    //Serial.println("HX711 calibration sketch");

    //-----Sensor Peso-----//
    scaleRight.begin(rightDOUT, rightCLK);
    scaleRight.set_scale();
    scaleRight.tare();
    scaleLeft.begin(leftDOUT, leftCLK);
    scaleLeft.set_scale();
    scaleLeft.tare();
    //long zero_factor = scaleRight.read_average();
    //Serial.print("Zero factor: ");
    //Serial.println(zero_factor);

    //-----Motor DC-----//
    pinMode(dcOne, OUTPUT);
    pinMode(dcTwo, OUTPUT);

    //-----Sensor Radar-----//
    state = false;
    pinMode(TRIGGER_PIN, OUTPUT);
    pinMode(ECHO_PIN, INPUT);


}

void loop()
{
    //-----Sensor Cercanía-----//
    radar();

    //-----Sensor Peso-----//
    getWeight();

    //-----Motores Servos-----//
    //controlTop();

    //-----Motores DC-----//
    //compressor();
}
