const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('AcruxRôleplay')
            .setTitle('')
            .setDescription('Information AcruxRôleplay')
            .setColor('#71b4d8')
            .addField('IP', '164.132.233.101:27038', true)
            .addField('Workshop','https://steamcommunity.com/sharedfiles/filedetails/?id=1553562393', false)
            .addField('Boutique','https://acrux.zk-web.fr', false)
            .setAuthor('AcruxRôleplay', 'https://cdn.discordapp.com/attachments/804785661026369556/818078955448958976/logo_acrux.png', 'https://google.fr')
            .setFooter('AcruxRôleplay', '')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'info'
}