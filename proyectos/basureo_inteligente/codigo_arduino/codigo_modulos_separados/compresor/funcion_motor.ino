void motor(){
  if (millis() >= 2*periodo) {
    Serial.println("Se bajo y subio el compresor!!...");
   	return;
  }
  
  //se espera el tiempo del perido en  ms mientras baja
  //transcurrido el tiempo necesario para llegar abajo se cambia la booleana bajando -> subiendo
  if(millis() <= periodo) {  //si ha transcurrido el periodo programado
    //se inicia el motor con la direccion 0 (P.D: probar que direccion es el valor cero)
    //valueDirectionCompressor = 0;
    Serial.println("bajando...");
  } else if (millis() >= periodo && millis() <= 2*periodo) {
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