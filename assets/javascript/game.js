var game = {
    answers: {
        // youTubeLink is a placeholder.  Finished product will play mp3 files from ../assets/sounds
        tupac: {
            picture: "",
            song: "California Love",
            youTubeLink: "https://www.youtube.com/watch?v=J7_bMdYfSws"
        },
        coolio: {
            picture: "",
            song: "Gangsta's Paradise",
            youTubeLink: "https://www.youtube.com/watch?v=fPO76Jlnz6c"
        },
        wuTangClan: {
            picture: "",
            song: "Protect Ya Neck",
            youTubeLink: "https://www.youtube.com/watch?v=R0IUR4gkPIE"
        },
        lLCoolJ: {
            picture: "",
            song: "Mama Said Knock You Out",
            youTubeLink: "https://www.youtube.com/watch?v=vimZj8HW0Kg"
        },
        beastieBoys: {
            picture: "",
            song: "Sabotage",
            youTubeLink: "https://www.youtube.com/watch?v=z5rRZdiu1UE"
        },
        snoopDogg: {
            picture: "",
            song: "Gin & Juice",
            youTubeLink: "https://www.youtube.com/watch?v=DI3yXg-sX5c"
        },
        drDre: {
            picture: "",
            song: "Nuthin' but a 'G' Thang",
            youTubeLink: "https://www.youtube.com/watch?v=GPa59XcS6pQ"
        },
        pharcyde: {
            picture: "",
            song: "Passing Me By",
            youTubeLink: "https://www.youtube.com/watch?v=48OYTEZQR9U"
        },
        biggieSmalls: {
            picture: "",
            song: "Hypnotize",
            youTubeLink: "https://www.youtube.com/watch?v=wk4ftn4PArg"
        },
        outkast: {
            picture: "",
            song: "Jazzy Belle",
            youTubeLink: "https://www.youtube.com/watch?v=IW-9eOPAWdA"
        }
    },
// additional variable declarations

// code logic to pick answer at random & populate the answer array

// code logic to match user input with letters in answer array
    
},

// the game will be started via an onclick event linked to button, after the trademark Flava Flav "Yeah Boyyeee! is played".  Here is where that code will go; outside the game object

var yeahBoy = document.createElement("audio");
yeahBoy.setAttribute("src", "../sounds/Yeah_Boy_Start.mp3");

document.getElementById("#start-button").addEventListener("click", function() {
    yeahBoy.play();
})