const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('REC-ND Komutlar İçin Tıkla.')
      .setURL('http://bot.recnd.ml/docs')
      .setAuthor('\nREC-ND Discord Bot', 'https://cdn.discordapp.com/avatars/596643086248050701/3bfe21c2a66b2c089b4a0f0e79f1983f.png?size=128', 'https://www.recnd.ml/help')
      .setDescription('REC-ND Botunu Güncel Olarak `.yardım` Modülü Üzerinden Takip Edebilirsiniz.')
      .setThumbnail(message.author.avatarURL)
  )
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};