const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');

exports.run = async (client, message, args) => {
  
  this.fighting = new Set();
  
	let user = message.mentions.users.first()
	if (!user) return message.reply("Kime Evlilik Teklifi Etmek İstersin")
  
  if (user.bot) return message.reply('Botlara Evlilik Teklifi Edemezsin');
  if (user.id === message.author.id) return message.reply('Kendine Evlenme Teklifi Etmen Çok Tuhaf');
		if (this.fighting.has(message.channel.id)) return message.reply(':)');
		this.fighting.add(message.channel.id);
		try {
			if (!user.bot) {
                await message.channel.send(`${user}, Evlilik Teklifini Kabul Ediyormusun (\`evet\` Veya \`hayır\`)`);
				const verification = await verify(message.channel, user);
				if (!verification) {
					this.fighting.delete(message.channel.id);
					return message.channel.send(`${user} Teklifi Kabul Etmedi`);
				}
			}
			let kalp1 = 0;
			let kalp2 = 0;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			
			while (kalp1 > 0 && kalp2 > 0) { // eslint-disable-line no-unmodified-loop-condition
				const user = userTurn ? message.author : user;
				let choice;
				
					const filter = res =>
						res.author.id === user.id && ['evet'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					if (!turn.size) {
						await message.reply(`Üzgünüm ama, süre doldu!`);
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				
			
      }
			this.fighting.delete(message.channel.id);
            const edilen = kalp1 > kalp2 ? message.author : user;
			return message.channel.send(`**${edilen}** Teklifi Kabul Etti <3`);
		} catch (err) {
			this.fighting.delete(message.channel.id);
			throw err;
		}
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['teklif'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'teklif-et',
  category: "eğlence",
  description: 'ss',
  usage: 'teklif <@kullanıcı>'
};