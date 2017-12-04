var CurrentWord = function(wordArray){
	//sets the key value to the passed in word
	this.wordArray = wordArray;
	//creates a blank array to hold the _
	this.wordBlankArray = [];
	this.wordBlankDisplay = "";

	//creates function to push _ to the blank array
	this.wordBlank = function(){
		for (i = 0; i < this.wordArray.length; i++){
			if (this.wordArray[i] === " "){
				this.wordBlankArray.push(" ");
			} else {
				this.wordBlankArray.push("_")
			}
		}
		return this.wordBlankArray;
	}

};

//function to display a non array form of the blank letters
CurrentWord.prototype.wordBlankDisplayF = function(){
	this.wordBlank();
	this.wordBlankDisplay = "";
	for (i = 0; i < this.wordBlankArray.length; i++){
		this.wordBlankDisplay = this.wordBlankDisplay + this.wordBlankArray[i] + " ";
	}
	return this.wordBlankDisplay;
}

//function to adjust the blank array to the letter guessed
CurrentWord.prototype.wordGuess = function(letter){
	for (i = 0; i < this.wordBlankArray.length; i++){
		if (letter === this.wordArray[i]){
			this.wordBlankArray[i] = letter;
		}
	}

	this.wordBlankDisplay = "";
	for (i = 0; i < this.wordBlankArray.length; i++){
		this.wordBlankDisplay = this.wordBlankDisplay + this.wordBlankArray[i] + " ";
	}
	return this.wordBlankDisplay;
}


module.exports = CurrentWord;