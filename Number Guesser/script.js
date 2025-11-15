let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
return Math.floor(Math.random()*10);
} 

function compareGuesses(humanScore,computerScore ,targetNumber){
  const humanDif = Math.abs(humanScore -targetNumber);
  const computerDif= Math.abs (computerScore-targetNumber);
  if (humanDif <= computerDif) {
    return true;   // Human wins (or ties)
  } else {
    return false;  // Computer wins
  }
}

function updateScore(winner){
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}
function advanceRound() {
  currentRoundNumber++;
}




