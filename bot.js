const Discord = require('discord.js');
const client = new Discord.Client();
 
 const rando_messages = [
'*has found a Normal Bidoof*',
'*has found a Shiny Bidoof*',
'*has found a Rainbow Bidoof*',
'*has found a Necrozdoof*',
'*has found a Bidoofeus*',
'*has fled from a BW Known*',
'*has found a Boxling, what?*',
'*has found TheConfidentDiamond for only a second.*',
]
 
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
message.reply(`Here's an invite to Bidoof Color Chaos Server: https://discord.gg/D2FSFxf`);
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

client.on('message', message => {
if(message.content === "doof!define") {
message.reply(`*Bidoof is a brown, rodent-like Pokémon with four short legs. It has a short, dark brown snout and a small, red nose.* https://play.pokemonshowdown.com/sprites/xyani/bidoof.gif`);
     } 
});

client.on('message', message => {
if(message.content === "doof!history") {
message.reply(`*There once was a bidoof named Ranbow. He was a powerful god. He fell in the hands of Ran, who’s thought to wield some power inside. Bidoof showed his past. Yoshi noticed, then he began a simulator. He called up Ran so he can see his creation. He loves it and he begins to help. During that time, the region they were in was slowly drifting. Bidoof was fighting and all seemed lost. Roria was then, struck by a meteor named DMCA. Bidoof was upon that land and his fateful demise occurred.*`);
     } 
});

client.on('message', message => {
if(message.content === "doof!help") {
message.reply(`Commands: **doof!pray** - Prays to Rainbow Bidoof ; **doof!server** - Discord invite to bot's origin ; **doof!shiny** - Gets bidoof shiny sprite ; **doof!rainbow** - Returns rainbow bidoof ; **doof!define** - Returns info in bidoof ; **doof!help** - Gets commands ; **doof!history** - rainbow bidoof history`);
     } 
});

client.on('message', message => {
if(message.content === "doof!search") {
message.reply(rando_messages[Math.floor(Math.random() * rando_messages.length)]);
     } 
});


client.on('message', message => {
if(message.content === "doof!walk") {
  const walk = client.emojis.find("name",BidoofWalking");
message.reply(`walked their bidoof ${walk} `);
     } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
