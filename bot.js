const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'doof') {
   const ayy = client.emojis.find("name", "Ran_Doof2");
   message.reply(`:pray:` ${ayy});
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
