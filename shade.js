const Discord = require("discord.js")
const client = new Discord.client
var prefix = ayarlar.prefix

client.on("ready", () => {
  client.user.setActivity(`Coded By Shâde`);
  console.log(`${props.help.name} Yüklendi`);
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "yanıtverme")) {
    message.channel.send('cevap');
  }
});

client.login("token")
