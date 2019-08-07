import datepicker from 'js-datepicker';

export default function dpicker() {
    const doc = document;

    function addCommaMonth() {
        let monthText = doc.querySelector('.qs-month');
        monthText.innerText += ',';
    }

    const dp = datepicker(
        document.querySelector('.datepicker'),
        {
            startDay: 1,
            customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            alwaysShow: true,
            onMonthChange: () => {
                addCommaMonth();
            }
        }
    );
    addCommaMonth();
}
