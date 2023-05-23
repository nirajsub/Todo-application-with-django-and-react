import './App.css';
import { useState } from 'react'

// function MyButton(){
//     function handleClick(){
        
//         alert('aah! you clicked me!')
//     }
//     return (
//         <button onClick={handleClick}>I'm a button</button>
//     );
// }
// function MyButton2(){
//     const [count, setCount] = useState(0);
//     function handleClick(){
//         setCount(count+1);
//     }
//     return (
//         <button onClick={handleClick}>
//             Clicked {count} times</button>
//     );
// }

// const user = {
//     name : 'mathew machaney',
//     imageUrl : 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS87UdaOaTluCVAxrGqKCAh2eV6mYov14YWNdu9ng7L-ZuPzngfK7rcEewPMTRsmKP3pzTKZPVAUCV24zk',
//     imageSize : 90,
// }
// const products = [
//     {title : 'Apple', isFruit : true, id :1},
//     {title : 'Car', isFruit : false, id :2},
//     {title : 'Ballon', isFruit : false, id :3},
// ]
// export default function Profile(){
//     const [count, setCount] = useState(0);
//     function handleClick(){
//         setCount(count+1);
//     }
//     const ListItems = products.map(product =>
//         <li key={product.id}
//         style = {{
//             color:product.isFruit? 'green' : 'red'
//         }}
//         >
//             {product.title}
//         </li>
//         )
//     return (
//         <div>
//             <div>
//             <h1>Welcome to My app</h1>
//              <MyButton/>
//             </div>
//             <div>
//                 <h1>{user.name}</h1>
//                 <img 
//                 className='avatar'
//                 src={user.imageUrl}
//                 alt={'image of ' + user.name}
//                 style={{
//                     width : user.imageSize,
//                     height : user.imageSize
//                     }}
//                 ></img>
//             </div>
//             <div>
//                 <ul>
//                     {ListItems}
//                 </ul>
//             </div>
//             <div>
//                 <h1>Counter that count seperately</h1>
//                 <MyButton2/>
//                 <MyButton2/>
//             </div>
//             <div>
//                 <h1>Counter that count together</h1>
//                 <MyButton3 count={count} onClick={handleClick}/>
//                 <MyButton3 count={count} onClick={handleClick}/>
//             </div>

//         </div>
//     );
// }
// function MyButton3({count, onClick}){
//     return (
//         <button onClick={onClick}>
//             Clicked {count} times</button>
//     );
// }

function Square({value, onSquareClick}) {
  return ( 
  <button className="square" onClick={onSquareClick}>
    {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay}) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "x";
    }
    else {
      nextSquares[i] = "O"
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner){
    status = "winner: " + winner;
  }
  else {
    status = "Next Player: " + (xIsNext ? "x" : "O");
  }

    return (
    <div className="main-board">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>

      );
  }

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i=0; i<lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] =useState(0)
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  
  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1 );
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  } 
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    }
    else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>
          History: {moves}
        </ol>
      </div>
    </div>
  )
}





  
