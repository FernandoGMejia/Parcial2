const TelegramBot = require('node-telegram-bot-api');

const token = '465488182:AAGAZvw54RWFVaRsc9cZ0jXjJr4kNBTiKAA';

var serialport = require("serialport");
var miSerial = new serialport("/dev/ttyUSB1", {
  baudRate: 9600,
  autoOpen: true
});


const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
 var respuesta = msg.text;
 bot.sendMessage(chatId, 'Le gustaria comenzar de nuevo el contador');
 if (respuesta == "Si"){
   console.log("Reiniciando Contador")
   bot.sendMessage(chatId, 'Mensaje recibido');
   miSerial.write("S");
 }
 else if (respuesta == "No") {
   miSerial.write("N");
 }

});

miSerial.setEncoding('utf8');
  miSerial.on('data',function(data)){
  console.console.log('Data:',data);
  bot.sendMessage(chatId, "La cantidad del contador es de: " + data);
}
