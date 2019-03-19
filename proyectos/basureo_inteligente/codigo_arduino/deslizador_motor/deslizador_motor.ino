/*
 * Estudiantes: Randy Martínez y Gustavo Fallas
 
 * Carnets: 2014047395 y 2014035394
 
 * Proyecto #1: IoT - Basurero Inteligente

 * Descripción: El siguiente código forma parte del módulo del 
   motor DC que acciona el movimiento del compresor de basura.
 
 * Nota: El código original es propiedad de Adrìa García llamado:
   "Control velocidad y sentido motor DC" tomado del siguient enlace:
   http://diymakers.es/control-velocidad-y-sentido-de-motor-dc/.

 * Aclaración: El código fue ajustado y modificado por Randy y Gustavo
   por las necesidades del proyecto respectivamente.
*/

int pin2 = 9;
int pin7 = 10;
int valorpote;
int pwm1;
int pwm2;

bool estadoLed = false;
int periodo = 5000;
unsigned long tiempoAnterior = 0;
const int analogInPin = A1;
const int OutPin = 13;
int sensorValue = 0;

void Motor()
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
   Serial.print("Direccion: " );
   Serial.println(valorpote);
  */

  pwm1 = map(valorpote, 0, 1023, 0, 255);
  pwm2 = map(valorpote, 0, 1023, 255, 0);

  analogWrite(pin2, pwm1);
  analogWrite(pin7, pwm2);
}

void LedIR()
{
  sensorValue = analogRead(analogInPin);

  if (sensorValue > 900)
  {
    Serial.println("Deteccion > 900");
    Motor();
  }
  else
  {
    Serial.println("Deteccion < 900");
  }

  Serial.print("sensor = ");
  Serial.println(sensorValue);
  delay(100);
}

void setup()
{
  //Inicializamos los pins de salida
  Serial.begin(9600);
  pinMode(pin2, OUTPUT);
  pinMode(pin7, OUTPUT);
}

void loop()
{
  //LedIR();
  Motor();
}
