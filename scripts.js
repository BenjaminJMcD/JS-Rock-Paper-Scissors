function getComputerChoice() {
    //Create a variable for random number
    let randomNumber = Math.random(2) * 100;

    //create if statements for three equal, random ranges of values that return ROCK, PAPER, or SCISSORS

    if (randomNumber < 33) {
        return "rock";
    }
    if (randomNumber > 66) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

let computerWins = 0;
let playerWins = 0; 

function singleRound(playerSelection, computerSelection) {
    let result;
    playerSelection = prompt("ROCK, PAPER, SCISSORS").toLowerCase();
    computerSelection = getComputerChoice();
    console.log("Player selects " + playerSelection);
    console.log("Computer selects " + computerSelection);
    if (playerSelection == computerSelection) {
        return console.log("Player: " + playerWins + " \nComputer: " + computerWins);
     }
    else if ((playerSelection == "rock" && computerSelection == "paper") ||
             (playerSelection == "paper" && computerSelection == "scissors") ||
             (playerSelection == "scissors" && computerSelection == "rock")) {
                return console.log("Player: " + playerWins + " \nComputer: " + ++computerWins);

             }
    else if ((playerSelection == "rock" && computerSelection ==   "scissors") ||
             (playerSelection == "scissors" && computerSelection == "paper") ||
             (playerSelection == "paper" && computerSelection == "rock")) {
                return console.log("Player: " + ++playerWins + " \nComputer: " + computerWins);
             }
    else {
        return console.log("Please try again");
    }
}


function game() {
    

    do {
        singleRound();
    }
    while (playerWins <= 5 || computerWins <= 5); 
 }

    game();
