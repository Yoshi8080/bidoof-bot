const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = ">";


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

let lastHelloCommandDate, lastHelloCommandUser;

client.on('ready', () => {
    client.on('message', message => {
        if (!message.content.startsWith(PREFIX)) return; //if not command ignore message

        var args = message.content.substring(PREFIX.length).split(" "); //splits commands so each word = pos in array

        switch (args[0].toLowerCase()) { //not case-sensitive anymore

            case "hello":
                hello(message);
                break;

             //rest of the commands
  }}})
})

function hello(message) {
  const now = new Date();
  if (now - lastHelloCommandDate > 10 * 60 * 1000) {
    // It's been more than 10 mins
    message.channel.send("hello");
    lastHelloCommandDate = now;
    lastHelloCommandUser = message.sender;
  } else {
    // It's been less than 10 mins
    // send a direct message to the user
    // i don't know if message.sender exists, check the api
    message.sender.send(`Command last used by ${lastHelloCommandUser}`);
  }

}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
