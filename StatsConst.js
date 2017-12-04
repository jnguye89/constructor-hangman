var GameStats = function(answer){
	this.score = 0;
	this.guessesRemaining = 10;
	this.statChange = function(){
		if (answer === "wrong"){
			this.guessesRemaining -= 1;
		} else if (answer === "correct"){
			this.score += 1;
		}
	}
}

module.exports = GameStats;