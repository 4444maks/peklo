import './Volume.css'
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

export default function VolumeControl() {

    const { volume, setVolume } = useContext(PlayerContext);

    const handleChange = (e) => {
        setVolume(Number(e.target.value));
    };

    return (
        <div className="volume_control">
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleChange}
            />
        </div>
    )
}