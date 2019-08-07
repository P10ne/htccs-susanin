export default function login() {
    const doc = document;
    const login = doc.querySelector('.login-form');
    const tabsContainer = login.querySelector('.tabs-container');
    const authForm = login.querySelector('.login-form-inputs_auth-form');
    const regForm = login.querySelector('.login-form-inputs_reg-form');
    const tabs = tabsContainer.childNodes;

    function changeForms(toOpen, toClose) {
        toClose.style.display = 'none';
        toOpen.style.display = 'block';
    }

    function changeTabs(toActiveTab, tabsMas) {
        tabsMas.forEach((el) => {
            if (el.classList.contains('tab_active')) {
                el.classList.remove('tab_active');
            }
        });
        toActiveTab.classList.add('tab_active');
    }

    function formChangeListener(e) {
        switch (e.target.innerText) {
            case 'Вход':
                changeForms(authForm, regForm);
                changeTabs(e.target, tabs);
                break;
            case 'Регистрация':
                changeForms(regForm, authForm);
                changeTabs(e.target, tabs);
                break;
            default:
                break;
        }
    }


    tabsContainer.addEventListener('click', formChangeListener);
}
