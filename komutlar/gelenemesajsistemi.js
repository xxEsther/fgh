const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('REC-ND Yardım Sistemi.')
      .setURL('http://bot.recnd.ml/')
      .setAuthor('\nREC-ND Discord Bot', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128', 'https://discordapp.com/invite/HRTXdA4')
      .setThumbnail(message.author.avatarURL)
        .addField('Ban sistemi kullanımı','Ban sistemi Kurulumu', true)
        .addField('.ymesaj','Özelden hoşgeldin mesajını aktif eder. \n[Aynı komutu kullanarak kapatabilirsiniz]', true)
        .addField('.ygmesaj','Hoşgeldin mesajını değiştirirsiniz \n[]', true)
        .setTimestamp()
        .setFooter('REC-ND', 'https://cdn.discordapp.com/avatars/596643086248050701/97969a89e09ca8f52913f409a35bc391.png?size=128')
  )
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bannedsa'],
  permLevel: 0
};

module.exports.help = {
  name: 'gelenemesajsistemi',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};