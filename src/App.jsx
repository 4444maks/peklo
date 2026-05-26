/*Надеюсь, эти комментарии попадут в основную ветку. Кратко и обо
Всём: */

/*Я тут че заметил. В моей версии нету Home как и вообще папки
pages. Это беда ведь я хотел подключить туда массив из datа,
но раз так, то я создам файл HomeJS.jsx и накидаю там что-то*/

//Импорты. Те что есть не трогайте, но новые добавляйте
import './App.css'
import Navbar from './component/Navbar/Navbar';
import PlayerProvider, { PlayerContext } from './context/PlayerContext';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Тут вы будете работать. Воспринимайте эту функцию как обычный 
App.jsx*/
function AppContent() {
  const data = useContext(PlayerContext);

  return (
    <div className="box">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Тут крч ваши роуты. Я их закомментировал т.к. пока что
          нету элементов на которые можно перейти и еще я удалил
          TrackCard отсюда, он будет в каком-то элементе из pages.
          И не забудьте импортировать элемент перед тем как его
          сюда писать */}
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/search' element={<Search/>}/> */}
          {/* <Route path='/favorites' element={<Favorites/>}/> */}
        </Routes>
        {/* Вот этот черт тут и должен быть. Не трогайте */}
        {/* <PlayerBar /> */}
      </BrowserRouter>
    </div>
  );
}

/*Эту штуку не трогайте. Тут AppContent оборачивается в PlayerProvider
Что б были глоб. переменные*/
function App() {
  return (
    <PlayerProvider>
      <AppContent />
    </PlayerProvider>
  );
}

export default App