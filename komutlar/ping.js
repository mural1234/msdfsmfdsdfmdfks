const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const exampleEmbed = new Discord.MessageEmbed()
  .addField(`<a:747812123983478894:779661907199393833> Şu Anki Pingim` ,`${client.ws.ping}ms<a:747812123983478894:779661907199393833>`)
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping(Bunuda Almayında)',
  usage: 'ping'
}; 