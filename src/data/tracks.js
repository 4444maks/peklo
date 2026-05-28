/*Это вместо БД. Обычный массив объектов в котором все песни.
Как что-то достать сами разберетесь, а добавляйте путем комирования
уже существующих объектов. Каждый объекст - уникальная песня.
Те песни что уже есть можете отредактировать что бы это не были
заглушки*/
let tracks = [
    {id: 0, title: "Name1", album: "Album1", cover: false, src: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3"},
    {id: 2, title: "Name3", album: "Album3", cover: false, src: "https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3"},
    {id: 5, title: "Name6", album: "Album6", cover: false, src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3"},
]
export default tracks