import $ from 'jquery';
import datepicker from 'js-datepicker';
import cityChanging from './components/cityChanging';
import headerSearch from './components/headerSearch';
import fixedHeader from './components/fixedHeader';
import menuBurger from './components/headerFull';
import dpicker from './components/dpicker';

export default function init() {
    const w = window;
    function initOnLoad() {
        cityChanging();
        headerSearch();
        fixedHeader();
        menuBurger();
        dpicker();
    }
    w.onload = function () {
        initOnLoad();
    };
}
