import cityChanging from './components/cityChanging';
import headerSearch from './components/headerSearch';
import fixedHeader from './components/fixedHeader';
import menuBurger from './components/headerFull';

export default function init() {
    const w = window;
    function initOnLoad() {
        cityChanging();
        headerSearch();
        fixedHeader();
        menuBurger();
    }
    w.onload = function () {
        initOnLoad();
    };
}
