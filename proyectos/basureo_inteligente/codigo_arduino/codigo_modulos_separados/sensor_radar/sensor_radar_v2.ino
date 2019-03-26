//https://www.prometec.net/sensor-distancia/

void radar_2()
{
    long duracion, distancia;
    digitalWrite(TRIGGER_PIN, LOW);
    delayMicroseconds(2);
    digitalWrite(TRIGGER_PIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIGGER_PIN, LOW);
    duracion = pulseIn(ECHO_PIN, HIGH);
    distancia = duracion / 2 / 29.1;
    Serial.println(String(distancia) + " cm.");
    if (distancia > MAX_DISTANCE)
    {
        Serial.println("....fuera de rango...");
    }
    else if (distancia < 20 && !state)
    {
        state = !state;
        Serial.println("abrir...motores");
    }
    else if (distancia < 20 && state)
    {
        state = !state;
        Serial.println("cerrando...motores");
    }
    delay(1500);
}