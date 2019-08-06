export default function headerFool() {
    const doc = document;
    const headerBurger = doc.querySelector('header .menu-burger');
    const header = doc.querySelector('header');
    const fixedBurger = doc.querySelector('.js-header-fixed .menu-burger');
    const fixedHeader = doc.querySelector('.js-header-fixed');
    const headerF = doc.querySelector('.header-row-nav_full');
    const closeBurger = doc.querySelector('.header_full .menu-burger');

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
