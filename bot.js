const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    console.log('I am ready!');
client.user.setPresence({ game: { name: 'with Bidoofs' ,type: 0 }, status: 'available' });
});

client.on('message', message => {
if(message.content === "?pray") {
   const ayy = client.emojis.get(400884080759144449);
message.channel.send({embed: {
  color: 3447003,
  content: "'has prayed to Rainbow Bidoof! :pray: ${ayy}'"
}});    
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
