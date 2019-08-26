import tabs from './tabs';
import slider from './slider';

export default function popNews() {
    const doc = document;

    const POPULAR_NEWS_GROUP_ACTIVE_CLASS = 'popular-news-group_active';
    const SECTION_CARDS_POPULAR_CLASS = 'section-cards_popular';
    const SECTION_NAV_BTNS_CLASS = 'section__nav-btns';
    const JS_POPULAR_NEWS_UDM_CLASS = 'js-popular-news_udm';
    const JS_POPULAR_NEWS_RUS_CLASS = 'js-popular-news_rus';
    const JS_POPULAR_NEWS_WORLD_CLASS = 'js-popular-news_world';
    const SLIDER_ROW_CLASS = 'slider__row';
    const TAB_CLASS = 'tab';
    const SECTION_TITLE_CLASS = 'section__title';

    const popSection = doc.querySelector(`.${SECTION_CARDS_POPULAR_CLASS}`);
    const navBtns = doc.querySelector(`.${SECTION_NAV_BTNS_CLASS}`);
    const popNewsItems = [];
    const udmNews = doc.querySelector(`.${JS_POPULAR_NEWS_UDM_CLASS}`);
    const rusNews = doc.querySelector(`.${JS_POPULAR_NEWS_RUS_CLASS}`);
    const worldNews = doc.querySelector(`.${JS_POPULAR_NEWS_WORLD_CLASS}`);

    popNewsItems.push(udmNews, rusNews, worldNews);

    function initNavBtns(btns, news) {
        slider(news.querySelector(`.${SLIDER_ROW_CLASS}`), btns);
    }

    function tabChangeListener(e) {
        if (e.classList.contains(TAB_CLASS)) {
            popNewsItems.forEach((el) => {
                if (el.classList.contains(POPULAR_NEWS_GROUP_ACTIVE_CLASS)) {
                    el.classList.remove(POPULAR_NEWS_GROUP_ACTIVE_CLASS);
                }
            });

            switch (e.innerText) {
                case 'в Удмуртии':
                    udmNews.classList.add(POPULAR_NEWS_GROUP_ACTIVE_CLASS);
                    initNavBtns(navBtns, udmNews);
                    break;
                case 'в России':
                    rusNews.classList.add(POPULAR_NEWS_GROUP_ACTIVE_CLASS);
                    initNavBtns(navBtns, rusNews);
                    break;
                case 'в мире':
                    worldNews.classList.add(POPULAR_NEWS_GROUP_ACTIVE_CLASS);
                    initNavBtns(navBtns, worldNews);
                    break;
                default:
                    break;
            }
        }
    }

    tabs(popSection.querySelector(`.${SECTION_TITLE_CLASS}`), tabChangeListener);
    initNavBtns(navBtns, udmNews);
}
