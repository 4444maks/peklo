import './App.css'

import Left from './component/Left_block/Left';
import Right from './component/Right_block/Right';

import PlayerProvider from './context/PlayerContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

function AppContent() {
  return (
    <div className="box">

      <Left />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>

    </div>
  );
}

function App() {
  return (
    <PlayerProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </PlayerProvider>
  );
}

export default App;