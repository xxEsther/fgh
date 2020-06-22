const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => { 
   
  var embed2 = new Discord.RichEmbed()   
      .setTitle('Merhaba,' + message.member.user.username)
      .setDescription('Bu Komut WebSite Yöneticilerine Özeldir Kullanımı GLOBAL olarak Devre Dışı Bırakıldı. ')
      .setColor('RED') 
  

  if(message.author.id !== "671645885888856064") return message.channel.sendEmbed(embed2)
  
message.channel.sendMessage('**Patron, Yeniden Başlatmamı Gerçekten İstiyor musun?** :nuyari:')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(':nyukleniyor: **Bot Yeniden Başlatılıyor** :nonay:').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Yeniden Başlıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage(' `Yeniden Başlama İşlemini İptal Ettim` ');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: '[YAPIMCI]',
  usage: 'reboot'
};