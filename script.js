function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let idx = Math.floor(Math.random() * choices.length);
  return choices[idx];
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Tied";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else return `You Lose! ${computerSelection} beats ${playerSelection}!`;
}

function appendText(querySel, txt) {
  const container = document.querySelector(querySel);
  const content = document.createElement("p");
  content.textContent = txt;
  container.appendChild(content);
}
function replaceText(id, txt) {
  document.getElementById(id).innerText = txt
}
function displayMove(event) {
  let playerChoice;
  if (event.target.id === "rock") {
    playerChoice = "Rock";
  } else if (event.target.id === "paper") {
    playerChoice = "Paper";
  } else {
    playerChoice = "Scissors";
  }

  const computerChoice = getComputerChoice();
  const winningText = playRound(playerChoice, computerChoice);

  replaceText("playerChoice", playerChoice);
  replaceText("computerChoice", computerChoice);
  replaceText("result-text", winningText);

}

function game(numberGames) {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (currentBtn) {
    currentBtn.addEventListener("click", (event) => {
      displayMove(event);
    });
  });
}
game(1);
