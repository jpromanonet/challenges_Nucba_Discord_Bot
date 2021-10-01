/**
 * This class responds to anyone that types "LAHEE" or any of the aliases listed below with the gif defined below.
 */
 module.exports = {
    name: 'Comandante', // The name of the keyword to react to,
    aliases: ['comandante','fort', 'Fort'], // Other keywords to react to

    execute(message) {

        // Mike Info
        var phrases = [
            'Cortaste toa la loooz',
            'Miameeeee',
            'Basta chicos',
            'Yo no manejo el rating yo manejo un Rolls Royce'
        ];

        var wordSelection = phrases[Math.floor(Math.random()*phrases.length)];

        var image = "https://img.itch.zone/aW1nLzYyOTU0NjQuZ2lm/original/BzKQ8%2B.gif"
        
        // Mike array
        var comandante = [
            wordSelection,
            '',
            image
        ]

        // Now we send Mike's joke to the channel
        return message.channel.send(comandante);
    },
};