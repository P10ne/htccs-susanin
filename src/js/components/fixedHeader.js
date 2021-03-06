export default function fixedHeader() {
    const doc = document;
    const w = window;

    const JS_HEADER_FIXED_CLASS = 'js-header-fixed';

    const headerHeight = doc.getElementsByTagName('header')[0].clientHeight;
    const fixedHeaderEl = doc.querySelector(`.${JS_HEADER_FIXED_CLASS}`);
    let prevYOffset = 0;
    let fixedHeaderIsOpen = false;

    function fixedOnScroll() {
        // eslint-disable-next-line max-len
        if (!fixedHeaderIsOpen && prevYOffset > w.pageYOffset && window.pageYOffset > headerHeight) {
            fixedHeaderEl.style.top = 0;
            fixedHeaderIsOpen = true;
            // eslint-disable-next-line max-len
        } else if (fixedHeaderIsOpen & prevYOffset < w.pageYOffset || w.pageYOffset < headerHeight) {
            fixedHeaderEl.style.top = '-90px';
            fixedHeaderIsOpen = false;
        }
        prevYOffset = w.pageYOffset;
    }

    w.addEventListener('scroll', fixedOnScroll);
}
