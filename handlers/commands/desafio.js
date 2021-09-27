/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
 module.exports = {
    name: 'desafio', // The name of the command
    description: 'Contando en que dia del desafio estamos', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

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

        var startDate = "Sep 27, 2021 00:00:00"
        var currentDay = countUpFromTime(startDate, 'countup1');
        var challengeDay = "Han pasado: " + currentDay + " dias desde que comenzo el desafio #100DaysOfCode de Nucba, el dia " + startDate;

        return message.reply(challengeDay); // Replies to the user with a random phrase
    },
};