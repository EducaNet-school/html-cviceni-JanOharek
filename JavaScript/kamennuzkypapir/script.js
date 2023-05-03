const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", playGame);
rock.addEventListener("click", () => makeChoice("rock"));
paper.addEventListener("click", () => makeChoice("paper"));
scissors.addEventListener("click", () => makeChoice("scissors"));

function makeChoice(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const result = compareChoices(playerChoice, computerChoice);
  displayResult(playerChoice, computerChoice, result);
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "
