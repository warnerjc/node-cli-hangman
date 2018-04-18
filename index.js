// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

const Word = require(`./Word`);
const inquirer = require(`inquirer`);

let wordBank = [`Space Invaders`, `Pac Man`, `Street Fighter`, `Donkey Kong`, `Ms Pac Man`, `Asteroids`, `Defender`, `Galaxian`, `Donkey Kong Jr`, `Mr Do`, `Popeye`, `Out Run`, `Pump It Up`, `NBA Jam`, `Gun Fight`, `Hang On`, `Dinosaur King`, `Wheels Speed Race`, `Sega Network`, `Mario Bros`, `Dance Dance Revolution`, `Zoo Keeper`, `Initial D Arcade Stage`, `World Club Champion Football`, `Mortal Kombat`, `Jungle Hunt`, `Scramble`, `Mushiking King of the Beetles`, `Super Cobra`, `Oshare Majo Love and Berry`, `Centipede`, `Shining Force Cross`, `Pengo`, `Sangokushi Taisen`, `Dragons Lair`, `Pole Position`, `Border Break`, `Dig Dug`, `Tempest`, `TV Basketball`, `Radar Scope`, `Tron`, `Sengoku Taisen`, `Dragon Quest Monster Battle Road`, `Samba de Amigo`, `Asteroids Deluxe`, `Missile Command`, `Berzerk`, `Pong`, `Lord of Vermilion`, `Kangaroo`, `Battlezone`, `Stargate`, `Space Duel`, `Big Buck Hunter`, `Snake Pit`, `Bagman`, `Big Buck Safari`, `Hard Drivin`, `Gauntlet`, `Millipede`, `Race Drivin`, `Time Traveler`, `Space Ace`, `Xevious`, `Silver Strike Live`, `Atari Football`, `Final Lap`, `Paperboy`, `Star Wars`, `Beatmania`, `Championship Sprint`, `Breakout`, `Sea Wolf`, `Lunar Lander`, `Super Sprint`, `Marble Madness`, `Rolling Thunder`, `Tetris`, `Arabian`, `Terminator Salvation`, `Blasteroids`, `Super Breakout`, `Pac Mania`, `Indiana Jones and the Temple of Doom`, `Four Trax`, `Assault`, `Guitar Hero Arcade`, `Drag Race`, `Night Driver`, `I Robot`, `RBI Baseball`, `Computer Space`, `Death Race`, `Dunk Shot`, `Star Wars Return of the Jedi`, `Dragon Spirit`, `Triple Hunt`, `Pac Man Clones`, `Mario`, `Golden Tee Golf`, `Starhorse`, `Bemani`, `Sega Network Mahjong`, `Sprint`, `Mushiking`, `Mahjong Fight Club`, `Love and Berry`];

function startApp() {

    console.log(`\n`);
    console.log(`/////////////////////////////////////////////`);
    console.log(`//                                         //`);
    console.log(`// Welcome to Hangman via the Command Line //`);
    console.log(`//                                         //`);
    console.log(`/////////////////////////////////////////////`);
    console.log(`\n`);

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
      .then( function(res) {
          switch(res.action) {
              case `start a game`:
                startGame();
                break;

              case `exit the application`:
                console.log(`\nGoodbye!`);
                break;

              default:
                console.log(`Something went wrong, let's try again.`);
                startApp();
          }

      }
      );
}

function startGame(){
    console.log(`game started`);

    this.randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    this.gameWord = new Word(randWord);

    console.log(randWord);
    console.log(gameWord);
}

startApp();



