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
var chosenWord = "";
var lettersInChosenWord = [];
var blanks = 0;
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
// Is an additional array containing the answer names required?
chosenWord = answers[Math.floor(Math.random() * answers.length)];
console.log(chosenWord);
}
