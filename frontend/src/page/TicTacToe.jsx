import React, { useState } from "react";

const TicTacToe = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Game />
    </div>
  );
};

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  return (
    <div className="game flex justify-center gap-10">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <h1 className="font-bold text-xl">The World of MAGIC</h1>
        <ol>
            <li>{moves}</li>
        </ol>
      </div>
    </div>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is Mr: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div>
      <div className="flex justify-center text-2xl font-bold items-center">
        <h3 className="mb-5">{status}</h3>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-20 h-20 border-2 border-sky-300 text-3xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
function calculateWinner(squares) {
  const list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < list.length; i++) {
    const [a, b, c] = list[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
}
export default TicTacToe;
