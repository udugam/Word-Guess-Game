// Declare 90sTvShows object
var tvShows_game = {
    //Variables
    shows: [
        "The Fresh Price of Bel-Air", 
        "Friends", 
        "Seinfeld", 
        "The X-Files", 
        "Saved by the Bell",
        "Boy Meets Wold",
        "The Simpsons",
        "Home Improvement",
        "Rugrats"
    ], 
    guessHistory: [],
    show: "",
    wins: 0,
    guesses: 5,
    guess: "",
    
    //Functions
       
    //randomly generate an index number i based on the length of the global "shows" array
    selectShow: ()=> {
        randIndex = Math.floor(Math.floor()*shows.length);
        this.show = shows[i];    
    },

    //checks to see if guess has been guessed before. Returns true or false.
    guessedBefore: (letter)=> {
        if (this.guessHistory.includes(letter)) {
            return true;
        } else {
            return false;
        }
    },

    //compares guess with show
    compareGuess: (guess)=> {
        //If the guess has been guessed before (check using using guessHistory.includes(guess)) 
        if (guessedBefore) {
            //end the guess compare method and alert the user that the letter has been guessed already.
            alert("That letter has been guessed before");
        } else {
            this.guessHistory.push(guess); //add the guess to the guessHistory array using guessHistory.push(guess).
            this.guesses--; //decrement the guesses variable by 1
            //if the guess letter matches one of the show letter (use show.includes(guess) or a similar method for strings)
            if (this.show.includes(this.guess)) {
                return true;
            } else {
                return false;
            }
        }
    }

    //declare startGame method
        //call select show method
        //call get user input method in a loop until guesses runs out
}

    
        
    
    
    
    

