import React, { useState } from "react";
import MemesData from "./MemesData";

function Meme() {

    const [memeImage, setMemeImage] = useState("")
    
    function getMemeImage() {
      const memesArray = MemesData.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      setMemeImage(memesArray[randomNumber].url)
    }
    // console.log(setMemeImage);


    const [counter, setCounter] = useState(0)
    function sub() {
        setCounter(prevCount => prevCount - 1)
    }
    function add() {
        setCounter(prevCount => prevCount + 1)
    }
  return (
    <main>
      <form>
        <div>
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="font-bold text-slate-800 text-2xl mb-5">Relax! This is just a counter</h1>
            </div>
            <div className="counter">
            <button type="button" className="counter--minus" onClick={sub}>-</button>
            <div className="counter--count">
                <h1>{counter}</h1>
            </div>
            <button type="button" className="counter--plus" onClick={add}>+</button>
            </div>
        </div>
        </div>
        <div className="flex justify-center items-center space-x-16 my-6">
          <div className="flex flex-col">
            <label htmlFor="top" className="font-bold text-sm mb-2">
              Top
            </label>
            <input
              type="text"
              name="top"
              id="top"
              className="border-2 border-slate-300 w-56 h-8 hover:border-blue-200 focus:border-blue-200"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bottom" className="font-bold text-sm mb-2">
              Bottom
            </label>
            <input
              type="text"
              name="bottom"
              id="bottom"
              className="border-2 border-slate-300 w-56 h-8 hover:border-blue-200 focus:border-blue-200"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-gradient-to-r from-purple-800 to-pink-600 text-white py-2 px-4 rounded-md"
            onClick={getMemeImage}
          >
            Get a new meme
          </button>
        </div>
        <div className="flex justify-center">
            <img src={memeImage} alt="this is meme"/>
        </div>
      </form>
    </main>
  );
};

export default Meme;
