const Discord = require('discord.js')
exports.run = (client, message, args) => {
     try{
       if(message.guild.emojis) {
        const embed = new Discord.RichEmbed()
            .setTitle('Emojiler')
            .setDescription(message.guild.emojis.map(emoji => emoji).join(' | '))
            .setColor('RANDOM')
        message.channel.send(embed)
        }else{
        message.channel.send('Bu Sunucuda hiç emoji bulunmuyor.')
        } 
} catch (err) {
        message.channel.send('Sunucudaki emojiler çok fazla.')
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['emojis'],
    permLevel: 0,
}
exports.help = {
    name: 'emojiler',
    description: 'Sunucuda bulunan emojileri gösterir.',
    usage: 'emojiler'
}
