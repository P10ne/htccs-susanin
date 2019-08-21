import datepicker from 'js-datepicker';

export default function dpicker() {
    const doc = document;

    function addCommaMonth() {
        let monthText = doc.querySelector('.qs-month');
        monthText.innerText += ',';
    }

    const dpContainer = doc.querySelector('#datepicker');
    const dp = datepicker(
        dpContainer,
        {
            startDay: 1,
            customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            onMonthChange: () => {
                addCommaMonth();
            }
        }
    );
    dpContainer.addEventListener('click', () => {
        dp.show();
    });
    dp.hide();
    addCommaMonth();
}
