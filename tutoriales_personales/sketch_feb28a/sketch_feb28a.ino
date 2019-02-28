void setup() {
  pinMode(13, OUTPUT);

}

void blinkLed(){
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(400);
}

void loop() {
  //blinkLed();
}
