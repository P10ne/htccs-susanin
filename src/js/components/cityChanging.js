export default function CityChanging() {
    const doc = document;
    const citiesContainer = doc.querySelector('.city-change-container');
    function getCities() {
        return ['Ижевск', 'Нижний Новгород'];
    }
    const citiesList = getCities();
    const city = doc.querySelector('.city');
    const city__value = doc.querySelector('.city__value');
    function initCitiesContainer(citiesCont, cities) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < cities.length; i++) {
            const cityLi = doc.createElement('li');
            cityLi.className = 'city-change__el';
            cityLi.innerHTML = cities[i];
            citiesCont.appendChild(cityLi);
        }
    }
    function setCity(newCity) {
        city__value.innerText = newCity;
    }
    const city__svg = doc.querySelector('.city__svg');
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
