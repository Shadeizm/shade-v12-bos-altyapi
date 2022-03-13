const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client, message) => {
message.channel.send("Test Komutu")
}
exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "test",
  
}
