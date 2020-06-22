const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("REC-ND Sahibi <@595729382228623438> ");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['yap'],
  permLevel: 0 
};

exports.help = {
  name: 'yapımcı', 
  description: 'Botun pingini gösterir',
  usage: 'pingypm'
};
