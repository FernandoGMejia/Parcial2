int Accountant = 0;
int led = 9;
int button = 2;

void setup() {
 Serial.begin(9600);
  pinMode(button,INPUT);
  pinMode(led,OUTPUT);

}

void loop() {
  if (digitalRead(button) == HIGH )
    {
      Accountant++;
      delay (100);
     }

   }
   
   if (Accountant == 0)  
   {
    digitalWrite(led,LOW);
   }
   else
   {
    digitalWrite(led,HIGH);
   }


   if (Serial.available() )
   {
    if (Accountant % 2 = 0)
     { char option = Serial.read();
      if (option == 'S')
     {
      Serial.println(Accountant)
     }
      else 
     {
     Accountant = 0;
    }
    }
   }

}
