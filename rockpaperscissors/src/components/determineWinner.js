import getComputerChoice from "./getComputerChoice";


function determineWinner(userChoice, computerChoice) {
  
  if (userChoice === computerChoice) {
    return "Its a tie!";
  }
  if (userChoice === "Rock") {
    return computerChoice === "Paper" ? "Computer win!" : "You win!";
  }

  if (userChoice === "Paper") {
    return computerChoice === "Scissors" ? "Computer win!" : "You win!";
  }

  if (userChoice === "Scissors") {
    return computerChoice === "Rock" ? "Computer win!" : "You win!";
  }
 
}

export default determineWinner;