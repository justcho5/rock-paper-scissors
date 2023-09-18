function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random()*choices.length);
    return choices[idx]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection.toLowerCase() === computerSelection){
        return "Tied"
    }
    else if ((playerSelection.toLowerCase()==="rock")&&(computerSelection==="scissors")){
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    }
    else if ((playerSelection.toLowerCase()==="scissors")&&(computerSelection==="paper")){
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    }
    else if ((playerSelection.toLowerCase()==="paper")&&(computerSelection==="rock")){
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    }
    else return `You Lose! ${computerSelection} beats ${playerSelection}!`
  }

function game(numberGames){
    for (let i = 0; i < numberGames; i++) {
        const playerSelection = prompt("Choose from the following: rock, paper, or scissors?"); // get input
        const computerSelection = getComputerChoice();
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
      }
}
game(5)