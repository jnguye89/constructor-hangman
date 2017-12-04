var RandomWord = require("./RandomWordConst.js");
var CurrentWord = require("./CurrentWordConst.js");
var GameStats = require("./StatsConst.js");
var inquirer = require("inquirer");
var colors = require('colors');
var playGame = true;

var startHangman = function(){
	while (playGame){
		hangmanGame();
	}
}

var hangmanGame = function(){
	console.log("GAME START, PLEASE ENTER A LETTER TO BEGIN!");

	var newWord = new RandomWord();
	// console.log(newWord.wordGuess);

	var gameStats = new GameStats;

	var currentWord = new CurrentWord(newWord.wordGuessArray);
	// currentWord.wordBlank();
	currentWord.getBlankArray();
	currentWord.displayWordFormat();
	currentWord.displayWord();

	askLetter(currentWord, gameStats);
	playGame = false;

}

var askLetter = function(currentWord, gameStats){
	inquirer.prompt([
		{
			type: "input",
			name: "letter", 
			message: "Enter a letter: "	
		}
	]).then(function(response){
		// console.log(response.letter);
		currentWord.lettersGuessedCheck(response.letter);

		if (currentWord.lettersGuessed){
			console.log("\n Letter already guessed, try again!\n");
			askLetter(currentWord, gameStats);
			return;

		} else {
			currentWord.letterGuess(response.letter);
		}
		

		if (!currentWord.letterGuessBool){
			gameStats.wrongGuess();
			console.log("\n WRONG LETTER!!\n".red)
			console.log(gameStats.guessesRemaining + " guesses remaining.".red);
			if (gameStats.guessesRemaining === 0){
				console.log("\nYou Lose!\n".red);
				askEndGame();
				return
			}
		} else {
			console.log("\n CORRECT!".green);
			currentWord.letterGuessBool = false;
		}

		currentWord.displayWordFormat();
		currentWord.displayWord();

		currentWord.checkWordComplete();
		if (!currentWord.wordCompleteBool){
			askLetter(currentWord, gameStats);
		} else {
			askEndGame();
		}

	})
}

var askEndGame = function(){
	inquirer.prompt([
		{
			type: "confirm",
			name: "play",
			message: "Keep playing?: "
		}
	]).then(function(response){
		if (response.play){
			hangmanGame();
		} else{
			playGame = false;
		}
	})
}


startHangman();

