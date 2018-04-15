let Letter = function (letter) {
    this.wordLetter = letter;
    this.guessed = false;

    this.checkGuess = function(guess) {
        if (this.wordLetter === guess) {
            this.guessed = true;
            console.log(this.wordLetter);
            return this.wordLetter;
        } else {
            console.log(`_`);
            return `_`;
        }
    }
}

module.exports = Letter;