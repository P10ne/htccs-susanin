import ymaps from 'ymaps';
const CONFIG = require('../config');

export default function yamaps() {
    ymaps
        .load(CONFIG.YA_MAPS_LOAD_URL)
        .then((maps) => {
            const map = new maps.Map('map__img-container', {
                center: [56.84465358922888, 53.199577331542976],
                zoom: 14,
                controls: []
            }, {
                suppressMapOpenBlock: true
            });
        })
        .catch(error => console.log('Failed to load Yandex Maps', error));
}
