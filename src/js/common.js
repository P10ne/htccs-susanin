// Предотвращение частого срабатывания функции
export default function debounce(func, wait, immediate) {
    let timeout;
    return () => {
        const context = this;
        // eslint-disable-next-line no-undef,prefer-rest-params
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}