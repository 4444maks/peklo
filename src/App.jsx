import './App.css'
import Navbar from './component/Navbar/Navbar';
import TrackCard from './component/TrackCard/TrackCard';
import PlayerProvider, { PlayerContext } from './context/PlayerContext';
import { useContext } from 'react';

function AppContent() {
  const data = useContext(PlayerContext);

  return (
    <div className="box">
      <TrackCard />
      <Navbar />
    </div>
  );
}

function App() {
  return (
    <PlayerProvider>
      <AppContent />
    </PlayerProvider>
  );
}

export default App