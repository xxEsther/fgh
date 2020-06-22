const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTI3Mzc0NzE4MDY4MzI4NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkwMTIyNjI1fQ.Vv2qZ7zgZLhO2PveaKhYQEahc8e3jShmm7Bo9lcJySQ', client);
exports.run = (client, message) => {
 dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Merhaba, Bu komutu kullanabilmek için oy vermeniz gerekiyor.\nEğer oy verdiyseniz 2 dakika bekleme süresine uymalısınız.\nOy Linkimiz: https://bot.recnd.ml/bot/vote`) 
   } else {

exports.run = async (client, message, args, config) => {

      if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`);	let args1 = args.slice(0).join(" ");
var mesaj = db.fetch(`sunucular.${message.guild.id}.yenm`)
if(!mesaj) return message.channel.send("İlk once .ymesaj yazıp ozellı aç.")

if(!args1) return message.channel.send("Ne yazıcamı yazsan.")

db.set(`sunucular.${message.guild.id}.yenmesaj`,args1)

message.channel.send(" Artık biri sunucuya girine ona dm den " + args1 + " yazacam.")
  

                     };
       }})};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ygmesaj',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};