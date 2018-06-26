window.onload = function () {
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesSoFar = [];
var answerArray = [];

var words= [
    "cat",
    "bird",
    "dog",
    "bug"
]

document.getElementById('wins') .innerHTML = "Wins: " + wins;
document.getElementById('losses') .innerHTML = "losses: " + losses;
document.getElementById('guesses') .innerHTML = "Guesses left: " + guesses;

function resetWord() {
    var compChoice = words[Math.floor(Math.random() * words.length)];
    console.log(compChoice);

    guesses = 10;
    guessesSoFar = [];
    answerArray = [];

        for (var i = 0; i < compChoice.length; i++) {
            answerArray[i] = "_";
            console.log(answerArray);
            document.getElementById('answerArray') .innerHTML = "Letters: "  + answerArray.join(" ");
        }
     
        var remainingLetters = compChoice.length;

        document.onkeypress = function(event) {
        var userGuess = event.key.toLowerCase();
   
            for (var j = 0; j < compChoice.length; j++) {
                if (compChoice[j] === userGuess) {
                    answerArray[j] = userGuess;
                    remainingLetters--;
                    guesses--;
                    console.log(remainingLetters); 
                }
            }

            if (compChoice.indexOf(userGuess) === -1 && guessesSoFar.indexOf(userGuess) === -1) {
                guessesSoFar.push(userGuess);
                guesses--;
                console.log(guessesSoFar);
            }      
    
            if (remainingLetters === 0) {
                wins++;
                resetWord();
            }

            if (guesses === 0) {
                losses++;
                resetWord();
            }
            
            document.getElementById('wins') .innerHTML = "Wins: " + wins;
            document.getElementById('losses') .innerHTML = "losses: " + losses;
            document.getElementById('guesses') .innerHTML = "Guesses left: " + guesses;
            document.getElementById('answerArray') .innerHTML = "Letters: "  + answerArray.join(" ");        
            document.getElementById('userGuess') .innerHTML = "What's been guessed: "  + guessesSoFar.join(", ");    
        }
}

resetWord();

}

    
    
        