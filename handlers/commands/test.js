/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
 module.exports = {
    name: 'test', // The name of the command
    description: 'Testing the bot', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        // List of phrases to respond with
        var test = [
            'Alla la estan testeando - By - Daniela Llano',
        ];

        return message.reply(test); // Replies to the user with a random phrase
    },
};