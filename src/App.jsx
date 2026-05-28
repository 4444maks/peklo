/*Надеюсь, эти комментарии попадут в основную ветку. Кратко и обо
Всём: */

/*Я тут че заметил. В моей версии нету Home как и вообще папки
pages. Это беда ведь я хотел подключить туда массив из datа,
но раз так, то я создам файл HomeJS.jsx и накидаю там что-то*/

//Импорты. Те что есть не трогайте, но новые добавляйте
import './App.css'
import Left from './component/Left_block/Left';
import Right from './component/Right_block/Right';
import PlayerProvider, { PlayerContext } from './context/PlayerContext';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeJS from './HomeJS';

/*Тут вы будете работать. Воспринимайте эту функцию как обычный 
App.jsx*/
function AppContent() {
  return (
    <div className="box">
   <Left />
   <Right />
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

export default App