var Jimp = require('jimp');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            Jimp.read("https://cdn.glitch.com/b4461815-6269-4205-bdf3-0e435d2a71c0%2Fthumbnails%2F23333.png", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 2, 0).write(`./img/tt/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/tt/${bot.user.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'support',
  description: 'wasted',
  usage: 'wasted'
};