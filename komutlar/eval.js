const Discord = require('discord.js')
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  if(!["275986793474555904"].includes(message.author.id)) return message.channel.send("Bu komutu sadece sahiblerim kullanabilir")
  this.client = client
  this.message = message
  this.args = args
  if(!args[0]) return message.channel.send("Girdi belirtiniz")

    const code = args.slice(0).join(' ');
   
  
    async function clean(text) {
        if (typeof text !== 'string')
            text = require('util').inspect(text, { depth: 0 })
        text = text
            .replace(/`/g, '`' + String.fromCharCode(8203))
            .replace(/@/g, '@' + String.fromCharCode(8203))
        return text;
    };
  
    try {
       var evaled = await clean(await eval(code));  
       message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
    } catch (err) {
       message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
    }
}

exports.conf = {
    aliases: ['eval','evsat'],
}
exports.help = {
name: 'evbul'
}