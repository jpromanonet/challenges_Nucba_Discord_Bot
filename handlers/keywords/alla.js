/**
 * This class responds to anyone that types "LAHEE" or any of the aliases listed below with the gif defined below.
 */
 module.exports = {
    name: 'alla', // The name of the keyword to react to,
    aliases: ['Alla', 'ALLA', 'Allá'], // Other keywords to react to

    execute(message) {

        var phrases = [
            'Allá le estan tirando el comando',
            'Allá la estan comandando(?',
            'Allá la estan entreteniendo mientras codeas',
            'Allá le estan haciendo el challenge',
            'Allá le estan haciendo el back',
            'Allá le estan haciendo el backend',
            'Allá la estan conociendo',
            'Allá la estan vacunando',
            'Allá la estan tirando',
            'Allá le estan diciendo que sí',
            'Allá la estan clavando',
            'Allá la estan mentoreando pedagógicamente',
            'Allá se la estan ganando',
            'Allá le estan atendiendo',
            'Allá la estan traduciendo',
            'Allá la estan haciendo malviajar',
            'Allá la estan batiendo'
        ];

        return message.channel.send(phrases[Math.floor(Math.random()*phrases.length)]);
    },
};