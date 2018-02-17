// Global

//Arrays and variables
var wordOptions = ["kanye", "eminem", "prince", "jimi", "ringo", "dylan", "kurt"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; 
var wrongLetters = [];

//Counters

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions to be called

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;
}

//Reset

guessesLeft = 9;
wrongLetters = [];
blanksAndSuccesses = [];


   
 //Letter Check
  
function checkLetters(letter) {
var isLetterInWord = false;

for (var i=0; i<numBlanks; i++){
    if(selectedWord[i] == letter) {
        isLetterInWord = true;
   
        }

    }

//Keyclicks

 
document.onkeyup=function(event){
    var letterGuessed = String.fromCharCode(event.KeyCode).toLowerCase();
    checkLetters = (lettersGuessed);
    roundComplete();
    
}

//Blanks
for (var i=0; i<numBlanks; i++){
    blanksAndSuccesses.push = ("_");  
} 


//HTML

    if(isLetterInWord) {
        for (var i=0; i<numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
                }
            }
        }
//letter unfound

    else{
        wrongLetters.push(letter);
        numGuesses--
    }

    //Debug

    console.log(blanksAndSuccesses); 
    

    function roundComplete() {
        console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " / Guesses Left" + GuessesLeft)

       
        document.getElementsById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
        document.getElementById("numGuesses").innerHTML =  guessesLeft;
        document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

        //User Won

        if(LettersinWord.toString() == blanksAndSuccesses.toString()) {
            winCount++;
            alert("You Did it!");

            //HTML Update

            document.getElementById("winCounter").innerHTML = winCount;

            startGame();
        }


        //User Lost
        else if (guessesLeft == 0){
            lossCount++;
            alert("You didn't do it...");

            document.getElementById("lossCounter").innerHTML = lossCount;
           
            startGame(); 
        }
    }

    //Word Locations, populate blanksAndSuccesses array

    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] === letter) {
            blanksAndSuccesses.push("_");

        }

    }


}

//Function calls


console.log(letterGuessed);



//MAIN 

//starts game
startGame();   

//Code Inititiate 



//Debug
console.log(selectedWord);
console.log(lettersinWord);
console.log(numBlanks);
console.log(blanksAndSuccesses); 
