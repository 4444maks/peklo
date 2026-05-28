import './Search.css'
import { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import tracks from "../data/tracks";
import TrackCard from "../component/TrackCard/TrackCard";
export default function Search() {

    const [query, setQuery] = useState("");

    const filteredTracks = tracks.filter(track =>
        track.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search_page">

            <input
                className="search_input"
                type="text"
                placeholder="Search music..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <div className="search_list">

                {filteredTracks.length > 0 ? (
                    filteredTracks.map(track => (
                        <TrackCard
                            key={track.id}
                            id={track.id}
                            title={track.title}
                            album={track.album}
                            cover={track.cover}
                            src={track.src}
                        />
                    ))
                ) : (
                    <p className="no_result">Nothing found</p>
                )}

            </div>

            <Navbar />

        </div>
    );
}