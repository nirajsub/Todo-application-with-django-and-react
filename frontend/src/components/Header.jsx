import React from "react";
import meme from "../images/emoji.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar flex justify-between border-b-4 p-3 w-full">
      <div className="flex items-center">
        <Link to="/">
        <img src={meme} alt="meme-icon" className="meme-icon h-12" />
        </Link>
        <Link to="/meme">
        <h2 className="ml-5 font-bold text-2xl pl-5">Meme Generator</h2>
      </Link>
      <Link to="/counter">
        <h1 className="ml-5 font-bold text-xl pl-10">Counter</h1>
      </Link>
      <Link to="/tictac">
        <h1 className="ml-5 font-bold text-xl pl-10">Tic-Tac-Toe</h1>
      </Link>
      <Link to="/tictactoe">
        <h1 className="ml-5 font-bold text-xl pl-10">Tic-Tac-Toe-2</h1>
      </Link>
      </div>
      
      <div className="flex items-center">
        <p className="mr-4 font-sans text-xl">React Project</p>
      </div>
    </header>
  );
};

export default Header;
