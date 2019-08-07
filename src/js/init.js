import cityChanging from './components/cityChanging';
import headerSearch from './components/headerSearch';
import fixedHeader from './components/fixedHeader';
import menuBurger from './components/headerFull';
import dpicker from './components/dpicker';
import login from './components/login';
import authValidate from './components/authValidate';
import regValidate from './components/regValidate';

export default function init() {
    const w = window;
    function initOnLoad() {
        cityChanging();
        headerSearch();
        fixedHeader();
        menuBurger();
        dpicker();
    }

    function initOnComponents() {
        dpicker();
        login();
        regValidate();
    }
    w.onload = function () {
        if (window.location.href === 'http://localhost:8080/components.html') {
            initOnComponents();
        } else if (window.location.href === 'http://localhost:8080') {
            initOnLoad();
        }
    };
}
