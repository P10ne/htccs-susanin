import '../css/index.pcss';

window.onload = function() {
    cityChanging();
}

function cityChanging() {
    let citiesContainer = document.querySelector('.city-change-container'),
        cities = getCities(),
        city = document.querySelector('.city'),
        city__value = document.querySelector('.city__value'),
        city__svg = document.querySelector('.city__svg'),
        citiesContainerIsOpened = false;

    initCitiesContainer(citiesContainer, cities);

    citiesContainer.addEventListener('click', function(e) {
        citiesContainer.style.display = 'none';
        citiesContainerIsOpened = false;
        if(city__value.innerText != e.target.innerText) {
            setCity(e.target.innerText);
        }
        e.stopPropagation();
    });

    city.addEventListener('click', function(e) {
        citiesContainer.style.display = 'block';
        citiesContainerIsOpened = true;
    });

    document.addEventListener('click', function(e) {
        if(citiesContainerIsOpened && e.target != city && e.target != city__value && e.target != city__svg) {
            citiesContainer.style.display = 'none';
            citiesContainerIsOpened = false;
        }
    });

    function getCities() {
        return ["Ижевск", "Нижний Новгород"];
    }

    function initCitiesContainer(citiesContainer, cities) {
        for(let i=0; i<cities.length; i++) {
            let cityLi = document.createElement("li");
            cityLi.className = "city-change__el";
            cityLi.innerHTML = cities[i];
            citiesContainer.appendChild(cityLi);
        }
    }

    function setCity(newCity) {
        city__value.innerText = newCity;
    }
}


