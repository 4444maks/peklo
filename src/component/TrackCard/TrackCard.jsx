//Я руки вырву тому кто классы писал
import './TrackCard.css'

//В функцию ложим props что б пользоваться им
export default function TrackCard(props) {
    return (
        <section className="trackcard">
            <p className="num">1</p>
            <img className='iii' src="https://upload.wikimedia.org/wikipedia/ru/d/d4/STAY_by_The_Kid_LAROI.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original" alt="" />
            <div className="name">
                {/* Выберу это как пример. Тут я беру props и
                с его помощью беру свойсвтво что мне нужно
                из Home. Props это объект, не забывайте*/}
                <h4 className='hhh4'>{props.title}</h4>
                <p className='num'>Justin Bieber</p>
            </div>
            <p className='num1'>Justice</p>
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
        </section>
    )
}
//На этом с вами прощаюсь. Это мой последний коммит в этой работе