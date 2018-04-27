const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

if(message.content === "ayy") {
   const ayy = client.emojis.find("name", "Ran_Doof2");
   message.reply(`${ayy} LMAO`);
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
