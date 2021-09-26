/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
 module.exports = {
    name: 'recursos', // The name of the command
    description: 'Recursos gratis para codear =)', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        // List of phrases to respond with
        var resources = [
            '**```Recursos para codear =)```**',
            '',
            'https://media4.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif'
            
        ];

        return message.reply(resources); // Replies to the user with a random phrase
    },
};