var GameStats = function(answer){
	this.score = 0;
	this.guessesRemaining = 10;
	this.wrongGuess = function(){
			this.guessesRemaining -= 1;
	}
}

module.exports = GameStats;