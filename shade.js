const Discord = require("discord.js")
const client = new Discord.client

client.on("ready", () => {
  client.user.setActivity(`Coded By Shâde`);
  console.log(`${props.help.name} Yüklendi`);
});
