/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
 module.exports = {
    name: 'reglas', // The name of the command
    description: 'Reglas del desafio', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        // List of phrases to respond with
        var phrases = [
            'Buenas buenas!',
            '',
            'El desafio actual es el clasico "100DaysOfCode", el cual consiste en codear por 1 hora diaria durante 100 dias seguidos y pushear a nuestra cuenta de Github =)',
            '',
            'Las reglas son las siguientes: '
        ];

        return message.reply(phrases); // Replies to the user with a random phrase
    },
};