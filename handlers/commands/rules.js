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
            '¡Buenas buenas!, estas son las reglas del desafio de codigo actual',
            '',
            'El desafio actual es el clasico "100DaysOfCode", el cual consiste en codear por 1 hora diaria durante 100 dias seguidos y pushear a nuestra cuenta de Github =)',
            '',
            '---------------',
            '',
            'Las reglas son las siguientes: ',
            '',
            '1. Codear al menos 1 hora por día, todos los dias, sin interrupciones por 100 dias seguidos.',
            '2. Si tenes twitter, podes publicar todos los dias utilizando el hashtag #100DaysOfCode',
            '3. Divertite e intenta compartir el desafio con 2 personas mas (si no se suman, no pasa nada)',
            '',
            '---------------',
            '',
            'Para mas info, podes visitar el sitio web oficial del desafio: ',
            'https://www.100daysofcode.com/',
            'https://cdn.discordapp.com/attachments/891131523468771408/891584820952576020/placanucba_1.png'
        ];

        return message.reply(phrases); // Replies to the user with a random phrase
    },
};