const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client()
//const request = require("request-promise")

client.on('ready', () => {
    console.log('Fly Korus Bot Ready')
})

//client.on('message', message => {
    //if (message.content.startsWith(`${prefix}say`)) {
        //const embed = new Discord.RichEmbed()
        //.setTitle('Message')
        //.setDescription(message.content.toString().slice(5, 1000))
        //.setFooter('botHub by Skip')
        //.setColor(0xFCBA03)
        //.setTimestamp()
        //message.channel.send(embed);
    //}
//})

client.on('message', message => {
    if (message.content.startsWith(`${prefix}vwarn`)) {
        if (message.member.hasPermission('KICK_MEMBERS')) {
            message.delete()
            const user = message.mentions.users.first()
            const warner = message.author
            const embed = new Discord.RichEmbed()
            .setTitle('Warning')
            .setDescription(['**User: **' + user, '**Warned by: **' + warner])
            .setFooter('flyKorus Bot')
            .setColor(0xFCBA03)
            .setTimestamp()
            client.channels.get(`680304368108830741`).send(embed);
        }
    }
})

client.on('message', message => {
    if (message.content.startsWith(`${prefix}announce`)) {
        if (message.member.hasPermission('KICK_MEMBERS')) {
            message.delete()
            const announcem = message.content.toString().slice(10, 1000)
            const embed = new Discord.RichEmbed()
            .setTitle('Announcement')
            .setDescription(announcem)
            .setFooter('flyKorus Bot')
            .setColor(0x00C5FF)
            .setTimestamp()
            client.channels.get(`675941486650720279`).send(embed)
            const embed2 = new Discord.RichEmbed()
            .setTitle('Success')
            .setDescription('The announcement has been sent successfully')
            .setColor(0x03FC94)
            .setFooter('flyKorus Bot')
            .setTimestamp()
            message.channel.send(embed2)
        }
    }
})

client.on('message', message => {
    if (message.content.startsWith(`${prefix}8ball`)) {
        let choices = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
        let response = choices[Math.floor(Math.random() * choices.length)]
        const embed = new Discord.RichEmbed()
        .setTitle('8ball')
        .setDescription(response)
        .setFooter('flyKorus Bot')
        .setColor(0x00C5FF)
        .setTimestamp()
        message.channel.send(embed)
    }
})

client.on('message', message => {
    if (message.content.startsWith(`what is a noob?`)) {
        message.channel.send("it's you you absolute boomer")
    }
})

client.on('message', message => {
    if (message.content.startsWith(`${prefix}suggest`)) {
        const embed = new Discord.RichEmbed()
        .setTitle('Suggestion')
        .setDescription(message.content.toString().slice(9, 1000), 'Think this is a good reaction? Comment in general!')
        .setFooter('flyKorus Bot')
        .setColor(0x03FC94)
        .setTimestamp()
        client.channels.get(`675968275284361240`).send(embed)
        const embed2 = new Discord.RichEmbed()
        .setTitle("Success")
        .setDescription('Suggestion sent successfully.')
        .setColor(0x03FC94)
        .setFooter('flyKorus Bot')
        .setTimestamp()
        message.channel.send(embed2)
    }
})

client.on('message', message => {
    if (message.content.startsWith(`${prefix}status`)) {
        if (message.member.hasPermission('KICK_MEMBERS')) {
            client.user.setActivity((message.content.toString().slice(8, 1000)))
            const embed = new Discord.RichEmbed()
            .setTitle('Success')
            .setDescription('The bots status has been set successfully.')
            .setFooter('flyKorus Bot')
            .setColor(0x03FC94)
            .setTimestamp()
            message.channel.send(embed)
        }
    }
})

client.on('message', message => {
    if (message.content.startsWith(`${prefix}help`)) {
        const embed = new Discord.RichEmbed()
        .setTitle('Commands')
        .setDescription([';help - Shows list of commands', ';vwarn @user - Verbal warns a user (ADMIN)', ';announce message - Announces something (ADMIN)', ';8ball message - Tells your fortune? :flushed:', ';suggest suggestion - Suggests something', ';status text - Changes the bots status'])
        .setFooter('flyKorus Bot - Made with love by AviaSkip')
        .setColor(0xB078B8)
        .setTimestamp()
        message.channel.send(embed)
    }
})

client.on('message', message => {
    if (message.content.startsWith(`${prefix}restart`)) {
        if (message.member.hasPermission('ADMINISTRATOR'))
        message.guild.members.forEach(member => {
            const embed = new Discord.RichEmbed()
            .setTitle('Alert')
            .setDescription('The bot is now restarting. Please do not use any commands during this period.')
            .setColor(0xdd1313)
            .setFooter('flyKorus Bot - Admin Client')
            .setTimestamp()
            message.channel.send(embed);
            process.exit()
        })
    }
})

//client.on("message", async message => {
	//const args = message.content.toLowerCase().split(/ +/g);
	//const command = args.shift();

	//if (command === "!membercount") {
		//const groupId = args[0];

		//if (!groupId) return message.reply("Specify a group id");

		//const groupData = await request(`https://groups.roblox.com/v1/groups/${groupId}`, {
			//json: true
		//});

		//return message.reply(`The group "${groupData.name}" has ${groupData.memberCount} members!`);
	//}
//});

client.login(token);