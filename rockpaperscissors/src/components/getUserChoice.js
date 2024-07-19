import React from "react";
import "./getUserChoice.css";

function getUserChoice() {
  let userInput = prompt("Choose: rock, paper or scissors...");
  
  if (userInput !== null) {
    userInput = userInput.toLowerCase();
  }

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput
  } else {

    console.log("error");
  }
}

export default getUserChoice;