import ymaps from 'ymaps';

export default function yamaps() {
    ymaps
        .load('https://api-maps.yandex.ru/2.1/?apikey=144d69a4-43d8-405d-8552-78419ca589c6&lang=ru_RU')
        .then(maps => {
            const map = new maps.Map('map__img-container', {
                center: [56.84465358922888, 53.199577331542976],
                zoom: 14,
                controls: []
            }, {
                suppressMapOpenBlock: true
                }
            );
        })
        .catch(error => console.log('Failed to load Yandex Maps', error));
}
