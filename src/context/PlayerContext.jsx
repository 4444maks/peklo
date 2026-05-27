import { createContext, useState, useRef } from "react";

export const PlayerContext = createContext();

export default function PlayerProvider({ children }) {

    const audioRef = useRef(null);

    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolumeState] = useState(1);
    const [favorites, setFavorites] = useState([]);

    const playTrack = (track) => {
        setCurrentTrack(track);

        if (audioRef.current) {
            audioRef.current.src = track.src;
            audioRef.current.play();
        }

        setIsPlaying(true);
    };

    const pauseTrack = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setIsPlaying(false);
    };

    const setVolume = (value) => {
        setVolumeState(value);

        if (audioRef.current) {
            audioRef.current.volume = value;
        }
    };

    const addToFav = (track) => {
        setFavorites(prev => [...prev, track]);
    };

    const removeFromFav = (id) => {
        setFavorites(prev => prev.filter(t => t.id !== id));
    };

    return (
        <PlayerContext.Provider value={{
            currentTrack,
            isPlaying,
            volume,
            favorites,
            playTrack,
            pauseTrack,
            setVolume,
            addToFav,
            removeFromFav
        }}>
            <audio ref={audioRef} />
            {children}
        </PlayerContext.Provider>
    );
}