import $ from 'jquery';
import tabs from './tabs';
const doc = document;
const w = window;

export default function initTopNewsTabs() {
    const topNewsItems = [];
    const udmNews = doc.querySelector('.top-news__item_udm');
    const rusNews = doc.querySelector('.top-news__item_rus');
    const worldNews = doc.querySelector('.top-news__item_world');
    const topNewsItemFullTemplate = doc.querySelector('.top-news__item .top-news__column-item_full');
    const topNewsItemShortTemplate = doc.querySelector('.top-news__item .top-news__column-item_short');

    topNewsItems.push(udmNews, rusNews, worldNews);

    function topNewsTabClickListener(e) {
        topNewsItems.forEach((el) => {
            if (el.classList.contains('top-news__item_active')) {
                el.classList.remove('top-news__item_active');
            }
        });

        switch(e.innerText) {
            case 'Удмуртия':
                udmNews.classList.add('top-news__item_active');
                break;
            case 'Россия':
                rusNews.classList.add('top-news__item_active');
                break;
            case 'Мир':
                worldNews.classList.add('top-news__item_active');
                break;
            case 'Все новости':
                topNewsItems.forEach((el) => {
                    el.classList.add('top-news__item_active');
                });
        }
    }

    function addPosts(posts, targetBtn) {
        function addFullPost(data) {
            const newsItemFull = topNewsItemFullTemplate.cloneNode(true);
            newsItemFull.firstChild.classList.remove('card_top_important');
            newsItemFull.querySelector('.card__img').setAttribute('src', `./images/${data.img}`);
            newsItemFull.querySelector('.card__title').innerText = data.title;
            newsItemFull.querySelector('.card__date').innerText = data.date;

            const jqTargetBtn = $(targetBtn);
            const newsItemFullContainer = jqTargetBtn.closest('.top-news__item').find('.top-news__column-list')[0];
            newsItemFullContainer.append(newsItemFull);
        }

        function addShortPost(data) {
            const newsItemShort = topNewsItemShortTemplate.cloneNode(true);
            newsItemShort.firstChild.classList.remove('card_top_important');
            newsItemShort.querySelector('.card__title').innerText = data.title;
            newsItemShort.querySelector('.card__date').innerText = data.date;

            const jqTargetBtn = $(targetBtn);
            const newsItemFullContainer = jqTargetBtn.closest('.top-news__item').find('.top-news__column-list')[1];
            newsItemFullContainer.append(newsItemShort);
        }

        addFullPost(posts[0]);
        addFullPost(posts[1]);
        addShortPost(posts[2]);
        addShortPost(posts[3]);
        addShortPost(posts[4]);
        addShortPost(posts[5]);
    }




    tabs(doc.querySelector('.section-cards_top-news .section__title'), topNewsTabClickListener);
    const showMoreBtns = doc.querySelectorAll('.top-news__item .show-more');
    [].slice.call(showMoreBtns).forEach((btn) => {
        btn.addEventListener('click', (e) => {
            w.fetch('http://localhost:3000/posts')
                .then(response => response.json())
                .then(posts => addPosts(posts, e.target));
        });
    });
}
