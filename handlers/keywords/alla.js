/**
 * This class responds to anyone that types "LAHEE" or any of the aliases listed below with the gif defined below.
 */
 module.exports = {
    name: 'alla', // The name of the keyword to react to,
    aliases: ['Alla'], // Other keywords to react to

    execute(message) {

        var phrases = [
            'Allá le estan tirando el comando',
            'Allá la estan comandando(?',
            'Allá la estan entreteniendo mientras codeas',
            'Allá le estan haciendo el challenge',
            'Allá le estan haciendo el back',
            'Allá le estan haciendo el backend',
            'Allá la estan conociendo',
            'Allá la estan vacunando'
        ];

        return message.channel.send(phrases[Math.floor(Math.random()*phrases.length)]);
    },
};