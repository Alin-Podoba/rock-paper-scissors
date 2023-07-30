function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var index = Math.floor(Math.random() * choices.length);
    var choice = choices[index];
    console.log(choice);
    return choice;
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    }
  
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  function game() {
    var playerScore = 0;
    var computerScore = 0;
  
    for (var i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose Rock, Paper, or Scissors:"); // Or use your preferred method of getting the player's choice
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      console.log(`Round ${i + 1}: ${result}`);
      if (result.includes("You Win!")) {
        playerScore++;
      } else if (result.includes("You Lose!")) {
        computerScore++;
      }
    }
  
    console.log(`Final Score: You ${playerScore} - Computer ${computerScore}`);
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry, you lost the game. Better luck next time!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  game(); // Call the game function to start the game