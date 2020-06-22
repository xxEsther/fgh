const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {

  const yetkimyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL)
  
  let rol = await db.fetch(`kskgrol${message.guild.id}`)
  let rolbul = message.guild.roles.get(rol)
  
  if(!message.member.roles.has(rolbul.id))
     return message.channel.send(yetkimyok)
  
let kayitedilcekkisi2 = message.mentions.users.first()

    const kisifyo = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Kişi Etiketlemelisin`, message.author.avatarURL)
    
    if (!kayitedilcekkisi2)
      return message.channel.send(kisifyo)
    
    const kayitkisi = message.guild.member(kayitedilcekkisi2)
    
    var isim = args.slice(1).join(" ")
    
    const ama = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir İsim Ve Yaş Belirtmelisin`, message.author.avatarURL)
    
    if (!isim)
      return message.channel.send(ama)
    
    let tag = db.get(`kstag2${message.guild.id}`)
    
    kayitkisi.setNickname(`${tag} | ${isim}`)
    
    kayitkisi.removeRole(db.fetch(`ksalinacakrol${message.guild.id}`))
    
    kayitkisi.addRole(db.fetch(`ksverilecekrol${message.guild.id}`))
    
    const tmyaptm = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Kullanıcı Başarıyla Kayıt Edildi`, kayitedilcekkisi.avatarURL)
    
    message.channel.send(tmyaptm)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıt-et"],
  perm: 0
}

exports.help = {
  name: "kayıt-et",
  description: "Kayıt Eder",
  usage: "/kayıt-et @Kişi (İsim) (Yaş)"
}