let humanScore = 0;
let computerScore = 0;
const mainBody = document.querySelector("body");
const restartDiv = document.createElement("div");
const restartButton = document.createElement("button");
const board = document.querySelector("#board");

const boardHumanScore = document.querySelector("#humanScore");
boardHumanScore.textContent = humanScore;
const boardComputerScore = document.querySelector("#computerScore");
boardComputerScore.textContent = computerScore;
const boardScoreGameMessage = document.getElementById("messageScore");

document.getElementById("rock").addEventListener("click", (event) => {
  playGame(getHumanChoice(event));
});
document.getElementById("paper").addEventListener("click", (event) => {
  playGame(getHumanChoice(event));
});
document.getElementById("scissors").addEventListener("click", (event) => {
  playGame(getHumanChoice(event));
});

const computerScissors = document.getElementById("computerScissors");
const computerPaper = document.getElementById("computerPaper");
const computerRock = document.getElementById("computerRock");

function getHumanChoice(e) {
  let humanChoice = e.target.id;
  humanChoice = humanChoice ? humanChoice.toUpperCase() : "";
  if (validate(humanChoice)) return humanChoice;
  else alert("Choose a valid option.");
  return getHumanChoice();
}

function validate(choice) {
  choice = choice ? choice.toUpperCase() : "";
  return choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS";
}

function resetComputerSelection() {
  document.querySelectorAll(".cardDivSelectedComputer").forEach((el) => {
    el.classList.remove("cardDivSelectedComputer");
  });
}

function getComputerChoice() {
  resetComputerSelection();
  let randomNumber = Math.random();
  let choice;

  if (randomNumber <= 0.333) {
    choice = "ROCK";
    computerRock.classList.add("cardDivSelectedComputer");
  } else if (randomNumber <= 0.666) {
    choice = "PAPER";
    computerPaper.classList.add("cardDivSelectedComputer");
  } else {
    choice = "SCISSORS";
    computerScissors.classList.add("cardDivSelectedComputer");
  }

  return choice;
}

function playRound(humanChoice, computerchoice) {
  if (!validate(computerchoice) || !validate(humanChoice)) {
    alert("Error! reload the game.");
    return;
  }
  if (humanChoice == computerchoice) {
    boardScoreGameMessage.innerText = `Its a tie, you chose ${humanChoice} as well as me!`;
    return;
  }

  if (
    (humanChoice == "ROCK" && computerchoice == "SCISSORS") ||
    (humanChoice == "SCISSORS" && computerchoice == "PAPER") ||
    (humanChoice == "PAPER" && computerchoice == "ROCK")
  ) {
    boardScoreGameMessage.innerText = `You chose ${humanChoice} and it beates ${computerchoice}, you earn a point. `;
    ++humanScore;
    boardHumanScore.textContent = humanScore;
  } else {
    boardScoreGameMessage.innerText = `My chose was ${computerchoice}, and it beates ${humanChoice}, I earn a point.`;
    ++computerScore;
    boardComputerScore.textContent = computerScore;
  }
}

function playGame(human) {
  playRound(human, getComputerChoice());
  if (computerScore == 5 || humanScore == 5) {
    if (computerScore > humanScore) {
      boardScoreGameMessage.innerText = `I win! Final score - You: ${humanScore} | Me: ${computerScore}`;
    } else if (humanScore > computerScore) {
      boardScoreGameMessage.innerText = `You win! Final score - You: ${humanScore} | Me: ${computerScore}`;
    } else {
      boardScoreGameMessage.innerText = `It's a tie! Final score - You: ${humanScore} | Me: ${computerScore}`;
    }

    restartDiv.classList.add("restartDiv");
    restartButton.classList.add("roundedButton");
    restartButton.innerText = "Another one?";
    restartDiv.appendChild(restartButton);
    board.appendChild(restartDiv);
    restartButton.addEventListener("click", restart);
  }
}

function restart() {
  humanScore = 0;
  computerScore = 0;
  resetComputerSelection();
  boardHumanScore.innerText = humanScore;
  boardComputerScore.innerText = computerScore;
  boardScoreGameMessage.innerText = "Let's do it again!";
  restartDiv.removeChild(restartButton);
  board.removeChild(restartDiv);
}

const startGameButton = document.querySelector("#startGameButton");
startGameButton.addEventListener("click", () => {
  const startDiv = document.getElementById("startDiv");
  mainBody.removeChild(startDiv);
  board.classList.remove("hidden");
  const divScore = document.querySelector("#score");
  divScore.classList.remove("hidden");
});
