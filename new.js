
//Create variables for HTML elements
const runningScore = document.getElementById("runningScore");
const results = document.getElementById("results");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

//Declare variables for keeping score
let computerScore = 0;
let playerScore = 0;

//Assign score variables to HTML element
runningScore.textContent = `Player Score: ${playerScore} \nComputer Score: ${computerScore}`

//Create function to return random RPS computer choice
function getComputerChoice() {
   computerSelection = Math.floor(Math.random() * 3);

   if (computerSelection == 0) {
    return "rock";
   }
   if (computerSelection == 1) {
    return "paper";
   }
   if (computerSelection == 2) {
    return "scissors"
   }
}

//Create function to assign button click to player choice

let playerSelection
let btnClick

rockBtn.addEventListener("click", () => playerChoice("rock"))
paperBtn.addEventListener("click", () => playerChoice("paper"))
scissorsBtn.addEventListener("click", () => playerChoice("scissors"))

function playerChoice(playerSelection) {
    
    computer = getComputerChoice();
    singleRound(playerSelection, computer)
}



