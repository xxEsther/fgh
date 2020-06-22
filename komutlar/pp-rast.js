const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
const client = new Discord.Client();
  var request = require('request');
exports.run = (client, message) => {

   var request = require('request');

request('https://rec-nd-api.glitch.me/api/rastpp', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
      var embed = new Discord.RichEmbed()
            .setThumbnail(info.link)
    .setColor("#RANDOM")
      .setURL('http://bot.recnd.ml/')
        .addField('REC-ND | PP FOTOĞRAFLARI ','http://www.recnd.ml/docs',true)
        message.channel.send(embed); 
    

  
  }})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["asdadadasdara"],
  permLevel: 0
};

exports.help = {
  name: 'pp-ra',
  description: 'Rastgele Komik GİF-Fotoğrafı',
  usage: 'rgif'
};