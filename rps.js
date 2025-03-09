let humanScore = 0;
let computerScore = 0;
const boardHumanScore = document.querySelector("#humanScore");
boardHumanScore.textContent = humanScore;
const boardComputerScore = document.querySelector("#computerScore");
boardComputerScore.textContent = computerScore;

function getComputerChoice() {
  let randomNumber = Math.random();
  return randomNumber <= 0.333
    ? "ROCK"
    : randomNumber <= 0.666
    ? "PAPER"
    : "SCISSORS";
}

function getHumanChoice() {
  let humanChoice = window.prompt("Rock? Paper? Scissors?");
  humanChoice = humanChoice ? humanChoice.toUpperCase() : "";
  if (validate(humanChoice)) return humanChoice;
  else alert("Choose a valid option.");
  return getHumanChoice();
}

function validate(choice) {
  choice = choice ? choice.toUpperCase() : "";
  return choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS";
}

function playRound(humanChoice, computerchoice) {
  if (!validate(computerchoice) || !validate(humanChoice)) {
    alert("Error! reload the game.");
    return;
  }
  if (humanChoice == computerchoice) {
    console.log(`Its a tie, you chose ${humanChoice} as well as me!`);
    return;
  }

  if (
    (humanChoice == "ROCK" && computerchoice == "SCISSORS") ||
    (humanChoice == "SCISSORS" && computerchoice == "PAPER") ||
    (humanChoice == "PAPER" && computerchoice == "ROCK")
  ) {
    console.log(
      `You chose ${humanChoice} and it beates ${computerchoice}, you earn a point. You: ${++humanScore} Me:${computerScore} `
    );
  } else {
    console.log(
      `My chose was ${computerchoice}, and it beates ${humanChoice}, I earn a point. Me: ${++computerScore} You: ${humanScore}`
    );
  }
}

(function playGame() {
  let computer = getComputerChoice();
  let human = getHumanChoice();
  playRound(human, computer);

  if (computerScore > humanScore) {
    alert(`I win! Final score - You: ${humanScore} | Me: ${computerScore}`);
  } else if (humanScore > computerScore) {
    alert(`You win! Final score - You: ${humanScore} | Me: ${computerScore}`);
  } else {
    alert(
      `It's a tie! Final score - You: ${humanScore} | Me: ${computerScore}`
    );
  }
});

const startGameButton = document.querySelector("#startGameButton");
startGameButton.addEventListener("click", () => {
  const mainBody = document.querySelector("body");
  const startDiv = document.getElementById("startDiv");
  mainBody.removeChild(startDiv);
  const board = document.querySelector("#board");
  board.classList.remove("hidden");
  const divScore = document.querySelector("#score");
  divScore.classList.remove("hidden");
});
