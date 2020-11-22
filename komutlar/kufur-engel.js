const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(" Yetersiz **yetki!**")
  
  if (!args[0]){
    message.channel.send('<a:747812123983478894:779661907199393833>Kufur-engel kapat/aç Yazmalısın')
  }
  if (args[0] === 'aç'){
    message.channel.send("<a:747812123983478894:779661907199393833>**Küfür Engel Başarıyla Aktif Edildi**")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('<a:747812123983478894:779661907199393833>Kufur Engel Başarıyla Kapatıldı')
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "küfür-engel",
  description: "Küfür engel açar yada kapatır.",
  usage: "küfür"
}