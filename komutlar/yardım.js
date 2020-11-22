const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`GuardMembers+ Yardım`)
.setDescription(`
Bota Yönetici Verip Yetkisini En üste Çekmeyi Unutmayın.<:746289550556397579:779752136253898792>

**__GuardMembers+ Yardım Menüsü__**<:746289550556397579:779752136253898792>
<a:747812123983478894:779661907199393833>  **Kanal Koruma Aç/Kapat**:  \`.kanal-koruma\`
<a:747812123983478894:779661907199393833>  **Sunucuda reklam Koruması** \`.reklam.engel\`
<a:747812123983478894:779661907199393833>  **Küfür Engel Aç/Kapat** : \`.küfür-engel\`
<a:747812123983478894:779661907199393833>  **Sohbeti Açıp Kapatırsınız**: \`.sohbet aç-kapat\`
<a:747812123983478894:779661907199393833>  **Botun İstatistiklerini Atar**: \`.istatistik\`
<a:747812123983478894:779661907199393833>  **Belirttiğiniz Sayıda Mesajı Siler** \`.temizle\`
<a:747812123983478894:779661907199393833>  **Pinginizi Ölçüp Atar** \`.ping\`
<a:747812123983478894:779661907199393833>  **Ban Koruma hakkında bilgi alırsın** \`.ban-koruma\`
<a:747812123983478894:779661907199393833>  **Bu Korumayı kapatamassınız** \`ddoskoruması\`
<a:747812123983478894:779661907199393833>  **Bot Korumayı aktif edersiniz** \`.bot-koruma\`



GuardMembers+

`)
.setImage("https://media.giphy.com/media/99tonvXLKv3vG/giphy.gif")
.setThumbnail(message.author.avatarURL())
.addField(`» Linkler`, `[Destek Sunucusu](https://discord.gg/archeva) | [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=779651549021863946&scope=bot&permissions=8) `, true)
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};