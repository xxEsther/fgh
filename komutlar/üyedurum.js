const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
    let codeming = message.guild.members.filter(m => m.presence.status !== "offline").size;

const embed = new Discord.RichEmbed()
.setAuthor(`${message.guild.name} Sunucusu için; `)
.setThumbnail(message.guild.iconURL)
.setColor(`#RANDOM`)
.setTimestamp()
.addField(`Kullanıcı ve Bot Sayısı`, `<:topkisi:711341531843264563> Toplam Üye : **${üyesayi}**\n<:topkul:711341017206620195> Toplam Kullanıcı Sayısı : **${kullanıcılar}**\n<:bot:711338849254768781> Toplam Bot Sayısı : **${botlar}** `, true)
.addField(`Toplam Aktif ve Pasif Üye Sayısı`, `<a:aktif:711337196833079336> Toplam Aktif Üye : **${codeming}**\n<a:pasif:711337120005881947> Toplam Pasif Sayısı : **${message.guild.members.filter(off => off.presence.status === 'offline').size}**\n<:ta:619092926831788032> Sunucu Sahibi : **${message.guild.owner}**`, true)
.setFooter(`${message.author.tag}`, message.author.avatarURL)
message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyedurum","üyeler","durumlar","durum"],
  permLevel: 0
};

module.exports.help = {
  name: 'say',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};