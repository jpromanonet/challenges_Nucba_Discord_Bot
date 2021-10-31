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
            'Allá la estan batiendo',
            'Allá se la estan comiendo',
            'Allá le estan abriendo la tapuer',
            'Allá la estan insertando',
            'Alla la estan consintiendo',
            'Alla la estan depositando',
            'Allá la estan poniendo la cuota al dia',
            'Allá la estan pusheando',
            'Allá la estan apretando',
            'Allá la tienen sensible',
            'Allá la estan bailando sabroso',
            'Allá la estan calentando', 
            'Allá le estan clavando la banana',
            'Allá le estan ocupado la boca',
            'Alla la estan haciendo tragar',
            'Allá la estan ensuciando',
            'Allá la estan haciendo',
            'Alla le estan entrando al bambu',
            'Alla le estan haciendo bullying en la chakra',
            'Alla le estan abriendo los chakras',
            'Allá la estan toxiqueando',
            'Allá le estan chequeando el bot',
            'Allá la estan madrugando',
            'Allá la estan serruchando',
            'Allá se la estan dando dura',
            'Alla la estan compartiendo',
            'Alla le estan comiendo el kitkat',
            'Allá la estan maratoneando',
            'Allá le estan haciendo los ppt',
            'Allá la estan profundizando',
            'Allá le estan metiendo mano', 
            'Allá la estan soplando',
            'Allá la estan llenando',
            'Allá la tienen profunda',
            'Allá la estan aplaudiendo',
            'Allá le estan dando duro y parejo'
        ];

        return message.channel.send(phrases[Math.floor(Math.random()*phrases.length)]);
    },
};