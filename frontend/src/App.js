import "./index.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Meme from "./page/Meme";
import Counter from "./components/Counter";
import Tictac from "./page/Tictac";
import Home from "./page/Home";
import TicTacToe from "./page/TicTacToe";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meme" element={<Meme />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tictac" element={<Tictac />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

