const content = document.querySelector("h2.text");
// const button_start = document.querySelector(".btn_play");
const button_reset = document.querySelector(".btn_reset");

const button_rock = document.querySelector(".rock");
const button_paper = document.querySelector(".paper");
const button_scissors = document.querySelector(".scissors");

content.innerHTML = "Welcome to our game traveler!";
const game_counter = 0;

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

function start_game(playerSelection) {
  return console.log(playerSelection);
}

function reset_game() {
  return (game_counter = 0);
}

button_rock.addEventListener("click", () => start_game("rock"));
button_paper.addEventListener("click", () => start_game("paper"));
button_scissors.addEventListener("click", () => start_game("scissors"));

button_reset.addEventListener("click", reset_game);
