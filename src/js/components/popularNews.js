import tabs from './tabs';
import slider from './slider';

export default function popNews() {
    const doc = document;
    const popSection = doc.querySelector('.section-cards_popular');
    const navBtns = doc.querySelector('.section__nav-btns');
    const popNewsItems = [];
    const udmNews = doc.querySelector('.js-popular-news_udm');
    const rusNews = doc.querySelector('.js-popular-news_rus');
    const worldNews = doc.querySelector('.js-popular-news_world');
    popNewsItems.push(udmNews, rusNews, worldNews);

    function initNavBtns(btns, news) {
        slider(news.querySelector('.slider__row'), btns);
    }

    function tabChangeListener(e) {
        if (e.classList.contains('tab')) {
            popNewsItems.forEach((el) => {
                if (el.classList.contains('popular-news-group_active')) {
                    el.classList.remove('popular-news-group_active');
                }
            });

            switch(e.innerText) {
                case 'в Удмуртии':
                    udmNews.classList.add('popular-news-group_active');
                    initNavBtns(navBtns, udmNews);
                    break;
                case 'в России':
                    console.log('rus');
                    rusNews.classList.add('popular-news-group_active');
                    initNavBtns(navBtns, rusNews);
                    break;
                case 'в мире':
                    console.log('world');
                    worldNews.classList.add('popular-news-group_active');
                    initNavBtns(navBtns, worldNews);
                    break;
            }
        }
    }

    tabs(popSection.querySelector('.section__title'), tabChangeListener);
    initNavBtns(navBtns, udmNews);
}
