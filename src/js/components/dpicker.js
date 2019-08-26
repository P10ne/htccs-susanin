import datepicker from 'js-datepicker';

export default function dpicker() {
    const doc = document;
    const w = window;

    const QS_MONTH_CLASS = 'qs-month';
    const DATEPICKER_ID = 'datepicker';

    function addCommaMonth() {
        const monthText = doc.querySelector(`.${QS_MONTH_CLASS}`);
        monthText.innerText += ',';
    }

    const dpContainer = doc.querySelector(`#${DATEPICKER_ID}`);
    const dp = datepicker(
        dpContainer,
        {
            startDay: 1,
            customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            onMonthChange: () => {
                addCommaMonth();
            },
            onSelect: (instance, date) => {
                w.alert(`Загружаем новости с ${date.getDate()}.${date.getMonth() + 1}`);
            }
        }
    );
    dpContainer.addEventListener('click', (ev) => {
        dp.show();
        ev.stopPropagation();
    });
    dp.hide();
    addCommaMonth();
}
