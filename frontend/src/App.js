import "./index.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Meme from "./components/Meme";
import Counter from "./components/Counter";
import Tictac from "./page/Tictac";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/meme" element={<Meme />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tictac" element={<Tictac />} />
      </Routes>
      <Home />
      
    </BrowserRouter>
    
  );
}

