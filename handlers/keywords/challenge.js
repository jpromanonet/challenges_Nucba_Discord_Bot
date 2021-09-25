/**
 * This class responds to anyone that types "LAHEE" or any of the aliases listed below with the gif defined below.
 */
 module.exports = {
    name: 'Challenge', // The name of the keyword to react to,
    aliases: ['100DaysOfCode', 'NucbaDesafio', 'nucbadesafio', 'Nucbadesafio', "desafio", "challenges", "Desafio", "Challenges", "Desafios", "challenge"], // Other keywords to react to

    execute(message) {

        // Calculate the days since the start of the challenge
        function countUpFromTime(countFrom, id) {
            countFrom = new Date(countFrom).getTime();
            var now = new Date(),
                countFrom = new Date(countFrom),
                timeDifference = (now - countFrom);
              
            var secondsInADay = 60 * 60 * 1000 * 24,
              
            days = Math.floor(timeDifference / (secondsInADay) * 1);

            clearTimeout(countUpFromTime.interval);
            countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
            
            return(days)
        }

        var startDate = "Sep 01, 2021 00:00:00"
        var currentDay = countUpFromTime(startDate, 'countup1');
        var challengeDay = "Han pasado: " + currentDay + " dias desde que comenzo el desafio #100DaysOfCode de Nucba, el dia " + startDate;

        // Now we send Ania's info to the channel
        return message.channel.send(challengeDay);
    },
};