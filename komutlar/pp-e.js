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
     
///////KOMUTA
     var request = require('request');

request('https://rec-nd-api.glitch.me/api/erkekpp', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
      var embed = new Discord.RichEmbed()
            .setThumbnail(info.link)
    .setColor("#RANDOM")
      .setURL('http://bot.recnd.ml/')
        .addField('REC-ND | ERKEK FOTOĞRAFLARI ','http://www.recnd.ml/docs',true)  
        message.channel.send(embed); 
    }
});
  
  }})};
//////////////KOMUTA BİRİŞ
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pppperekkk"],
  permLevel: 0
};

exports.help = {
  name: 'pp-erkek',
  description: 'Rastgele Komik GİF-Fotoğrafı',
  usage: 'rgif'
};