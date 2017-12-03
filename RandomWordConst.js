var RandomWord = function(){
	//word list of possible words to guess
	this.wordList = ['tennis', 'racket', 'doubles', 'singles', 'fault', 'strike', 'ace', 'backspin', 'breakpoint', 'deuce', 'double fault', 'foot fault', 'forced error', 'forehand', 'backhand', 'kick serve', 'match point', 'overhead', 'tiebreak', 'unforced error'];
	
	//random number chosen to chose a random word from the arrays
	this.wordGuess = this.wordList[Math.floor(Math.random()*this.wordList.length)];

	//converts the word chosen to an array
	this.wordGuessArray = this.wordGuess.split("");

};


module.exports = RandomWord;