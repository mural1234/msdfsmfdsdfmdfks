const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`<a:747812123983478894:779661907199393833> »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`<a:747812123983478894:779661907199393833> » Yapımcım` ,`<@275986793474555904>`,true)
  .addField(`<a:747812123983478894:779661907199393833> » Node.js`, `${process.version}`, true)
 .addField(`<a:747812123983478894:779661907199393833> » Koruduğum Toplam Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`<a:747812123983478894:779661907199393833> » Koruduğum Toplam Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(`<a:747812123983478894:779661907199393833> » Koruduğum Toplam Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
.addField(`» Linkler`, `[Destek Sunucusu](https://discord.gg/archeva) | [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=779651549021863946&scope=bot&permissions=8) `, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 