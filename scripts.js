function getComputerChoice() {
    //Create a variable for random number
    computer = Math.floor(Math.random() * 3);

    if (computer == 0) {
     return "Rock";
    }
    if (computer == 1) {
     return "Paper";
    }
    if (computer == 2) {
     return "Scissors"
    }
 }


//declare and initialize counters
let computerWins = 0;
let playerWins = 0; 

const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorsBtn = document.getElementById("scissorsBtn")
const results = document.getElementById("results")
const runningScore = document.getElementById("runningScore")



rockBtn.addEventListener('click', () => handleClick("Rock"));
paperBtn.addEventListener('click', () => handleClick("Paper"));
scissorsBtn.addEventListener('click', () => handleClick("Scissors"));

function handleClick(playerSelection) {
    computerSelection = getComputerChoice();
    singleRound(playerSelection, computerSelection);
}


function tie() {
    runningScore.textContent = `It's a tie...\nPlayer: ${playerWins} 
    Computer: ${computerWins}`
    gameWinner();
}

function win() {
    runningScore.textContent = `YOU WIN!\nPlayer: ${++playerWins}
    Computer: ${computerWins}`
    gameWinner();
}

function lose() {
    runningScore.textContent = `You LOSE!\nPlayer: ${playerWins}
    Computer: ${++computerWins}`
    gameWinner();
}

function singleRound(playerSelection, computerSelection) {

    results.classList.remove("hidden");
    runningScore.classList.remove("hidden");

    results.textContent = `You chose: ${playerSelection}  
    Computer chose: ${computerSelection}`
    
    
    //return and print correct information for TIE, WIN, LOSE including score counters
    if (playerSelection == computerSelection) {
        return tie();
        
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
        return lose();
        
    }
    else if ((playerSelection == "Rock" && computerSelection ==   "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")) {
        return win();
    }

}

const final = document.getElementById("final");
const winGame = document.getElementById("winGame");
const loseGame = document.getElementById("loseGame");

function gameWinner() {
    if (computerWins == 5) {
        final.classList.remove("hidden");
        winGame.classList.add("hidden");
    }
    if (playerWins == 5) {
        final.classList.remove("hidden");
        loseGame.classList.add("hidden");
    }
}

function resetGame() {
    if (computerWins == 5) {
        final.classList.add("hidden");
        results.classList.add("hidden");
        runningScore.classList.add("hidden");
        winGame.classList.remove("hidden");
        computerWins = 0;
        playerWins = 0;
    }
    if (playerWins == 5) {
        final.classList.add("hidden");
        results.classList.add("hidden");
        runningScore.classList.add("hidden");
        loseGame.classList.remove("hidden");
        computerWins = 0;
        playerWins = 0;
    }
}

const restart = document.getElementById("restart");

restart.addEventListener('click', resetGame);





