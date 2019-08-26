export default function CityChanging() {
    const doc = document;

    const CITY_CHANGE_CONTAINER_CLASS = 'city-change-container';
    const CITY_CLASS = 'city';
    const CITY_VALUE_CLASS = 'city__value';
    const CITY_CHANGE_EL_CLASS = 'city-change__el';
    const CITY_SVG_CLASS = 'city__svg';

    const citiesContainer = doc.querySelector(`.${CITY_CHANGE_CONTAINER_CLASS}`);
    function getCities() {
        return ['Ижевск', 'Нижний Новгород'];
    }
    const citiesList = getCities();
    const city = doc.querySelector(`.${CITY_CLASS}`);
    const city__value = doc.querySelector(`.${CITY_VALUE_CLASS}`);

    function initCitiesContainer(citiesCont, cities) {
        cities.forEach((item) => {
            const cityLi = doc.createElement('li');
            cityLi.className = CITY_CHANGE_EL_CLASS;
            cityLi.innerHTML = item;
            citiesCont.appendChild(cityLi);
        });
    }
    function setCity(newCity) {
        city__value.innerText = newCity;
    }
    const city__svg = doc.querySelector(`.${CITY_SVG_CLASS}`);
    let citiesContainerIsOpened = false;
    initCitiesContainer(citiesContainer, citiesList);
    citiesContainer.addEventListener('click', (e) => {
        citiesContainer.style.display = 'none';
        citiesContainerIsOpened = false;
        if (city__value.innerText !== e.target.innerText) {
            setCity(e.target.innerText);
        }
        e.stopPropagation();
    });

    city.addEventListener('click', () => {
        citiesContainer.style.display = 'block';
        citiesContainerIsOpened = true;
    });

    doc.addEventListener('click', (e) => {
        // eslint-disable-next-line max-len
        if (e.target !== city__svg && e.target !== city__value && e.target !== city && citiesContainerIsOpened) {
            citiesContainer.style.display = 'none';
            citiesContainerIsOpened = false;
        }
    });
}
