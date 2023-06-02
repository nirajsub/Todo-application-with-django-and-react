import React, { useState } from 'react';

const TicTacToe = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Game />
        </div>
    )
}
function Board({xIsNext, squares, onPlay}) {
    

    function handleClick(i) {
        if (squares[i] || winner) {
            return;
        }
        const nextSquares = [...squares]
        nextSquares[i] = xIsNext ? 'X' : 'O'

        onPlay(nextSquares)
        onPlay(!xIsNext)
    }
    const winner = calculateWinner(squares)
    let status;
    if (winner) {
        status = "Winner is Mr: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
        <div>
            <div className="flex justify-center text-2xl font-bold items-center">
                <h3>{status}</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {squares.map((value, index) => (
                    <Square key={index} value={value} onSquareClick={() => handleClick(index)}/>
                ))}
            </div>
        </div>
    )
}
function Game() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
      }

    return (
       
<div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
        
    )
}
function Square({value, onSquareClick}) {
    return (
        <button 
        className="w-20 h-20 border-2 border-sky-300 text-3xl" 
        onClick={onSquareClick}>
            {value}
        </button>
    )
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
export default TicTacToe
