export default function loginBtn(form) {
    const doc = document;
    const loginForm = form;

    function initLoginBtns() {
        doc.querySelectorAll('.js-login').forEach((el) => {
            el.addEventListener('click', () => {
                loginForm.setRightPos();
                loginForm.show();
            });
        });
    }

    initLoginBtns();
}
