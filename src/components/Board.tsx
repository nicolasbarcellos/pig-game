import React from "react";
import { useState } from "react";
import { Button } from "./Button";
import { Container } from "./styles";

export function Board() {
  const [active, setActive] = useState(0);
  const [player1Value, setPlayer1Value] = useState<number>(0);
  const [player2Value, setPlayer2Value] = useState(0);
  const [dice, setDice] = useState<number>(1);
  const [showDice, setShowDice] = useState(false);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [winner, setWinner] = useState(false);

  const randomValue = Math.floor(Math.random() * 6) + 1;

  function handleNewGame() {
    setShowDice(false);
    setPlayer1Value(0);
    setPlayer2Value(0);
    setActive(0);
  }

  function handleRollDice() {
    setDice(randomValue);
    setShowDice(true);

    if (active === 0) {
      setPlayer1Value((prevValue) => prevValue + randomValue);
      if (randomValue === 1) {
        setPlayer1Value(0);
        setActive(1);
      }
    }
    if (active === 1) {
      setPlayer2Value((prevValue) => prevValue + randomValue);
      if (randomValue === 1) {
        setPlayer2Value(0);
        setActive(0);
      }
    }
  }

  function handleHold() {
    if (active === 0) {
      setActive(1);
      if (player1Value > 0) {
        setTotal1((prevTotal) => prevTotal + player1Value);
      }
    } else {
      setActive(0);
      if (player2Value > 0) {
        setTotal2((prevTotal) => prevTotal + player2Value);
      }
    }
    setDice(randomValue);
    setPlayer1Value(0);
    setPlayer2Value(0);

    if (total1 >= 20) {
      setWinner(true);
      return true;
    }

    if (total2 >= 20) {
      setWinner(true);
      return true;
    }
  }

  console.log(total1);

  return (
    <Container>
      <div
        className={`player-1 ${total1 >= 20 ? "winner" : ""} ${
          active === 0 ? "active" : ""
        }`}
      >
        <h2>Player 1</h2>
        <span>{total1}</span>
        <div>
          <h3>Current</h3>
          <span>{player1Value}</span>
        </div>
      </div>

      <Button onClick={handleNewGame} top="40px" className="a">
        🔄 New game
      </Button>

      {showDice && (
        <div className="dice">
          <img src={require(`../assets/dice-${dice}.png`).default} alt="Dice" />
        </div>
      )}

      <Button winner={winner} onClick={handleRollDice} top="390px">
        🎲 Roll dice
      </Button>

      <Button winner={winner} onClick={handleHold} top="460px">
        📥 Hold
      </Button>

      <div
        className={`player-2 ${total2 >= 20 ? "winner" : ""} ${
          active === 1 ? "active" : ""
        }`}
      >
        <h2>Player 2</h2>
        <span>{total2}</span>
        <div>
          <h3>Current</h3>
          <span>{player2Value}</span>
        </div>
      </div>
    </Container>
  );
}
