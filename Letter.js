let Letter = function (letter, value) {
    this.wordLetter = letter;
    this.guessed = value;

    this.checkGuess = function (guess) {
        if (this.guessed === true || this.wordLetter === ` ` || this.wordLetter === guess) {
            this.guessed = true;
            return true;
        } else {
            this.guessed = false;
            return false;
        }
    }

    this.getLetter = function () {
        if (this.guessed === true) {
            return this.wordLetter;
        } else {
            return `_`;
        }
    }
}

module.exports = Letter;