// Imports the Letter.js export module
const Letter = require(`./Letter`);

// Word object constructor that passes a random word
let Word = function(word) {

    // Declare an empy wordObject array
    this.wordObject = [];

    // Loop through the random word and push each Letter object to wordObject array
    for (let i = 0; i < word.length; i++) {
        if(word.charAt(i) === ` `) {
            this.wordObject.push(new Letter (` `, true));
        } else {
            this.wordObject.push(new Letter(word.charAt(i), false));
        }
    }

    // Object method to return the wordObject as a string
    this.wordString = function() {
        this.word = ``;

        for (let i = 0; i < this.wordObject.length; i++) {
            this.word = `${this.word}${this.wordObject[i].getLetter()}`;
        }

        return this.word; 
    }

    // Object method to display the Hangman word while the user plays the game
    this.displayWord = function() {
        this.word = ``;

        for (let i = 0; i < this.wordObject.length; i++) {
            this.word = `${this.word} ${this.wordObject[i].getLetter()}`;
        }

        return this.word; 
    }
}

module.exports = Word;
