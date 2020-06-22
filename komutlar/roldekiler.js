const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let arg = args.slice(0).join(" ");

  if (isNaN(arg) || arg.length != 18)
    return message.reply("Sadece bir rolün idsini girmelisin!");

  let only = message.guild.roles
    .get(arg)
    .members.map(m => m.user.username)
    .join("    \n    ");
const embed = new Discord.RichEmbed()
.addField('ROLDEKİ ÜYELERİMİZ;',`\*\*${only}\*\* `);
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "rolüyeleri",
  usage: "roldekiler",
  description: "roldekiler"
};