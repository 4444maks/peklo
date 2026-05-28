import './Left.css'
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import PlayerControls from "../PlayerControls/Contr";
import ProgressBar from "../ProgressBar/Procwss";
import VolumeControl from "../VolumeControl/Volume";
export default function Left() {

    const { currentTrack } = useContext(PlayerContext);

    return (
        <section className="left">

            {currentTrack ? (
                <>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                        alt=""
                        className="img_muzik"
                    />

                   <p className="p_muzik">
  {currentTrack.title}
  <br />
  <span>{currentTrack.album}</span>
</p>

                    <ProgressBar />

                    <PlayerControls />

                    <VolumeControl />
                </>
            ) : (
                <p className="p_muzik">Выберите трек</p>
            )}

        </section>
    )
}