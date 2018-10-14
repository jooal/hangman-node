function Letter(character) {
   // this.userGuess ="",
    this.character = character.toUpperCase(), 
    this.letterGuessedAlready = false,
    this.letterGuessedCorrectly = false, 
    this.displayCharacter = function () {
        if (this.letterGuessedCorrectly) {
            console.log(this.character)
        } 
        else if (this.letterGuessedAlready) {
            console.log("You guessed this already.");
        }
            
        }
    }


module.exports = Letter

