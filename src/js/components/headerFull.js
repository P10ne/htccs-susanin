export default function headerFool() {
    const doc = document;

    const HEADER_CLASS = 'header';
    const MENU_BURGER_CLASS = 'menu-burger';
    const JS_HEADER_FIXED_CLASS = 'js-header-fixed';
    const HEADER_ROW_NAV_FULL_CLASS = 'header-row-nav_full';
    const HEADER_FULL_CLASS = 'header_full';

    const headerBurger = doc.querySelector(`.${HEADER_CLASS} .${MENU_BURGER_CLASS}`);
    const header = doc.querySelector(`.${HEADER_CLASS}`);
    const fixedBurger = doc.querySelector(`.${JS_HEADER_FIXED_CLASS} .${MENU_BURGER_CLASS}`);
    const fixedHeader = doc.querySelector(`.${JS_HEADER_FIXED_CLASS}`);
    const headerF = doc.querySelector(`.${HEADER_ROW_NAV_FULL_CLASS}`);
    const closeBurger = doc.querySelector(`.${HEADER_FULL_CLASS} .${MENU_BURGER_CLASS}`);

    function setPosition(pos, top) {
        headerF.style.position = pos;
        headerF.style.top = `${top}px`;
        headerF.style.visibility = 'visible';
        headerF.style.opacity = 1;
    }

    function openHeaderFull(e) {
        if (headerBurger.contains(e.target) || fixedBurger.contains(e.target)) {
            switch (e.currentTarget) {
                case header:
                    console.log('header');
                    setPosition('absolute', headerBurger.offsetTop);
                    break;

                case fixedHeader:
                    console.log('fixed');
                    setPosition('fixed', fixedBurger.offsetTop);
                    break;
                default:
                    console.log('default');
                    break;
            }
        }
    }

    function closeHeaderFull() {
        headerF.style.opacity = 0;
        setTimeout(() => {
            headerF.style.visibility = 'hidden';
        }, 400);
    }

    function setListener(h) {
        h.addEventListener('click', openHeaderFull);
    }

    setListener(header);
    setListener(fixedHeader);

    closeBurger.addEventListener('click', closeHeaderFull);
}
