const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
const client = new Discord.Client();
const DBL = require("dblapi.js");
  var request = require('request');
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTI3Mzc0NzE4MDY4MzI4NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkwMTIyNjI1fQ.Vv2qZ7zgZLhO2PveaKhYQEahc8e3jShmm7Bo9lcJySQ', client);
exports.run = (client, message) => {
 dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Merhaba, Bu komutu kullanabilmek için oy vermeniz gerekiyor.\nEğer oy verdiyseniz 2 dakika bekleme süresine uymalısınız.\nOy Linkimiz: https://bot.recnd.ml/bot/vote`) 
   } else {

exports.run = async (client, message, args, config) => {
     
 
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bu komudu kullanmak için yeterli yetkiniz yok.')
  const arg = args[0]
  if (!arg) return message.reply('Limit belirlemek için bir sayı girmelisin, ya da özelliği kapatmak için `!ban-limit kapat` yazmalısın.')
 
  if (arg == 'kapa' || arg == 'kapat') {
    if (!db.has(`banlimit_${message.guild.id}`)) return message.reply('Bu özellik zaten kapalı.')
    db.delete(`banlimit_${message.guild.id}`)
    message.reply('Özellik başarıyla kapatıldı.')
  }else{
    if (isNaN(Number(arg))) return message.reply('Limiti belirlemek için bir **sayı** girmelisin.')
    db.set(`banlimit_${message.guild.id}`, Number(arg))
    message.reply(`Ban limiti başarıyla \`${arg.toString()}\` olarak belirlendi. Artık sunucudaki yetkililer maksimum ${arg} kere ban atabileceklerdir.`)
                     }
                     };
       }})};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rol-bansistemi', 
  description: "",
  usage: ''
};