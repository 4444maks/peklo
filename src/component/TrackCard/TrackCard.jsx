//Я руки вырву тому кто классы писал
import './TrackCard.css'
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
//В функцию ложим props что б пользоваться им
export default function TrackCard(props) {
    const { selectTrack } = useContext(PlayerContext);
    return (
        
        <section className="trackcard">
            <p className="num">1</p>
<img className='iii' src="https://cdn-icons-png.flaticon.com/512/727/727245.png" alt="" />            <div className="name">
                {/* Выберу это как пример. Тут я беру props и
                с его помощью беру свойсвтво что мне нужно
                из Home. Props это объект, не забывайте*/}
                <h4 className='hhh4'>{props.title}</h4>
                <p className='num'>{props.album}</p>
            </div>
 <p className='num1'>{props.title}</p>
            <p className='num12'>2:37</p>
            {/* Тут я объясню что с каверами делать. Как я понял
            у каверов должна быть приписка "кавер", но в объект
            проще засунуть true/false и потом отобразить правильно
            уже здесь. Работает всё на тернарном операторе (if/else
            в одну строку). Если свойсвтво cover переданное из
            Home совпадает с true, то написать "cover", иначе
            не писать ничего. Всё */}
            <p className="isCover">
                {props.cover===true?"Cover":""}
            </p>
            <button onClick={() => selectTrack({
    id: props.id,
    title: props.title,
    album: props.album,
    cover: props.cover,
    src: props.src
})}>
    ▶ Play
</button>
        </section>
    )
}
//На этом с вами прощаюсь. Это мой последний коммит в этой работе