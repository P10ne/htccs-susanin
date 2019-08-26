import $ from 'jquery';
import tabs from './tabs';

const CONFIG = require('../config');

const doc = document;
const w = window;

export default function initTopNewsTabs() {
    const TOP_NEWS_ITEM_CLASS = 'top-news__item';
    const TOP_NEWS_ITEM_ACTIVE_CLASS = 'top-news__item_active';
    const TOP_NEWS_UDM_CLASS = 'top-news__item_udm';
    const TOP_NEWS_ITEM_RUS_CLASS = 'top-news__item_rus';
    const TOP_NEWS_ITEM_WORLD_CLASS = 'top-news__item_world';
    const TOP_NEWS_COLUMN_LIST_CLASS = 'top-news__column-list';
    const TOP_NEWS_COLUMN_ITEM_FULL_CLASS = 'top-news__column-item_full';
    const TOP_NEWS_COLUMN_ITEM_SHORT_CLASS = 'top-news__column-item_short';
    const D_N_CLASS = 'd-n';
    const CARD_TOP_IMPORTANT_CLASS = 'card_top_important';
    const SECTION_CARDS_TOP_NEWS_CLASS = 'section-cards_top-news';
    const SECTION_TITLE_CLASS = 'section__title';
    const SHOW_MORE_CLASS = 'show-more';

    const CARD_DATE_CLASS = 'card__date';
    const CARD_TITLE_CLASS = 'card__title';
    const CARD_IMG_CLASS = 'card__img';

    const topNewsItems = [];
    const udmNews = doc.querySelector(`.${TOP_NEWS_UDM_CLASS}`);
    const rusNews = doc.querySelector(`.${TOP_NEWS_ITEM_RUS_CLASS}`);
    const worldNews = doc.querySelector(`.${TOP_NEWS_ITEM_WORLD_CLASS}`);
    const topNewsItemFullTemplate = doc.querySelector(`.${TOP_NEWS_ITEM_CLASS} .${TOP_NEWS_COLUMN_ITEM_FULL_CLASS}`);
    const topNewsItemFullHiddenTemplate = doc.querySelector(`.${TOP_NEWS_ITEM_CLASS} .${TOP_NEWS_COLUMN_ITEM_FULL_CLASS}.${D_N_CLASS}`);
    const topNewsItemShortTemplate = doc.querySelector(`.${TOP_NEWS_ITEM_CLASS} .${TOP_NEWS_COLUMN_ITEM_SHORT_CLASS}`);
    const topNewsItemShortHiddenTemplate = doc.querySelector(`.${TOP_NEWS_ITEM_CLASS} .${TOP_NEWS_COLUMN_ITEM_SHORT_CLASS}.${D_N_CLASS}`);

    topNewsItems.push(udmNews, rusNews, worldNews);

    function topNewsTabClickListener(e) {
        topNewsItems.forEach((el) => {
            if (el.classList.contains(TOP_NEWS_ITEM_ACTIVE_CLASS)) {
                el.classList.remove(TOP_NEWS_ITEM_ACTIVE_CLASS);
            }
        });

        switch(e.innerText) {
            case 'Удмуртия':
                udmNews.classList.add(TOP_NEWS_ITEM_ACTIVE_CLASS);
                break;
            case 'Россия':
                rusNews.classList.add(TOP_NEWS_ITEM_ACTIVE_CLASS);
                break;
            case 'Мир':
                worldNews.classList.add(TOP_NEWS_ITEM_ACTIVE_CLASS);
                break;
            case 'Все новости':
                topNewsItems.forEach((el) => {
                    el.classList.add(TOP_NEWS_ITEM_ACTIVE_CLASS);
                });
        }
    }

    function addPosts(posts, targetBtn) {

        function addFullPost(data, hidden = false) {
            const newsItemFull = hidden ?
                topNewsItemFullHiddenTemplate.cloneNode(true) :
                topNewsItemFullTemplate.cloneNode(true);
            newsItemFull.firstChild.classList.remove(CARD_TOP_IMPORTANT_CLASS);
            newsItemFull.querySelector(`.${CARD_IMG_CLASS}`).setAttribute('src', `./images/${data.img}`);
            newsItemFull.querySelector(`.${CARD_TITLE_CLASS}`).innerText = data.title;
            newsItemFull.querySelector(`.${CARD_DATE_CLASS}`).innerText = data.date;

            const jqTargetBtn = $(targetBtn);
            const newsItemFullContainer = jqTargetBtn.closest(`.${TOP_NEWS_ITEM_CLASS}`).find(`.${TOP_NEWS_COLUMN_LIST_CLASS}`)[0];
            newsItemFullContainer.append(newsItemFull);
        }

        function addShortPost(data, hidden = false) {
            const newsItemShort = hidden ?
                topNewsItemShortHiddenTemplate.cloneNode(true) :
                topNewsItemShortTemplate.cloneNode(true);
            newsItemShort.firstChild.classList.remove(CARD_TOP_IMPORTANT_CLASS);
            newsItemShort.querySelector(`.${CARD_TITLE_CLASS}`).innerHTML = `<span class='${CARD_DATE_CLASS}'>${data.date}</span> ${data.title}`;

            const jqTargetBtn = $(targetBtn);
            const newsItemFullContainer = jqTargetBtn.closest(`.${TOP_NEWS_ITEM_CLASS}`).find(`.${TOP_NEWS_COLUMN_LIST_CLASS}`)[1];
            newsItemFullContainer.append(newsItemShort);
        }

        let cardNumber = 0;
        posts.forEach((item, index) => {
            cardNumber = index % 8;
            if (cardNumber < 2) {
                addFullPost(item);
            } else if (cardNumber === 2) {
                addFullPost(item, true);
            } else if (cardNumber > 2) {
                if (cardNumber < 7) {
                    addShortPost(item);
                } else if (cardNumber === 7) {
                    addShortPost(item, true);
                }
            }
        });
    }




    tabs(doc.querySelector(`.${SECTION_CARDS_TOP_NEWS_CLASS} .${SECTION_TITLE_CLASS}`), topNewsTabClickListener);
    const showMoreBtns = doc.querySelectorAll(`.${TOP_NEWS_ITEM_CLASS} .${SHOW_MORE_CLASS}`);
    [].slice.call(showMoreBtns).forEach((btn) => {
        btn.addEventListener('click', (e) => {
            w.fetch(CONFIG.AJAX.POSTS)
                .then(response => response.json())
                .then(posts => addPosts(posts, e.target))
                .catch(() => { e.target.innerText = 'Ошибка'; });
        });
    });
}
