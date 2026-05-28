import './Contr.css'
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

export default function PlayerControls() {

    const { isPlaying, playTrack, pauseTrack, currentTrack } = useContext(PlayerContext);

    const handlePlayPause = () => {
        if (!currentTrack) return;

        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack(currentTrack);
        }
    };

    return (
        <div className="player_controls">
            <button>⏮</button>

            <button onClick={handlePlayPause}>
                {isPlaying ? "⏸" : "▶"}
            </button>

            <button>⏭</button>
        </div>
    )
}