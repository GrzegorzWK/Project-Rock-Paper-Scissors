const content_result = document.querySelector("h2.result");
const content_action = document.querySelector("h2.action");
const content_standings = document.querySelector("h2.standings");

const button_reset = document.querySelector(".btn_reset");

const button_rock = document.querySelector(".rock");
const button_paper = document.querySelector(".paper");
const button_scissors = document.querySelector(".scissors");

content_result.innerHTML = "Welcome to our game traveler!";
content_action.innerHTML = `Please select your choose to start a game`;
let playerScore = 0;
let computerScore = 0;

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

function start_game(playerSelection) {
  const computerSelection = getComputerChoice();
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }
  let result = round(playerSelection, computerSelection);

  if (result == "You win!") {
    playerScore++;
  } else if (result == "You lose!") {
    computerScore++;
  } else {
  }

  content_result.innerHTML = `${result}`;
  content_action.innerHTML = `you pick ${playerSelection}, computer pick ${computerSelection}`;
  content_standings.innerHTML = `Player score: ${playerScore} Computer score: ${computerScore}`;

  if (playerScore >= 5) {
    content_result.innerHTML = `You win the game! You Rock!`;
  } else if (computerScore >= 5) {
    content_result.innerHTML = `You lose! You Suck!`;
  }
}

function reset_game() {
  playerScore = 0;
  computerScore = 0;

  content_result.innerHTML = "Welcome to our game traveler!";
  content_action.innerHTML = `Please select your choose to start a game`;
  content_standings.innerHTML = ``;
}

button_rock.addEventListener("click", () => start_game("rock"));
button_paper.addEventListener("click", () => start_game("paper"));
button_scissors.addEventListener("click", () => start_game("scissors"));

button_reset.addEventListener("click", reset_game);
