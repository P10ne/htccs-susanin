import '../css/index.pcss';

const debounce = (func, wait, immediate) => {
    var timeout;
    return () => {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

window.addEventListener('load', function() {
    initCityChanging();
    initHeaderSearch();
});



function initCityChanging() {
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

function initHeaderSearch() {
    let
        logo = document.querySelector('.logo');
    initSearch(document.querySelector('.header .js-search-header'));
    initSearch(document.querySelector('.js-header-fixed .js-search-header'));
    initSearch(document.querySelector('.js-search-header_min'));

    function initSearch(searchBlock) {
        let
            searchFieldForm = searchBlock.querySelector('.search-field'),
            searchIsOpen = false;

        searchBlock.addEventListener('click', displaySearch);

        document.addEventListener('click', function(e) {
            if(searchIsOpen && e.target.className.indexOf('search-') == -1) {
                searchFieldForm.style.display = 'none';
                searchIsOpen = false;
            }
        });

        function displaySearch(e) {
            searchFieldForm.style.width = calcSearchFormWidth() + 'px';
            searchFieldForm.style.display = 'block';
            searchIsOpen = true;
        }

        function calcSearchFormWidth() {
            return searchBlock.offsetLeft + searchBlock.clientWidth - logo.offsetLeft;
        }

        window.addEventListener('resize', debounce(function(e) {
            searchFieldForm.style.width = calcSearchFormWidth() + 'px';
        }, 300, false),false);
    }

};
