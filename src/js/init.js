import $ from 'jquery';
import cityChanging from './components/cityChanging';
import headerSearch from './components/headerSearch';
import fixedHeader from './components/fixedHeader';
import menuBurger from './components/headerFull';
import dpicker from './components/dpicker';
import loginForm from './components/loginForm';
import authValidate from './components/authValidate';
import regValidate from './components/regValidate';
import loginBtn from './components/loginBtn';
import initTopNewsTabs from './components/topNews';
import yamaps from './components/yamaps';
import slider from './components/slider';
import popNews from './components/popularNews';


export default function init() {
    const w = window;
    const doc = document;
    let loginF = null;

    function initSliders() {
        const sliderSections = doc.querySelectorAll('.js-section-slider');
        [].slice.call(sliderSections).forEach((el) => {
            const sliderBtnsContainer = el.querySelector('.section__nav-btns');
            const sliderRowContainer = el.querySelector('.slider__row');
            slider(sliderRowContainer, sliderBtnsContainer);
        });
    }

    function initOnIndex() {
        cityChanging();
        headerSearch();
        fixedHeader();
        menuBurger();
        loginBtn(loginF);
        initTopNewsTabs();
        initSliders();
        popNews();
    }

    function initOnComponents() {
        dpicker();
    }

    function initCommon() {
        loginF = loginForm();
        authValidate();
        regValidate();
        yamaps();
    }

    function initNews() {
        cityChanging();
        headerSearch();
        fixedHeader();
        menuBurger();
        loginBtn(loginF);
        dpicker();
    }

    w.onload = function () {
        initCommon();
        switch (w.location.pathname) {
            case '/components.html':
                initOnComponents();
                break;
            case '/news.html':
                initNews();
                break;
            case '/':
                initOnIndex();
                break;
            default:
                break;
        }
    };
}
