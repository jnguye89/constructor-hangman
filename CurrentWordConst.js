var CurrentWord = function(wordArray){
	//current word split into an array
	this.wordArray = wordArray;
	//new array created to match current word, except in blank _ form
	this.wordArrayBlanks = [];
	this.wordDisplay = "";
	//This is to check whether the letter guessed is within the word, true or false
	this.letterGuessBool = false;
	//This is to check whether the full word was guessed or not, true or false to prompt whether the game needs to restart or not
	this.wordCompleteBool = false;
	//array of letters guessed so far
	this.lettersGuessedArray = [];
	//check to see whether the letter guessed has already been guessed or not
	this.lettersGuessed = false;
	this.getBlankArray = function(){
		for (i = 0; i < this.wordArray.length; i++){
			if (this.wordArray[i] === " "){
				this.wordArrayBlanks.push(" ");
			} else {
				this.wordArrayBlanks.push("_");
			}
		}
	}

	this.displayWordFormat = function(){
		this.wordDisplay = "";
		for (i = 0; i < this.wordArrayBlanks.length; i++){
			this.wordDisplay = this.wordDisplay + this.wordArrayBlanks[i] + " ";
		}
	}

	this.letterGuess = function(letter){
		for (i = 0; i < this.wordArrayBlanks.length; i++){
			if (letter === this.wordArray[i]){
				this.wordArrayBlanks[i] = letter;
				this.letterGuessBool = true;
			}
		}
		this.lettersGuessedArray.push(letter);
		// console.log(this.lettersGuessedArray);
	}
	this.displayWord = function(){
		console.log("\n" + this.wordDisplay + "\n");
	}

	this.checkWordComplete = function(){
		this.wordCompleteBool = true;
		for (i = 0; i < this.wordArrayBlanks.length; i++){
			if (this.wordArrayBlanks[i] === "_" || this.wordArrayBlanks[i] === "_"){
				this.wordCompleteBool = false;
			} 
		}
	}
}

CurrentWord.prototype.lettersGuessedCheck = function(letter){
	this.lettersGuessed = false;
	for (i = 0; i < this.lettersGuessedArray.length; i++){
		if (this.lettersGuessedArray[i] === letter){
			this.lettersGuessed = true;

		}
	}
}

module.exports = CurrentWord;