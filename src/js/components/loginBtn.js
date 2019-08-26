export default function loginBtn(form) {
    const doc = document;
    const loginForm = form;

    const JS_LOGIN_CLASS = 'js-login';

    function initLoginBtns() {
        doc.querySelectorAll(`.${JS_LOGIN_CLASS}`).forEach((el) => {
            el.addEventListener('click', () => {
                loginForm.setRightPos();
                loginForm.show();
            });
        });
    }

    initLoginBtns();
}
