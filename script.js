function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let idx = Math.floor(Math.random() * choices.length);
  return choices[idx];
}

function playRound(playerSelection, computerSelection, playerPoints, computerPoints) {
  // your code here!
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return [playerPoints+0, computerPoints+0, "Tied"];
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return [playerPoints+1, computerPoints+0, `You Win! ${playerSelection} beats ${computerSelection}!`];
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return [playerPoints+1, computerPoints+0, `You Win! ${playerSelection} beats ${computerSelection}!`];
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return [playerPoints+1, computerPoints+0, `You Win! ${playerSelection} beats ${computerSelection}!`];
  } else
    return [playerPoints+0, computerPoints+1, `You Lose! ${computerSelection} beats ${playerSelection}!`];
}

function appendText(querySel, txt) {
  const container = document.querySelector(querySel);
  const content = document.createElement("p");
  content.textContent = txt;
  container.appendChild(content);
}
function replaceText(id, txt) {
  document.getElementById(id).innerText = txt;
}
function displayMove(event, playerPoints, computerPoints) {
  let playerChoice;
  if (event.target.id === "rock") {
    playerChoice = "Rock";
  } else if (event.target.id === "paper") {
    playerChoice = "Paper";
  } else {
    playerChoice = "Scissors";
  }

  const computerChoice = getComputerChoice();
  const [playerScore, computerScore, winningText] = playRound(
    playerChoice,
    computerChoice,
    playerPoints, computerPoints
  );

//   replaceText("playerChoice", playerChoice);
//   replaceText("computerChoice", computerChoice);
  appendText(".player", playerChoice);
  appendText(".computer", computerChoice);
  replaceText("result-text", winningText);

  return [playerScore, computerScore];
}
function displayFinalScore(playerScore, computerScore) {
  if (playerScore > computerScore) {
    replaceText("gameResult", `Final: You Won ${playerScore} to ${computerScore}`);
  } else if (computerScore > playerScore) {
    replaceText("gameResult", `Final: You Lost ${playerScore} to ${computerScore}`);
  } else {
    replaceText("gameResult", `Final: You Tied ${playerScore} to ${computerScore}`);
  }

  document.getElementById('submit').style.visibility ='visible';
}

function game(numberGames) {
  const buttons = document.querySelectorAll(".btn");
  let count = 0;
  let player = 0;
  let computer = 0;
  buttons.forEach(function (currentBtn) {
    currentBtn.addEventListener("click", (event) => {
      count++;
      if (count <= numberGames) {
        [player, computer] = displayMove(event, player, computer);
      } 
      
      if (count == numberGames) {
        displayFinalScore(player, computer);
      }
    });
  });
}
game(5);
