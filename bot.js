const Discord = require('discord.js');
const client = new Discord.Client();
 
 
 
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
 
client.on('message', message => {
if(message.content === "doof!server") {
message.reply(`Here's an invite to Bidoof Simulator: https://discord.gg/D2FSFxf`);
     } 
});

client.on('message', message => {
if(message.content === "doof!shiny") {
message.reply(`Here's a shiny bidoof: https://play.pokemonshowdown.com/sprites/xyani-shiny/bidoof.gif`);
     } 
});

client.on('message', message => {
if(message.content === "doof!rainbow") {
message.reply(`Here's a rainbow bidoof: https://cdn.discordapp.com/emojis/400884080759144449.png?v=1`);
     } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
