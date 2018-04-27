const Discord = require('discord.js');
const client = new Discord.Client();
let cooldown = new Set();
let cdseconds = 5;
const talkedRecently = new Set();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'doof') {
   const ayy = client.emojis.find("name", "Ran_Doof2");
   message.reply(`:pray:` ${ayy}`);
  	}
});
if(!message.content.startsWith('doof')) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 5 seconds before command.")
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
