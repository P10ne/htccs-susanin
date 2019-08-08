export default function loginBtn(form) {
    const doc = document;
    const loginForm = form;
    const headerRowContainer = doc.querySelector('.header-row-container');

    function initLoginBtns() {
        doc.querySelectorAll('.js-login').forEach((el) => {
            el.addEventListener('click', () => {
                console.log('click');
                loginForm.setXcoord(headerRowContainer.offsetLeft + headerRowContainer.clientWidth);
                loginForm.show();
            });
        });
    }

    initLoginBtns();
}
