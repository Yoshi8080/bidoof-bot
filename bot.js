const Discord = require('discord.js');
const client = new Discord.Client();
const talkedRecently = new Set();


client.on('ready', () => {
    console.log('I am ready!');
client.user.setPresence({ game: { name: 'with Bidoofs' ,type: 0 }, status: 'available' });
});

client.on('message', message => {
if(message.content === "doof!pray") {
const ayy = client.emojis.find("name", "Ran_Doof2");
message.reply(` has prayed to Rainbow Bidoof! :pray: ${ayy}`);
    }
   
});


    if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {
client.on('message', message => {
 if(message.content === "ping") {
 message.reply(`pong`);
     }

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
});
        
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
