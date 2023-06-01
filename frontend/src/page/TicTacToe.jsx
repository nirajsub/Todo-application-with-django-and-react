import React, { useState } from 'react';

const TicTacToe = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Board />
        </div>
    )
}
function Board() {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i) {
        if (squares[i] || winner) {
            return;
        }
        const nextSquares = [...squares]
        nextSquares[i] = xIsNext ? 'X' : 'O'

        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }
    const winner = calculateWinner(squares)
    return (
        <div>
            <div className="flex justify-center text-2xl font-bold items-center">
                {winner && <h3>Winner is Mr. : {winner}</h3>}
            </div>
            <div className="grid grid-cols-3 gap-2">
                {squares.map((value, index) => (
                    <Square key={index} value={value} onSquareClick={() => handleClick(index)}/>
                ))}
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
