/**
 * This class responds to anyone that types "LAHEE" or any of the aliases listed below with the gif defined below.
 */
 module.exports = {
    name: 'Mike', // The name of the keyword to react to,
    aliases: ['scott','Scott','SCOTT','MIKE', 'Mike', 'Office', 'Halpert', 'Dwight','Schrute'], // Other keywords to react to

    execute(message) {

        // Mike Info
        var phrase = "THAT'S WHAT SHE SAID";
        var image = "https://tenor.com/view/the-office-thats-what-she-said-gif-16881812"
        
        // Mike array
        var mike = [
            phrase,
            '',
            image
        ]

        // Now we send Mike's joke to the channel
        return message.channel.send(mike);
    },
};