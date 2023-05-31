import React, { useState } from "react";

const Tictac = () => {
  return (
    <div>
      <Board />
    </div>
  );
};
function Board() {
    
  return (
    <>
      <div className="board-row">
        <Square />
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}
function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X')
    }
  return <button 
  className="square w-20 h-20 border-2 border-sky-300 text-3xl"
  onClick={handleClick}
  >
    {value}
    </button>;
}

export default Tictac;
