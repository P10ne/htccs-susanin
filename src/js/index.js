import '../css/index.pcss';

/* eslint no-console: "off" */
console.log('hello world');

window.onload = function() {
    var cityChanger = (function() {
        let cities = ["Ижевск", "Нижний Новгород"];
        let cityField = document.querySelector(".city");
        let citiesList = document.querySelector(".city-change-container");
        cityField.addEventListener('click', function() {
            for(let i=0; i<cities.length; i++) {
                let cityLi = document.createElement("li");
                cityLi.className = "city-change__el";
                cityLi.innerHTML = cities[i];
                citiesList.appendChild(cityLi);
            }
        });
        citiesList.addEventListener("click", function(e) {
            cityField.innerText = e.target.innerText;
        });
    });
    cityChanger();
}


