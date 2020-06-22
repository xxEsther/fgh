const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
          .setTitle('REC-ND Güncel İstatistik')
      .setURL('https://bot.recnd.ml/')
      .setThumbnail(message.author.avatarURL)
    .addField(`Güncel Kullanıcı Sayısı :`, `**${client.users.size} **`, true)
    .addField(`Güncel Sunucu Sayısı :`, `**${client.guilds.size} **`, true)
    .addField(`Güncel Ping Sayısı :`, `**${client.ping} **`, true)
    .addField(`İşletim Sistemi :`,`Virtual Private Server`, true)
    .setImage(`https://i.hizliresim.com/Hx1qzN.gif`)
    .setFooter(`${message.author.tag}`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};