var CurrentWord = function(wordArray){
	this.wordArray = wordArray;
	this.wordArrayBlanks = [];
	this.wordDisplay = "";
	this.letterGuessBool = false;
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
	}
	this.displayWord = function(){
		console.log("\n" + this.wordDisplay + "\n");
	}
}

module.exports = CurrentWord;