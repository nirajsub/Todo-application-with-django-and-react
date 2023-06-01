import React, { useEffect, useState } from "react";

const Tictac = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Board />
    </div>
  );
};

function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [wiwinner, setWiwinner] = useState()
    function handleClick(i) {
      calculateWinner(squares)
      if (squares[i] || wiwinner) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares)
      setXIsNext(!xIsNext);
  }
  
  const winner = calculateWinner(squares)
  useEffect(() => {
    setWiwinner(winner)
  },[winner])

  return (
    <div>
    <div className="flex justify-center text-2xl font-bold items-center">
       {wiwinner && <h3>Winner is Mr. : {wiwinner}</h3>}
    </div>
    <div className="grid grid-cols-3 gap-2">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
function Square({value, onSquareClick}) {
  return <button 
  className="w-20 h-20 border-2 border-sky-300 text-3xl"
  onClick={onSquareClick}
  >
    {value}
    </button>;
}

function calculateWinner(squares) {
  const list = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]
  for (let i=0; i<list.length; i++){
    const [a,b,c] = list[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]
    }
  }
}

export default Tictac;
