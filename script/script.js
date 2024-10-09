let humanChoice = '';

function getComputerChoice() {
    let theChoice = Math.floor(Math.random()*3+1)

    if (theChoice === 1) {
        return "rock"
    }
    else if (theChoice === 2) {
        return "paper"
    }
    else return "scissors"
};

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameText = document.querySelector('#game-text');

rock.addEventListener("click", () => {
    humanChoice = "rock";
    playGame();
  });
  
paper.addEventListener("click", () => {
    humanChoice = "paper";
    playGame();
  });
  
scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    playGame();
  });

let humanScore = 0;
let computerScore = 0;

function playGame() {
  
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    };

    let computerChoice = getComputerChoice();

    function playRound() {
        if (humanChoice === computerChoice) {
            return "tie";
        } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
            return "human";
        } else return "computer";
    };

    console.log("The computer chose " + computerChoice);
    console.log("You chose " + humanChoice);
    gameText.textContent = 'The computer chose ' + computerChoice + ' and you chose ' + humanChoice;
    
    const human = document.querySelector('.human-score');
    const computer = document.querySelector('.pc-score');
    
    document.querySelector('.human-score').textContent = humanScore;
    document.querySelector('.pc-score').textContent = computerScore;
    
    let result = playRound();

    if (result === "tie") {
        humanScore += 1;
        human.textContent = humanScore;
        
        computerScore += 1;
        computer.textContent = computerScore;
        
    } else if (result === "human") {
        humanScore += 1;
        human.textContent = humanScore;
        
    } else {
        computerScore +=1;
        computer.textContent = computerScore;
    }
    

    console.log("*Current score* \nComp-ew-tah: " + computerScore + "." + "\nHooman: " + humanScore + ".");
  
    if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore >= computerScore) {
        console.log("GAME OVER!");
        console.log('Hooman wins');
        gameText.textContent = "GAME OVER! Hooman wins!";

        
    } else if (computerScore >= humanScore) {
        console.log("GAME OVER!");
        console.log('Comp-ew-tah wins');
        gameText.textContent = "GAME OVER! Comp-ew-tah wins!";
    } else {
        console.log("It's chai");
        gameText.textContent = "It's chai";
    };
  };
};

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  document.querySelector('.human-score').textContent = humanScore;
  document.querySelector('.pc-score').textContent = computerScore;
  gameText.textContent = "Game. Let's play!."
  console.log('Game reset. New game started.')
});