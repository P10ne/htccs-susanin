import tabs from './tabs';
import debounce from '../common';

export default function loginForm() {
    const doc = document;
    const w = window;
    const login = doc.querySelector('.login-form');
    const tabsContainer = login.querySelector('.tabs-container');
    const authForm = login.querySelector('.login-form-inputs_auth-form');
    const regForm = login.querySelector('.login-form-inputs_reg-form');
    const closeFormBtn = login.querySelector('.close-popup');
    const messagesContainer = login.querySelector('.login-form-message__text');
    const headerRowContainer = doc.querySelector('.header-row-container');
    const lf = {};

    lf.show = () => {
        login.classList.add('login-form_opened');
    };

    function setXcoord(xCoord) {
        login.style.right = `${xCoord}px`;
    }

    lf.setRightPos = () => {
        const x = headerRowContainer.offsetLeft;
        setXcoord(x);
    };

    function clearMessages() {
        messagesContainer.innerHTML = '';
    }

    lf.close = () => {
        login.classList.remove('login-form_opened');
        clearMessages();
    };

    function changeForms(toOpen, toClose) {
        toClose.style.display = 'none';
        toOpen.style.display = 'block';
        clearMessages();
    }

    function tabChangeListener(tab) {
        switch (tab.innerText) {
            case 'Вход':
                changeForms(authForm, regForm);
                break;
            case 'Регистрация':
                changeForms(regForm, authForm);
                break;
            default:
                break;
        }
    }

    tabs(tabsContainer, tabChangeListener);

    closeFormBtn.addEventListener('click', () => {
        lf.close();
    });

    w.addEventListener('resize', debounce(() => {
        lf.setRightPos();
    }, 300, false), false);

    return lf;
}
