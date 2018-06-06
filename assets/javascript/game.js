// Declare 90sTvShows object
var tvShows_game = {
    //Variables

    shows: [
        "The Fresh Prince of Bel-Air", 
        "Friends", 
        "Seinfeld"
    ],
    themeSongs: [
        '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/253508993&color=%23f4f2f2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255846604&color=%23f4f2f2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/231298857&color=%23f4f2f2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
    ],
    guessedShow: [], 
    guessHistory: [],
    show: [],
    wins: 0,
    guesses: 5,
    guess: "",
    randIndex: null,
    //newgame: false,
    
    //Functions
       
    //randomly generate an index number i based on the length of the global "shows" array
    selectShow: function() {
        this.randIndex = Math.floor(Math.random()*this.shows.length);
        var show = this.shows[this.randIndex];
        show = show.toUpperCase();
        this.show = show.split("");
        this.initShowDisplay(this.show,this.guessedShow); 
    },

    fetchThemeSong: function() {
        var themeSongs = this.themeSongs;
        var randIndex = this.randIndex;
        return themeSongs[randIndex];
    },

    //this function creates a new string of _ characters for each letter of the show
    initShowDisplay: function(show, guessedShow) {
        show.forEach(function(letter,index) {
            (letter === " " || letter === "-")? guessedShow[index]=letter : guessedShow[index] = "_";            
        })
    },

    showDisplay: function() {
        var guessedShow = this.guessedShow;
        return guessedShow.join("");
    },

    guessHistoryDisplay: function() {
        var guessHistory = this.guessHistory;
        return guessHistory.join("");
    },

    updateGuessedShow: function(guess, show, guessedShow) {
        show.forEach(function(element,index){
            element===guess? guessedShow[index]=guess : null;
        })
    },

    //checks to see if guess has been guessed before. Returns true or false.
    guessedBefore: function (letter, guessHistory) {
        if (guessHistory.includes(letter)) {
            return true;
        } else {
            return false;
        }
    },

    //compares guess with show
    compareGuess: function (guess) {
        //If the guess has been guessed before (check using using guessHistory.includes(guess)) 
        if (this.guessedBefore(guess, this.guessHistory)) {
            //end the guess compare method and alert the user that the letter has been guessed already.
            alert("That letter has been guessed before");
        } else {
            this.guessHistory.push(guess); //add the guess to the guessHistory array.
        
            if (this.show.includes(guess)) {    //If the guess matches any letters of the show, update the display
                this.updateGuessedShow(guess, this.show, this.guessedShow);
                if(this.guessedShow.includes("_")===false) { //If no more letters remain to be guesses, user wins
                   this.wins++;
                   alert("Good Job! Try Another");
                //    this.newGame = true;
                   this.restartGame();
                }
            } else {                            //else decrement the guesses variable by 1
                this.guesses--;
                if (this.guesses===0) { //if guesses run out, restart game
                    alert("You ran out of guesses! Try Again");
                    // this.newGame = true;
                    this.restartGame();
                } 
            }
        }
    },

    //starts game
    startGame: function (document,song) {
        this.selectShow();
        song.innerHTML = this.fetchThemeSong()
    },

    //restarts the game {
    restartGame: function () {
        this.guesses = 5;
        this.guessHistory = [];
        this.guessedShow = [];
        this.startGame(document,song);
    }

}

    
        
    
    
    
    

