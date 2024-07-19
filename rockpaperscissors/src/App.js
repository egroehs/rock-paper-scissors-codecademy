import React, { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [displayChoice, setDisplayChoice] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    // Process the input and validate it
    const validChoices = ["rock", "paper", "scissors", "bomb"];
    if (validChoices.includes(userInput.toLowerCase())) {
      setDisplayChoice(userInput);
    } else {
      setDisplayChoice("Invalid choice");
    }
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Choose: rock, paper, or scissors..."
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Choice: {displayChoice}</p>
    </div>
  );
}

export default App;
