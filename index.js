var inquirer = require("inquirer");
var fs = require("fs");
var Word = require("./word.js");
var isLetter = require('is-letter');

var userGuessedCorrectly = false;

var wordArray= ["Ohio", "Maryland", "Virginia", "New York", "Pennsylvania", "Arizona", "California"];

var wins = 0; 
var losses = 0; 
var turns = 8;
var userGuess = "";
var someWord;
var randomWord;

var lettersGuessedAlready=[];
var lettersGuessedAlreadyList ="";
var underscores =0;

startGame();

function startGame() {
    inquirer.prompt ([
        {
            type:"text", 
            name: "player", 
            message: "What is your name?"

        },
        {
            type: "list", 
            name: "playgame",
            message: "Guess the state by typing in letter. Ready to play?",
            choices: ["yes", "no"]
        }
    ]).then(function(user){
        if (user.playgame=== "yes") {
            turns = 8; 
            lettersGuessedAlready=[],
            lettersGuessedAlreadyList="",
            chooseRandomWord();        
        }
    });



function chooseRandomWord() {
    randomWord=wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
    var chosenWord = new Word(randomWord);
    console.log(chosenWord);
    //someWord.splitWord();
    //someWord.addLetters();
    makeAGuess();
}

function makeAGuess() {
    if (underscores < someWord.length || turns > 0) {
        inquirer.prompt ([
            {
                type: "input", 
                name: "whatLetter", 
                message: "Guess a letter.", 
                validate: function(value) {
                    if (isLetter(value)){
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }.then(function(guess) {
                guess.whatLetter.toUpperCase();
                userGuessedCorrectly = false;
                if (lettersGuessedAlreadyList.indexOf(guess.whatLetter.toUpperCase())> -1) {
                    console.log("You guessed that letter.");
                    makeAGuess();
                } 
                //add letter go guess list if they haven't already guessed it
                else if (lettersGuessedAlready.indexOf(guess.whatLetter.toUpperCase()===-1)) {
                        lettersGuessedAlready = lettersGuessedAlready.concat(", " + guess.whatLetter.toUpperCase());
                        lettersGuessedAlreadyList.push(guess.whatLetter.toUpperCase());
                    }
                //if correct then add it to an underscore space
                for (i =0; i<someWord.length; i++);
                if (guess.whatLetter.toUpperCase()===someWord[i].character && someWord[i].userGuessedCorrectly === false) {
                    someWord[i].userGuessedCorrectly === true;
                    userGuessedCorrectly=true;
                    someWord.underscores[i] = guess.whatLetter.toUpperCase();
                    someWord.underscores.join("");
                    console.log(someWord.underscores);
                    underscores--;
                }
            
            if (userGuessedCorrectly) {
                console.log("Correct!");
                checkIfUserWon();
            }
        })
        ])
    };
}
}

function checkIfUserWon() {
    if (underscores === 0 && turns > 0) {
        console.log("Good job! ");
        wins++;
    }
    else if (turns <= 0) {
        console.log("You lost.");
        losses--;
    }
}

