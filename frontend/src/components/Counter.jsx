import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  function sub() {
    setCounter((prevCount) => prevCount - 1);
  }
  function add() {
    setCounter((prevCount) => prevCount + 1);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold text-slate-800 text-2xl mb-5">
          Relax! This is just a counter
        </h1>
      </div>
      <div className="counter">
        <button type="button" className="counter--minus" onClick={sub}>
          -
        </button>
        <div className="counter--count">
          <h1>{counter}</h1>
        </div>
        <button type="button" className="counter--plus" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
