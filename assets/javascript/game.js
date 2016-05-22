
// coumputer choice

var computerChoices = ['a', 'b', 'c'];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var guessesSoFar = []; //array to push user choices into guesses.
	 var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
	
	document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

         guessesSoFar.push(userGuess); //pushes typed keys into an array

       

		if (userGuess == computerGuess){ //checking to see if my choices are ever typed. If yes then win ++
            wins++;
            alert('You won! You guessed the correct letter!');
            guessesLeft = 9; //resets the amount ofa guesses back to 9.

            guessesSoFar.length = 0;//removes all the letters from the array from previous round. 
	    }else if (guessesLeft == 0){
	        losses++;
	        alert('You didn\'t guess the correct letter. Try again please!');
	        guessesLeft = 9;
	        guessesSoFar.length = 0;

	 	}else if (userGuess !== computerGuess){
           guessesLeft--; //decrementing the guesses left
       } 
	       var html = "<h1>The Psychic Game</h1>" + 
       "<p>Guess what letter I'm thinking of!</p>" +
       "<p>Total Wins: " + 
       wins + 
       "</p>" +
       "<p>Total Losses: " + 
       losses + 
       "</p>" +
       "<p>Guesses Left: " + 
       guessesLeft + 
       "</p>" +
       "<p>Your Guesses so far: " +
       guessesSoFar +
       "</p>"
       ;
       // Placing the html into the game ID
       document.querySelector('.game').innerHTML = html;
}






























	









