/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
 module.exports = {
    name: 'alla', // The name of the command
    description: 'Random phrases', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        // List of phrases to respond with
        var phrases = [
            'Allá le estan tirando el comando',
            'Allá la estan comandando(?',
            'Allá la estan entreteniendo mientras codeas',
            'Allá le estan haciendo el challenge',
            'Allá le estan haciendo el back',
            'Allá le estan haciendo el backend',
            'Allá la estan conociendo',
            'Allá la estan vacunando',
            'Allá la estan tirando'
        ];

        return message.reply(phrases[Math.floor(Math.random()*phrases.length)]); // Replies to the user with a random phrase
    },
};