

function playGame() {
  const userChoice = getUserChoice("rock");
  console.log("Users choice: " + userChoice);
  const computerChoice = getComputerChoice();
  console.log("Computers choice: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
