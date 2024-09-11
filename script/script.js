function getComputerChoice() {
    let theChoice = Math.floor(Math.random()*3+1)

    if (theChoice === 1) {
        return "Rock"
    }
    else if (theChoice === 2) {
        return "Paper"
    }
    else return "Scissors"
};

function getHumanChoice() {
    let humanChoice = parseInt(prompt("Press F12 to see what's going on\nNum 1 for *ROCK!*, Num 2 for *PAPER!* and Num 3 for *SCISSORS!*.\nYour choice?", ""));

    if (humanChoice === 1) {
        return "Rock"
    }
    else if (humanChoice === 2) {
        return "Paper"
    }
    else if (humanChoice === 3) {
        return "Scissors"
    }
    else return "Choose a valid number. Try again."
};

let humanScore = 0;
let computerScore = 0;

function playGame() {

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    function playRound() {
        if (humanChoice === computerChoice) {
            return "tie";
        } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")) {
            return "human";
        } else return "computer";
    };

    console.log("The computer chose " + computerChoice);
    console.log("You chose " + humanChoice);

    let result = playRound();

    if (result === "tie") {
        humanScore += 1;
        computerScore += 1;
    } else if (result === "human") {
        humanScore += 1;
    } else computerScore +=1;

    console.log("*Current score* \nComp-ew-tah: " + computerScore + "." + "\nHooman: " + humanScore + ".");

};

for (let i = 0; i < 5; i++) {
    playGame();
}

if (humanScore >= computerScore) {
    console.log("GAME OVER!");
    console.log('Hooman wins')
} else if (computerScore >= humanScore) {
    console.log("GAME OVER!");
    console.log('Comp-ew-tah wins')
} else "It's chai";