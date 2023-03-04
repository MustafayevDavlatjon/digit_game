import React, { useState } from "react";
import "./DigitGame.css";

export default function DigitGame() {
  const [randomNumber, setRandomNumber] = useState(random(0, 100));
  const [enteredNumber, setEnteredNumber] = useState("");

  const subtitle = document.querySelector(".form__subtitle");

  function handleSubmit(evt) {
    evt.preventDefault();

    if (randomNumber === enteredNumber) {
      subtitle.textContent = "You win!";
      setRandomNumber(random(0, 100));
      return;
    }

    if (randomNumber > enteredNumber) {
      subtitle.textContent = "Enter a higher number";
    }

    if (randomNumber < enteredNumber) {
      subtitle.textContent = "Enter a lower number";
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1 className="form__title">GUESS GAME</h1>
      <input
        className="form__input"
        onChange={(evt) => setEnteredNumber(+evt.target.value)}
        value={enteredNumber}
        type="text"
      />
      <button className="form__btn" type="submit">
        Guess
      </button>
      <h2 className="form__subtitle">Enter a number</h2>
    </form>
  );
}
function random(start, end) {
  return Math.trunc(start + Math.random() * end);
}
