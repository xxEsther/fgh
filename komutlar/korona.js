const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply('Güncel KoronaVirüs İstatistik Tablosu```Güncel Covid-19 vaka istatistiklerini buradan görebilirsin. Ülkeye özel istatistikler için .korona <ülke kodu> komutunu kullanabilirsin. #evdekal``` <a:evet:682967451540914351>**Doğru Kullanım:** __.korona <ülke kodu>__')

  let a = args[0].toLowerCase()
  .replace('türkiye', 'TR')
  .replace('çin', 'CN')
  .replace('amerika', 'US')
  .replace('japonya', 'JP')
  .replace('fransa', 'FR')
  .replace('norveç', 'NE')
  .replace('isveç',  'SN')
  
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${a}`);
    const body = text.body;
  let ülk = body.countrydata[0].info.title

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`**${ülk}** Ülkesi için Covid-19 İstatistikleri`)
    .setThumbnail(message.author.avatarURL)
    .addField(`Toplam Korona Virüs İstatistikleri`, `Toplam Vaka Sayısı: **${body.countrydata[0].total_cases}**\n Toplam İyileşen Sayısı: **${body.countrydata[0].total_recovered}**\n Toplam Ölüm Sayısı: **${body.countrydata[0].total_deaths}** \n`, true)
    .addField(`Bugün için Korona Virüs İstatistikleri`, `Bugünki Vaka Sayısı: **${body.countrydata[0].total_new_cases_today}**\n Bugünki Ölüm Sayısı: **${body.countrydata[0].total_new_deaths_today}** \n`, true)
      .setDescription('Daha fazla Korona Virüs bilgisi edinmek için https://www.recnd.ml/ PopUp da Dünya Geneli ve İl Geneli Mevcuttur. Teşekkürler')
      .setTimestamp()
    .setFooter('REC-ND');
    
    message.channel.send(embed);
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['corona', 'coronabilgi', 'corona-bilgi', 'korona', 'koronabilgi', 'korona-bilgi', 'virüs'],
  permLevel: 0 
};

exports.help = {
  name: 'kor',
  description: 's',
  usage: 's'
};