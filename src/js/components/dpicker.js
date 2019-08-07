import datepicker from "js-datepicker";

export default function dpicker() {
    function init() {
        const picker = datepicker(document.getElementById('datepicker'), {
            startDay: 1,
            customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            alwaysShow: true
        });
    }
    init();
}
