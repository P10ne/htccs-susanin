import cityChanging from './components/cityChanging';
import headerSearch from './components/headerSearch';
import fixedHeader from './components/fixedHeader';
import menuBurger from './components/headerFull';
import dpicker from './components/dpicker';
import loginForm from './components/loginForm';
import authValidate from './components/authValidate';
import regValidate from './components/regValidate';
import loginBtn from './components/loginBtn';

export default function init() {
    const w = window;
    const doc = document;
    let loginF = null;

    function initOnIndex() {
        cityChanging();
        headerSearch();
        fixedHeader();
        menuBurger();
        loginBtn(loginF);
    }

    function initOnComponents() {
        dpicker();
    }

    function initCommon() {
        loginF = loginForm();
        authValidate();
        regValidate();
    }

    w.onload = function () {
        initCommon();
        switch (w.location.pathname) {
            case '/components.html':
                initOnComponents();
                break;
            case '/':
                initOnIndex();
                break;
            default:
                break;
        }
    };
}
