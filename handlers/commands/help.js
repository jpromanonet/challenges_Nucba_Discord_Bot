const { prefix } = require('../../config.json');

/**
 * Runs the help command, explaining each available command to the user.
 */
module.exports = {
    name: 'help',
    description: 'List all available commands, or info about a specific command.',
    aliases: ['comandos', 'ayuda', 'help'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        // Send help data about ALL commands
        if(!args.length) {
            data.push('Aca hay una lista de todos mis comandos: \n');
            data.push(commands.map(command => command.name).join('\n'));
            data.push(`\nPodes enviar \`${prefix}help [comando]\` para obtener información espefica de un comando!`);
            data.push("https://c.tenor.com/FAxPcX5SoIoAAAAd/lets-get-going-ania-kubow.gif");

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Te envie un DM con toda mi lista de comandos =)!');
                })
                .catch(error => {
                    console.error(`No pude enviar el DM de ayuda a ${message.author.tag}.\n`, error);
                    message.reply('¿Tenes los DMs deshabilitados?');
                });
        }

        // Send help data about the specific command
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        return message.channel.send(data, { split: true });
    },
};