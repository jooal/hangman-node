var Letter = require("./letter.js");

var Word = function (word) {
    this.word = word, //the word chosen
    this.letters = [],//letters in the word, can also hold underscores
    this.underscores = [];
    this.splitWord = function() {
        this.letters = this.word.split("_, ");
        numberUnderscores = this.letters.length;
        this.underscores.push(numberUnderscores);
        console.log(this.underscores);
    }
    this.createLetters = function (){
        for (i=0; i<this.letters.length; i++);
        this.letters[i] = new Letter(this.letters[i]);
        this.letters[i].displayCharacter(); //this function is in letter.js
    }
}


module.exports = Word;
