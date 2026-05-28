import Right from "../component/Right_block/Right";

import TrackCard from "../component/TrackCard/TrackCard";
import tracks from "../data/tracks";

import './Home.css'

export default function Home() {

    return (
        <Right>

            <div className="home_box">

                {tracks.map(track => (
                    <TrackCard
                        key={track.id}
                        id={track.id}
                        title={track.title}
                        album={track.album}
                        cover={track.cover}
                        src={track.src}
                    />
                ))}

            </div>

        </Right>
    )
}