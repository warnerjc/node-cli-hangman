// For best user experience, run application in full window

// Current version does not include guessed letter validation
// 1. Application does not validate that user entered a single character
// 2. Application does not validate that user guessed a valid letter (`abcdefghijklmnopqrstuvwxyz`)
// 3. Application does not validate that user already guessed a letter

// Imports the Word.js exports module & inquirer NPM package
const Word = require(`./Word`);
const inquirer = require(`inquirer`);

// Random Word Bank - Arcade Game Theme
let wordBank = [`Space Invaders`, `Pac Man`, `Street Fighter`, `Donkey Kong`, `Ms Pac Man`, `Asteroids`, `Defender`, `Galaxian`, `Donkey Kong Jr`, `Mr Do`, `Popeye`, `Out Run`, `Pump It Up`, `NBA Jam`, `Gun Fight`, `Hang On`, `Dinosaur King`, `Wheels Speed Race`, `Sega Network`, `Mario Bros`, `Dance Dance Revolution`, `Zoo Keeper`, `Initial D Arcade Stage`, `World Club Champion Football`, `Mortal Kombat`, `Jungle Hunt`, `Scramble`, `Mushiking King of the Beetles`, `Super Cobra`, `Oshare Majo Love and Berry`, `Centipede`, `Shining Force Cross`, `Pengo`, `Sangokushi Taisen`, `Dragons Lair`, `Pole Position`, `Border Break`, `Dig Dug`, `Tempest`, `TV Basketball`, `Radar Scope`, `Tron`, `Sengoku Taisen`, `Dragon Quest Monster Battle Road`, `Samba de Amigo`, `Asteroids Deluxe`, `Missile Command`, `Berzerk`, `Pong`, `Lord of Vermilion`, `Kangaroo`, `Battlezone`, `Stargate`, `Space Duel`, `Big Buck Hunter`, `Snake Pit`, `Bagman`, `Big Buck Safari`, `Hard Drivin`, `Gauntlet`, `Millipede`, `Race Drivin`, `Time Traveler`, `Space Ace`, `Xevious`, `Silver Strike Live`, `Atari Football`, `Final Lap`, `Paperboy`, `Star Wars`, `Beatmania`, `Championship Sprint`, `Breakout`, `Sea Wolf`, `Lunar Lander`, `Super Sprint`, `Marble Madness`, `Rolling Thunder`, `Tetris`, `Arabian`, `Terminator Salvation`, `Blasteroids`, `Super Breakout`, `Pac Mania`, `Indiana Jones and the Temple of Doom`, `Four Trax`, `Assault`, `Guitar Hero Arcade`, `Drag Race`, `Night Driver`, `I Robot`, `RBI Baseball`, `Computer Space`, `Death Race`, `Dunk Shot`, `Star Wars Return of the Jedi`, `Dragon Spirit`, `Triple Hunt`, `Pac Man Clones`, `Mario`, `Golden Tee Golf`, `Starhorse`, `Bemani`, `Sega Network Mahjong`, `Sprint`, `Mushiking`, `Mahjong Fight Club`, `Love and Berry`];

// Wrapper function for recursion of game application
function startApp() {

    console.log(`\n`);
    console.log(`/////////////////////////////////////////////`);
    console.log(`//                                         //`);
    console.log(`// Welcome to Hangman via the Command Line //`);
    console.log(`//                                         //`);
    console.log(`/////////////////////////////////////////////`);
    console.log(`\n`);

    // inquirer prompt to determine user action at application load / after game instance completion
    inquirer
        .prompt([
            {
                type: `list`,
                name: `action`,
                message: `What would you like to do?`,
                choices: [`Start a Game`, `Exit the Application`],
                filter: function (val) {
                    return val.toLowerCase();
                }
            }
        ])
        .then(function (res) {
            switch (res.action) {
                // If user decides to `Start a Game`, then call startGame function
                case `start a game`:
                    startGame();
                    break;

                // If user decides to `Exit the Application`, then break out of application
                case `exit the application`:
                    console.log(`\nGoodbye!`);
                    break;

                // Restart the application should something go wrong with the inquirer input prompt
                default:
                    console.log(`Something went wrong, let's try again.`);
                    startApp();
            }
        }
        );
}

// Function that contains Hangman game logic
function startGame() {

    // Assign random word from wordBank
    this.randWord = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();

    // Assign a new Word object as the current gameWord
    this.gameWord = new Word(randWord);

    // Assign guessCount to zero each time a new game is started
    this.guessCount = 0;

    // Recursive function continually prompting the user to guess a letter
    function guessWord() {

        // Count variable that stores number of times the user guess was correct
        this.correctCount = 0;

        // Display the Hangman word
        console.log(`\nHangman: ${gameWord.displayWord()}\n`);

        // If remaining guesses is less than 10, then prompt user to guess a letter
        // Else, inform the user they ran out of guesses & restart the application
        if (guessCount < 11) {
            inquirer
                .prompt([
                    {
                        type: `input`,
                        name: `guess`,
                        message: `Try to guess a letter in the word:`,
                        filter: function (val) {
                            return val.toLowerCase();
                        }
                    }
                ])
                .then(function (res) {

                    // Loop through the gameWord object and check if guessed letter is in the word
                    for (let i = 0; i < this.gameWord.wordObject.length; i++) {

                        // Calls the checkGuess method of the Word Letter object
                        // Updates the guessed value of the Letter (true if guessed, false if not guessed)
                        this.gameWord.wordObject[i].checkGuess(res.guess);

                        // If the letter was guessed, increase the correctCount
                        if (this.gameWord.wordObject[i].getLetter() === res.guess) {
                            this.correctCount++;
                        }
                    }

                    // IF the guessed letter was not in the word, increase the guessCount
                    if (this.correctCount === 0) {
                        guessCount++;
                    }

                    console.log(`\nRemaining Guesses = ${10 - guessCount}\n`);

                    // If the gameWord matches the random word, log that the user won the current game & restart the application
                    // Else prompt the user guess another letter
                    if (this.randWord === this.gameWord.wordString()) {
                        console.log(`\n`);
                        console.log(`/////////////////////////////////////////////`);
                        console.log(`//                                         //`);
                        console.log(`//    Congrats, you guessed the Hangman!   //`);
                        console.log(`//                                         //`);
                        console.log(`/////////////////////////////////////////////`);
                        console.log(`\n`);

                        startApp();
                    } else {
                        guessWord();
                    }

                });

        } else {
            console.log(`\n`);
            console.log(`/////////////////////////////////////////////`);
            console.log(`//                                         //`);
            console.log(`//     Bummer...You ran out of guesses.    //`);
            console.log(`//                                         //`);
            console.log(`/////////////////////////////////////////////`);
            startApp();
        }
    }

    // Start prompting the user to guess a letter and check vs the word
    guessWord();

}

// Start the game application
startApp();