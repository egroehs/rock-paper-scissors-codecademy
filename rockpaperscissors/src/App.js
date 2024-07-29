import React, { useState } from "react";
import "./App.css";
import getComputerChoice from "./components/getComputerChoice.js";
import determineWinner from "./components/determineWinner.js";
function App() {
  
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleChoice = (choice) => {
    setUserChoice(choice);
    const computerSelection = getComputerChoice();
    setComputerChoice(computerSelection);
    const gameResult = determineWinner(choice, computerSelection);
    setResult(gameResult);
  };

  return (
    <div className="App">
      <h1>Rock, Paper or Scissors?</h1>
      <div className="buttons">
        <button onClick={() => handleChoice("Rock")}>👊</button>
        <button onClick={() => handleChoice("Paper")}>✋</button>
        <button onClick={() => handleChoice("Scissors")}>✌️</button>
      </div>

      <div className="choices">
        <p>
          {" "}
          {userChoice}
          {userChoice && <strong> VS</strong>} {computerChoice}
        </p>
      </div>
      <div className="result">
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
