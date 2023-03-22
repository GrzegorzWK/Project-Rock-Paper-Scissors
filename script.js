console.log("Hello!");
const content = document.querySelector(".text");
const button_start = document.querySelector(".btn");

function getComputerChoice() {
  const computerChoice = Math.random() * 10;

  if (computerChoice <= 3.3) {
    return "rock";
  } else if (computerChoice <= 6.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function round(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return (result = "Tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return (result = "You win!");
  } else {
    return (result = "You lose!");
  }
}

function game() {
  let i = 0;
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore <= 4 && computerScore <= 4) {
    const playerSelection = window.prompt("Are you feeling lucky");
    const computerSelection = getComputerChoice();

    console.log(`Player: ${playerSelection} Computer: ${computerSelection}`);

    let result = round(playerSelection.toLowerCase(), computerSelection);

    console.log(result);

    if (result == "You win!") {
      playerScore++;
      content.innerHTML = `Player score: ${playerScore} Computer score: ${computerScore}`;
      console.log(
        `Player score: ${playerScore} Computer score: ${computerScore}`
      );
    } else if (result == "You lose!") {
      computerScore++;
      content.innerHTML = `Player score: ${playerScore} Computer score: ${computerScore}`;
      console.log(
        `Player score: ${playerScore} Computer score: ${computerScore}`
      );
    } else {
      content.innerHTML = `Player score: ${playerScore} Computer score: ${computerScore}`;
      console.log(
        `Player score: ${playerScore} Computer score: ${computerScore}`
      );
    }
  }
}

button_start.addEventListener("click", game);
