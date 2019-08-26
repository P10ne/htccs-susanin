import tabs from './tabs';
import debounce from '../common';

export default function loginForm() {
    const doc = document;
    const w = window;

    const LOGIN_FORM_CLASS = 'login-form';
    const LOGIN_FORM_OPENED_CLASS = 'login-form_opened';
    const TABS_CONTAINER_CLASS = 'tabs-container';
    const LOGIN_FORM_INPUTS_AUTH_FORM_CLASS = 'login-form-inputs_auth-form';
    const LOGIN_FORM_INPUTS_REG_FORM_CLASS = 'login-form-inputs_reg-form';
    const CLOSE_POPUP_CLASS = 'close-popup';
    const LOGIN_FORM_MESSAGE_TEXT_CLASS = 'login-form-message__text';
    const HEADER_ROW_CONTAINER_CLASS = 'header-row-container';

    const login = doc.querySelector(`.${LOGIN_FORM_CLASS}`);
    const tabsContainer = login.querySelector(`.${TABS_CONTAINER_CLASS}`);
    const authForm = login.querySelector(`.${LOGIN_FORM_INPUTS_AUTH_FORM_CLASS}`);
    const regForm = login.querySelector(`.${LOGIN_FORM_INPUTS_REG_FORM_CLASS}`);
    const closeFormBtn = login.querySelector(`.${CLOSE_POPUP_CLASS}`);
    const messagesContainer = login.querySelector(`.${LOGIN_FORM_MESSAGE_TEXT_CLASS}`);
    const headerRowContainer = doc.querySelector(`.${HEADER_ROW_CONTAINER_CLASS}`);
    const resLoginForm = {};

    resLoginForm.show = () => {
        login.classList.add(LOGIN_FORM_OPENED_CLASS);
    };

    function setXcoord(xCoord) {
        login.style.right = `${xCoord}px`;
    }

    resLoginForm.setRightPos = () => {
        const x = headerRowContainer.offsetLeft;
        setXcoord(x);
    };

    function clearMessages() {
        messagesContainer.innerHTML = '';
    }

    resLoginForm.close = () => {
        login.classList.remove(LOGIN_FORM_OPENED_CLASS);
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
        resLoginForm.close();
    });

    w.addEventListener('resize', debounce(() => {
        resLoginForm.setRightPos();
    }, 300, false), false);

    return resLoginForm;
}
