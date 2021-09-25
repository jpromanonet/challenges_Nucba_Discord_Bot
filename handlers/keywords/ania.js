/**
 * This class responds to anyone that types "LAHEE" or any of the aliases listed below with the gif defined below.
 */
module.exports = {
    name: 'Ania', // The name of the keyword to react to,
    aliases: ['ania','kubow','Kubow','kubonia'], // Other keywords to react to

    execute(message) {

        // Ania Info
        var aniaInfo = 'Ania es una diosa de la programación, que crea juegos en Javascript y nos inspiro a realizar este bot';
        var aniaCanal = 'https://www.youtube.com/c/AniaKub%C3%B3w';
        var aniaTwitter = 'https://twitter.com/ania_kubow';
        var aniaIg = 'https://www.instagram.com/aniakubow/';
        var aniaLinkedin = 'https://uk.linkedin.com/in/ania-kubow';
        var aniaGithub = 'https://github.com/kubowania';
        
        var aniaProfile = [
            aniaInfo,
            " ",
            "Canal de Youtube: ",
            aniaCanal,
            "Su Twitter: ",
            aniaTwitter,
            "Su Instagram: ",
            aniaIg,
            "Su Linkedin: ",
            aniaLinkedin,
            "Su Github: ",
            aniaGithub
        ]

        // Now we send Ania's info to the channel
        return message.channel.send(aniaProfile);
    },
};