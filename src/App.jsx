/*Надеюсь, эти комментарии попадут в основную ветку. Кратко и обо
Всём: */

//Импорты. Те что есть не трогайте, но новые добавляйте
import './App.css'
import Navbar from './component/Navbar/Navbar';
import TrackCard from './component/TrackCard/TrackCard';
import PlayerProvider, { PlayerContext } from './context/PlayerContext';
import { useContext } from 'react';

/*Тут вы будете работать. Воспринимайте эту функцию как обычный 
App.jsx*/
function AppContent() {
  const data = useContext(PlayerContext);

  return (
    /*Если тут нет Routes, значит, с этой строчки добавьте <BrowserRouter>
    А так вообще ищите инструкцию в группе за 21.05 там в файле это пункт 5*/
    <div className="box">
      <TrackCard />
      <Navbar />
    </div>
    //Вот тут закрыть </BrowserRouter>
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