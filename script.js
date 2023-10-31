//Global
let playerSelection;
const computerOptions = ["Rock", "Paper", "Scissors"];

const choices = document.querySelectorAll('.fa-regular');

function gameInteraction () {
    document.querySelector("#start-button").addEventListener("click", () => {
        document.querySelector("#start-button").style.display = "none";
        choice();
        document.querySelector("#play-hand").style.display = "block";
        playHandButton();
    });
}

function choice () {
    choices.forEach((choice, i, arr) => {
        choice.addEventListener('click', (e) => {
            choice.style.color = "#FE00B7"; // current icon color clicked
            choice.style.opacity = "1";
            playerSelection = document.getElementsByClassName('choice')[i].id; // this idea might work?
            for(element of choices) { // returns other icons to original opacity
                if(element != choice) {
                    element.style.color = "rgba(255, 255, 255, 0.6)";
                    element.style.opacity = "0.5"; 
                }
            }
        })
    })
}


// Enables "Play Hand" button function
function playHandButton() {
    document.querySelector("#play-hand").addEventListener("click", () => {
        game();
    });
}

function playAgainButton() {
    document.querySelector("#play-again").addEventListener("click", ()=> {
        
    });
}

function computerIconColor(computer) {
    console.log(computer);
        element.style.color = '#D2FFAF'
        element.style.opacity = "1";
}

// performs game function
function game() {
    const computer = computerOptions[Math.floor(Math.random() * 3)];
    console.log(computer);
    console.log(playerSelection);
    
    // bug with if statement: program finds it but does not display "Draw!"
    if (playerSelection === computer) {
        console.log("draw test");
        document.getElementById("change").innerHTML = "Draw!";
    }
    
    // Rock
    if (playerSelection === "Rock") {
        if (computer === "Scissors") {
            document.getElementById("change").innerHTML = "Rock Crushes Scissors. You Win!";
        } else {
            document.getElementById("change").innerHTML = "Paper Covers Rock. You Lose!";
        }
    }
    
    // Paper
    if (playerSelection === "Paper") {
        if (computer === "Rock") {
            document.getElementById("change").innerHTML = "Paper Covers Rock. You Win!";
        } else {
            document.getElementById("change").innerHTML = "Scissors Cut paper. You Lose!";
        }
    }
    
    // Scissors
    if (playerSelection === "Scissors") {
        if (computer === "Paper") {
            document.getElementById("change").innerHTML = "Scissors Cuts Paper. You Win!";
        } else {
            document.getElementById("change").innerHTML = "Rock Crushes Scissors. You Lose!";
        }
    } 
    
    computerIconColor(computer);
}

gameInteraction();

// https://stackoverflow.com/questions/23274274/change-text-inside-h2-text-i-would-change-h2-element-using-javascript
// This link helped solve the id selection issue I was having
// https://stackoverflow.com/questions/6773550/get-id-of-div-from-its-class-name