console.log("File is linked properly");


var answers = {
        // after an answer is guessed correctly, a YouTube embedded video will appear 
    tupac: {
        artistName: "Tupac",
        song: "California Love",
        youTubeLink: "https://www.youtube.com/watch?v=J7_bMdYfSws"
    },
    coolio: {
        artistName: "Coolio",
        song: "Gangsta's Paradise",
        youTubeLink: "https://www.youtube.com/watch?v=fPO76Jlnz6c"
    },
    wutangclan: {
        artistName: "Wu Tang Clan",
        song: "Protect Ya Neck",
        youTubeLink: "https://www.youtube.com/watch?v=R0IUR4gkPIE"
    },
    llCoolj: {
        artistName: "LL Cool J",
        song: "Mama Said Knock You Out",
        youTubeLink: "https://www.youtube.com/watch?v=vimZj8HW0Kg"
    },
    beastieboys: {
        artistName: "The Beastie Boys",
        song: "Sabotage",
        youTubeLink: "https://www.youtube.com/watch?v=z5rRZdiu1UE"
    },
    snoopdogg: {
        artistName: "Snoop Dogg",
        song: "Gin & Juice",
        youTubeLink: "https://www.youtube.com/watch?v=DI3yXg-sX5c"
    },
    drdre: {
        artistName: "Dr Dre",
        song: "Nuthin' but a 'G' Thang",
        youTubeLink: "https://www.youtube.com/watch?v=GPa59XcS6pQ"
    },
    pharcyde: {
        artistName: "The Pharcyde",
        song: "Passing Me By",
        youTubeLink: "https://www.youtube.com/watch?v=48OYTEZQR9U"
    },
    biggiesmalls: {
        artistName: "The Notorious B.I.G.",
        song: "Hypnotize",
        youTubeLink: "https://www.youtube.com/watch?v=wk4ftn4PArg"
    },
    outkast: {
        artistName: "OutKast",
        song: "Jazzy Belle",
        youTubeLink: "https://www.youtube.com/watch?v=IW-9eOPAWdA"
    }
    };
// additional variable declarations
var answerList = ["TUPAC", "COOLIO", "WUTANGCLAN", "LLCOOLJ", "BEASTIEBOYS", "SNOOPDOGG", "DRDRE", "PHARCYDE", "BIGGIESMALLS", "OUTKAST"]
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndCorrectLetters = [];
var wrongLetters = [];
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 0;
var yeahBoy = document.getElementById("yeahBoy");

// Game started via jumbotron button.  Function will select an answer at random, reset letters & guess count
function gameStart() {
    yeahBoy.play();

    guessCounter = 9;

    chosenWord = answerList[Math.floor(Math.random() * answerList.length)];
    console.log(chosenWord);

    lettersInChosenWord = chosenWord.split("");
    console.log(lettersInChosenWord);

    numBlanks = lettersInChosenWord.length;
    console.log(numBlanks);

    blanksAndCorrectLetters = [];

    wrongLetters = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndCorrectLetters.push("_");
    }
    
    console.log(blanksAndCorrectLetters);
    
    document.getElementById("guesses-remaining").innerHTML = guessCounter;

    document.getElementById("word-blanks").innerHTML = blanksAndCorrectLetters.join(" ");

    document.getElementById("wrong-letters").innerHTML = wrongLetters.join(" ");
    
}

function checkLeters(letter) {
    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                blanksAndCorrectLetters[j] = letter;
            }
        }
        console.log(blanksAndCorrectLetters);
    }

    else {
        wrongLetters.push(letter);
        guessCounter--;
    }
}

function letterChosen() {

    //  (*WIP*) this code will run after every letter guess.  Last section of code required for game to run

    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + guessCounter);

    document.getElementById("guesses-remaining").innerHTML = guessCounter;

    document.getElementById("word-blanks").innerHTML = blanksAndCorrectLetters.join(" ");

    document.getElementById("wrong-letters").innerHTML = wrongLetters.join(" ");

    if (lettersInChosenWord.toString() === blanksAndCorrectLetters.toString()) {
        winCounter++;

        alert("You win!");

        document.getElementById("wins").innerHTML = winCounter;
    }

    else if (guessCounter === 0) {
        lossCounter++;

        alert("You lose!");

        document.getElementById("losses").innerHTML = lossCounter;
    }
}

document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var letterGuessed = event.key.toUpperCase();
        checkLeters(letterGuessed);
        letterChosen();
    }
};