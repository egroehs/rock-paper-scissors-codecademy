

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "error";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Its a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }
  if (userChoice === "bomb") {
    return "User won!";
  }
}

function playGame() {
  const userChoice = getUserChoice("rock");
  console.log("Users choice: " + userChoice);
  const computerChoice = getComputerChoice();
  console.log("Computers choice: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
