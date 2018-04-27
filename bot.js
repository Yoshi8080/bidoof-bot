const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    console.log('I am ready!');
client.user.setPresence({ game: { name: 'with Bidoofs' ,type: 0 }, status: 'idle' });
});

client.on('message', message => {
if(message.content === "?pray") {
   const ayy = client.emojis.find("name", "Ran_Doof2");
   message.reply(` has prayed to Rainbow Bidoof! :pray: ${ayy}`);
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
