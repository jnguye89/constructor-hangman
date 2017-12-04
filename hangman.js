var RandomWord = require("./RandomWordConst.js");
var CurrentWord = require("./CurrentWordConst.js");
var GameStats = require("./StatsConst.js");
var inquirer = require("inquirer");


var startHangman = function(){
	console.log("GAME START, PLEASE ENTER A LETTER TO BEGIN!");
	var newWord = new RandomWord();
	console.log(newWord.wordGuess);

	var currentWord = new CurrentWord(newWord.wordGuessArray);
	// currentWord.wordBlank();
	currentWord.getBlankArray();
	currentWord.displayWordFormat();
	currentWord.displayWord();

	inquirer.prompt([
		{
			type: "input",
			name: "letter", 
			message: "Enter a letter: "	
		}
	]).then(function(response){
		// console.log(response.letter);
		currentWord.letterGuess(response.letter);
		currentWord.displayWordFormat();
		currentWord.displayWord();
	})


}

startHangman();

