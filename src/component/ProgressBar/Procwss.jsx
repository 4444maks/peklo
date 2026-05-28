import './Procwss.css'
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

export default function ProgressBar() {
   
  

    const { currentTime, duration } = useContext(PlayerContext);

    const progress = duration ? (currentTime / duration) * 100 : 0;

    const formatTime = (time) => {
        if (!time) return "0:00";

        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60).toString().padStart(2, "0");

        return `${min}:${sec}`;
    };

    return (
        <div className="progress_bar_container">
            <div className="progress_bar">
                <div
                    className="progress"
                    style={{ width: `${progress}%` }}
                />
                 <div className="time">
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            </div>

           
        </div>
    )
}