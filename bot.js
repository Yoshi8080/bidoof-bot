const Discord = require('discord.js');
const client = new Discord.Client();
//let cdseconds = 5;
//const talkedRecently = new Set();
client.user.setGame('game here !')
client.on('ready', () => {
    console.log('I am ready!');
});

//if(!message.content.startsWith('doof')) return;
//  if(cooldown.has(message.author.id)){
//    message.delete();
//    return message.reply("You have to wait 5 seconds before command.")
//}
//});

client.on('message', message => {
if(message.content === "?pray") {
   const ayy = client.emojis.find("name", "Ran_Doof2");
   message.reply(` has prayed to Rainbow Bidoof! :pray: ${ayy}`);
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
