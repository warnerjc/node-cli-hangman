// Letter object constructor that passes a letter and value argument
let Letter = function (letter, value) {

    // Assign passed arguments to wordLetter and guessed
    this.wordLetter = letter;
    this.guessed = value;
    
    // Object method returns whether or not the letter was guessed
    // If guessed, then assign true to guessed and return true
    // Else, return false
    this.checkGuess = function (guess) {
        if (this.guessed === true || this.wordLetter === ` ` || this.wordLetter === guess) {
            this.guessed = true;
            this.alreadyGuessed = true;
            return true;
        } else {
            return false;
        }
    }

    // Object method returns the letter value
    // If true, return this letter
    // else, return an underscore 
    this.getLetter = function () {
        if (this.guessed === true) {
            return this.wordLetter;
        } else {
            return `_`;
        }
    }
}

module.exports = Letter;