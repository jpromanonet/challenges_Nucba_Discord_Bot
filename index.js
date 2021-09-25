const { Client, RichEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
    console.log('Bot Now connected!');
    console.log('Logged In as', client.user.tag)
    client.user.setStatus('online'); // online, idle, invisible, dnd

    console.log('Bot status: ', client.user.presence.status);

    // Bot sending a Message to a text channel called test
    const testChannel = client.channels.find(x => x.name === 'challenges')
    console.log(testChannel)
    // client.channels.find(c => c.name === 'test').send('Hello Server!')

});

// Bot listenning messages
client.on('message', msg => {
    console.log(msg.content)
    if (msg.content === '!ping') {
        msg.reply('Pong!')
    }

    if (msg.content === '!Ania') {
        msg.reply('¿Quisiste decir diosa del codigo?')
    }

    if (msg.content === 'hello') {
        msg.channel.send(`Hola! ${msg.author}`);
    }

    if (msg.content.includes('!test')) {
        msg.channel.send('Alla la estan probando! - by - "Daniel Llano"');
    }

    if (msg.content === '!nucba') {
        msg.channel.send('https://nucba.com.ar/');
        msg.channel.send('https://www.youtube.com/channel/UC9yQdGlpksaB7MtN2nibFMw');
    }

    if (msg.content === '!pretty') {
        const embed = new RichEmbed()
            // .setTitle('A pretty message')
            // .setColor(0xFF0000)
            // .setDescription('Hello', msg.author);
            .addField('Something One', 'Some content', true)
            .addField('Something Two', 'Some content Two', true)
            .addField('Something Three', 'Some content Three', false)
            .setAuthor('JPR', '');
        msg.channel.send(embed);
    }

    // Deleting 100 messages
    /*if (msg.content.startsWith('!clean')) {
        async function clear() {
            try {
                // await msg.delete();
                const fetched = await msg.channel.fetchMessages({limit: 99});
                msg.channel.bulkDelete(fetched);;
                console.log('Messages deleted');
            }
            catch (e) {
                console.log(e);
            }
        }
        clear();
    }*/
});


const token = 'ODkxNDIxMjUxOTkyNjgyNTc2.YU-GvA.B-lQswpDstXP58VmBcxoxKl257U';
client.login(token);
