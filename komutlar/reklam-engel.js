const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send(`Bu Komutu Kullanmak için Yönetici Yetkisine sahip olman gerekmektedir`)
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Bunumu Arıyorsun? \n ${prefix}reklam-engel aç/kapat`)
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, '<a:747812123983478894:779661907199393833>**Reklam Engel Aktif!**<a:onayli:770623830024519691>')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('<a:747812123983478894:779661907199393833>**Reklam Engel Başarıyla Aktif Edildi**<a:onayli:770623830024519691>')
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`reklamengel_${message.guild.id}`)

   const küfürengelcim22 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('<a:747812123983478894:779661907199393833>**Reklam Engeli Kapattım**<a:onayli:770623830024519691>')
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam-engel'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engelle'
};