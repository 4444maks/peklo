import { createContext, useState } from "react";

export const PlayerContext = createContext();
let currentTrack = null;
let isPlaying = false;
let volume = 1;
let favorites = [];

function playTrack() { }
function pauseTrack() { }
function nextTrack() { }
function prevTrack() { }
function setVolume() { }
function addToFav() { }
function removeFromFav() { }

export default function PlayerProvider({ children }) {

    return (
        <PlayerContext.Provider
            value={{
                currentTrack,
                isPlaying,
                volume,
                favorites,
                playTrack,
                pauseTrack,
                nextTrack,
                prevTrack,
                setVolume,
                addToFav,
                removeFromFav
            }}
        >
            {children}
        </PlayerContext.Provider >
    );
}