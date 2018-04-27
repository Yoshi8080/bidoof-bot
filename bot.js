const Discord = require('discord.js');
const client = new Discord.Client();

client.user.setGame("Praying to rainbow Bidoof; Playing Bidoof Simulator");
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
