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

var compChoice = words[Math.floor(Math.random() * words.length)];
console.log(compChoice);


for (var i = 0; i < compChoice.length; i++) {
    answerArray[i] = "_";
    answerArray.join(" ");
    console.log(answerArray);
}

document.onkeypress = function(event) {
     var userGuess = event.key.toLowerCase();

    if (compChoice.indexOf(userGuess) === -1 && guessesSoFar.indexOf(userGuess) === -1) {
        guessesSoFar.push(userGuess);
        guesses--;
    }
        if(guesses === 0) {
            losses++;
            guesses = 10;
            guessesSoFar = [];
            compChoice = words[Math.floor(Math.random() * words.length)];
        }
               
        else {
            for (var j = 0; j < compChoice.length; j++) {
                if (compChoice[j] === userGuess) {
                    answerArray[j] = userGuess;
                }
            }
        }         
} 

                 
                
                            
                