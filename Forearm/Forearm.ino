int POT1 = A0;    // select the input pin for the potentiometer 1
int  POT2 = A1;    // select the input pin for the potentiometer 2
int X = 0;      //  select the pin for the motor control (FORWARD)
int Y = 1;      // select the  pin for the motor control (REVERSE)
int sensorValue1 = 0;  // variable to store  the value coming from POT1
int sensorValue2 = 0;  // variable to store the value  coming from POT2
void setup()
{ // declare X AND Y as an OUTPUT:
  pinMode(X,  OUTPUT);
  pinMode(Y, OUTPUT); }
void loop() 
{  // read the values from  the POTS:
  sensorValue1 = analogRead(POT1);
  sensorValue2 = analogRead(POT2);
  // compare sensor values:
  if (sensorValue1 <= sensorValue2 + 50 || sensorValue1  >= sensorValue2 - 50)
{ digitalWrite(X, LOW);
  digitalWrite(Y, LOW);   }
  if (sensorValue1 < sensorValue2 - 51)
{ digitalWrite(X, LOW);
  digitalWrite(Y,  HIGH);   } 
   if (sensorValue1 > sensorValue2 + 51)
{ digitalWrite(X, HIGH);
  digitalWrite(Y, LOW);    }  }
