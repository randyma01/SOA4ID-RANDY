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

int pinA = 8;
int pinB = 9;
//int valorpote;
//int pwm1;
//int pwm2;

//bool estadoLed = false;
int periodo = 5000;
unsigned long tiempoAnterior = 0;
const int analogInPin = A1;
const int OutPin = 13;
int sensorValue = 0;

void motor()
{
  if (millis() >= 2 * periodo)
  {
    Serial.println("Se bajo y subio el compresor!!...");
    return;
  }

  //se espera el tiempo del perido en  ms mientras baja
  //transcurrido el tiempo necesario para llegar abajo se cambia la booleana bajando -> subiendo
  if (millis() <= periodo)
  { //si ha transcurrido el periodo programado
    //se inicia el motor con la direccion 0 (P.D: probar que direccion es el valor cero)
    //valueDirectionCompressor = 0;
    Serial.println("bajando...");
  }
  else if (millis() >= periodo && millis() <= 2 * periodo)
  {
    //se le da la direccion para que el compresor suba
    //valueDirectionCompressor = 1023;
    Serial.println("subiendo...");
  }

  Serial.print("tiempo transcurrido: ");
  Serial.println(tiempo);

  /*Se le manda el valor al motor*/
  pwm1 = map(directionCompressor, 0, 1023, 0, 255);
  pwm2 = map(directionCompressor, 0, 1023, 255, 0);
  analogWrite(pinA, pwm1);
  analogWrite(pinB, pwm2);

  /*
  //al pasar 5000ms(tiempo estimado en lo que dura en hacer media vuelta, sea bajar o subir) se cambia la direccion del motor con el valor 1023
  if(millis() - tiempoAnterior >= periodo){  //si ha transcurrido el periodo programado
    directionCompressor = 1023;  //cambia el estado del led cada 100ms
    tiempoAnterior = millis();  //guarda el tiempo actual como referencia
   }
   */
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
  motor();
}
