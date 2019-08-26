import tabs from './tabs';

const CONFIG = require('../config');

export default function allNews() {
    const doc = document;
    const w = window;

    const SECTION_CARDS_ALL_CLASS = 'section-cards_all';
    const SECTION_CARDS_CONTENT_LAST_CLASS = 'section-cards__content-last';
    const SECTION_CARDS_CONTENT_EDITOR_CHOICE_CLASS = 'section-cards__content-editor-choice';
    const SECTION_CARDS_CONTENT_POPULAR_CLASS = 'section-cards__content-popular';
    const SECTION_CARDS_CONTENT_DISCUSSED_CLASS = 'section-cards__content-discussed';

    const JS_ALL_NEWS_FULL_EXTENDED_CLASS = 'js-all-news-full-extended';
    const JS_ALL_NEWS_FULL_MIDDLE_CLASS = 'js-all-news-full-middle';
    const JS_ALL_NEWS_FULL_IMG_CLASS = 'js-all-news-full-img';
    const JS_ALL_NEWS_FULL_WITHOUT_IMG_CLASS = 'js-all-news-full-without-img';
    const JS_ALL_NEWS_SHORT_CLASS = 'js-all-news-short';

    const SECTION_CARDS_ACTIVE_CLASS = 'section-cards_active';

    const CARD_TITLE_CLASS = 'card__title';
    const CARD_DATE_CLASS = 'card__date';
    const CARD_IMG_CLASS = 'card__img';
    const SHOW_MORE_CLASS = 'show-more';

    const CARD_NEWS_LIST_ITEM_TITLE_CLASS = 'card-news__list-item-title';
    const CARD_NEWS_LIST_ITEM_DATE_CLASS = 'card-news__list-item-date';

    const SECTION_HEADER_ALL_NEWS_CLASS = 'section__header_all-news';

    const allNewsContainer = doc.querySelector(`.${SECTION_CARDS_ALL_CLASS}`);
    const lastNews = allNewsContainer.querySelector(`.${SECTION_CARDS_CONTENT_LAST_CLASS}`);
    const editorChoiceNews = allNewsContainer.querySelector(`.${SECTION_CARDS_CONTENT_EDITOR_CHOICE_CLASS}`);
    const popularNews = allNewsContainer.querySelector(`.${SECTION_CARDS_CONTENT_POPULAR_CLASS}`);
    const discussedNews = allNewsContainer.querySelector(`.${SECTION_CARDS_CONTENT_DISCUSSED_CLASS}`);
    const newsItems = [lastNews, editorChoiceNews, popularNews, discussedNews];
    let lastActiveSection = lastNews;

    const cardTemplates = {
        fullExtended: allNewsContainer.querySelector(`.${JS_ALL_NEWS_FULL_EXTENDED_CLASS}`).cloneNode(true),
        fullMiddle: allNewsContainer.querySelector(`.${JS_ALL_NEWS_FULL_MIDDLE_CLASS}`).cloneNode(true),
        fullImg: allNewsContainer.querySelector(`.${JS_ALL_NEWS_FULL_IMG_CLASS}`).cloneNode(true),
        fullWithoutImg: allNewsContainer.querySelector(`.${JS_ALL_NEWS_FULL_WITHOUT_IMG_CLASS}`).cloneNode(true),
        short: allNewsContainer.querySelector(`.${JS_ALL_NEWS_SHORT_CLASS}`).cloneNode(true)
    };


    function resetLastActive() {
        lastActiveSection.classList.remove(SECTION_CARDS_ACTIVE_CLASS);
    }

    function setActive(el) {
        el.classList.add(SECTION_CARDS_ACTIVE_CLASS);
        lastActiveSection = el;
    }

    function allNewsTabClickListener(e) {
        resetLastActive();
        switch (e.innerText) {
            case 'Последние':
                console.log('Последние');
                setActive(lastNews);
                break;
            case 'Выбор редактора':
                console.log('Выбор редактора');
                setActive(editorChoiceNews);
                break;
            case 'Популярные':
                console.log('Популярные');
                setActive(popularNews);
                break;
            case 'Обсуждаемые':
                console.log('Обсуждаемые');
                setActive(discussedNews);
                break;
            default:
                break;
        }
    }

    function addPosts(btn, data) {
        function addFullPost(con, cardTemplate, dataItem) {
            const newCard = cardTemplate.cloneNode(true);
            newCard.querySelector(`.${CARD_TITLE_CLASS}`).innerText = dataItem.title;
            newCard.querySelector(`.${CARD_DATE_CLASS}`).innerText = dataItem.date;
            newCard.querySelector(`.${CARD_IMG_CLASS}`).setAttribute('src', `./images/${dataItem.img}`);
            con.before(newCard);
        }

        function addShortPost(con, dataItem) {
            const newCard = cardTemplates.short.cloneNode(true);
            newCard.querySelector(`.${CARD_NEWS_LIST_ITEM_TITLE_CLASS}`).innerText = dataItem.title;
            newCard.querySelector(`.${CARD_NEWS_LIST_ITEM_DATE_CLASS}`).innerText = dataItem.date;
            con.before(newCard);
        }

        data.forEach((item, index) => {
            if (index === 0) {
                addFullPost(btn, cardTemplates.fullMiddle, item);
            } else {
                addFullPost(btn, cardTemplates.fullImg, item);
            }
            addShortPost(btn, item);
        });
    }

    function setShowMore() {
        newsItems.forEach((el) => {
            const showMoreBtn = el.querySelector(`.${SHOW_MORE_CLASS}`);
            showMoreBtn.addEventListener('click', (e) => {
                w.fetch(CONFIG.AJAX.POSTS)
                    .then(response => response.json())
                    .then((data) => {
                        addPosts(e.target.parentNode, data);
                    });
            });
        });
    }

    tabs(doc.querySelector(`.${SECTION_HEADER_ALL_NEWS_CLASS}`), allNewsTabClickListener);
    setShowMore();
}
