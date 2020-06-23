const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'm.help') {

       message.reply('m.tutorial to learn how to use this bot');

       }

});

 client.on('message', message => {
8
  if (message.content === 'm.tutorial') {
9
    message.reply('Welcome to MHM, the multi-use bot! You can do many different things with this bot, and it will get multiple updates before it is finished.');
10
  }
11
});
client.on('message', message => {

    if (message.content === 'm.update') {

       message.reply('MHM's current update is v 1.0, and is in the alpha stage, and can't do anything yet.');

       }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.X19UIKC-2GDAdUyuLFeN8ozno9kV5cBK);//BOT_TOKEN is the Client Secret
