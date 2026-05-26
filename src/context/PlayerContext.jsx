/* Этот файл ответсвтвен за работу глобальных переменных и функций
все из которых он содержит в себе. Мой совет не трогать здесь НИЧЕГО
но т.к. я знаю что вам прийдеться то оставляюю тут комменты*/

//Это импорт. Его не трогайте, но можете добавлять новые
import { createContext, useState } from "react";

//Вот эта сташная штука с припиской export костяк глоб. переменных
export const PlayerContext = createContext();
//Это переменные. Можете их менять при необходимости и добавлять новые
let currentTrack = null;
let isPlaying = false;
let volume = 1;
let favorites = [];

//Функции. Пока что заглушки. Так как же с переменными
function playTrack() { }
function pauseTrack() { }
function nextTrack() { }
function prevTrack() { }
function setVolume() { }
function addToFav() { }
function removeFromFav() { }

/*Это нужно что бы экспортровать этот элемент и всё что выше вместе с
ним. Вам тут нужно трогать только value*/
export default function PlayerProvider({ children }) {

    return (
        <PlayerContext.Provider
            value={{
            /*Это список экспортируемых переменных. То есть глобальных
            Если нужна новая переменная, то не забудьте внести сюда*/
                currentTrack,
                isPlaying,
                volume,
                favorites,
            /*Это список функций. Всё как с переменными, но их работу
            я не проверял*/
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