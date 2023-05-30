import React from "react";
import meme from "../images/emoji.png";

const Header = () => {
  return (
    <header className="navbar flex justify-between border-b-4 p-3 w-full">
      <div className="flex items-center">
        <img src={meme} alt="meme-icon" className="meme-icon h-12" />
        <h2 className="ml-5 font-bold text-2xl">Meme Generator</h2>
      </div>
      <div className="flex items-center">
        <p className="mr-4 font-sans text-xl">React Project</p>
      </div>
    </header>
  );
};

export default Header;
