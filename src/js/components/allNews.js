import tabs from './tabs';

export default function allNews() {
    const doc = document;
    const w = window;
    const allNewsContainer = doc.querySelector('.section-cards_all');
    const lastNews = allNewsContainer.querySelector('.section-cards__content-last');
    const editorChoiceNews = allNewsContainer.querySelector('.section-cards__content-editor-choice');
    const popularNews = allNewsContainer.querySelector('.section-cards__content-popular');
    const discussedNews = allNewsContainer.querySelector('.section-cards__content-discussed');
    const newsItems = [lastNews, editorChoiceNews, popularNews, discussedNews];
    let lastActiveSection = lastNews;

    const cardTemplates = {
        fullExtended: allNewsContainer.querySelector('.js-all-news-full-extended').cloneNode(true),
        fullMiddle: allNewsContainer.querySelector('.js-all-news-full-middle').cloneNode(true),
        fullImg: allNewsContainer.querySelector('.js-all-news-full-img').cloneNode(true),
        fullWithoutImg: allNewsContainer.querySelector('.js-all-news-full-without-img').cloneNode(true),
        short: allNewsContainer.querySelector('.js-all-news-short').cloneNode(true)
    };

    const toActiveClass = 'section-cards_active';

    function resetLastActive() {
        lastActiveSection.classList.remove(toActiveClass);
    }

    function setActive(el) {
        el.classList.add(toActiveClass);
        lastActiveSection = el;
    }

    function allNewsTabClickListener(e) {
        resetLastActive();
        switch(e.innerText) {
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
        }
    }

    function addPosts(btn, data) {
        function addFullPost(con, cardTemplate, dataItem) {
            const newCard = cardTemplate.cloneNode(true);
            newCard.querySelector('.card__title').innerText = dataItem.title;
            newCard.querySelector('.card__date').innerText = dataItem.date;
            newCard.querySelector('.card__img').setAttribute('src', `./images/${dataItem.img}`);
            con.before(newCard);
        }

        function addShortPost(con, dataItem) {
            const newCard = cardTemplates.short.cloneNode(true);
            newCard.querySelector('.card-news__list-item-title').innerText = dataItem.title;
            newCard.querySelector('.card-news__list-item-date').innerText = dataItem.date;
            con.before(newCard);
        }

        addFullPost(btn, cardTemplates.fullMiddle, data[0]);
        addFullPost(btn, cardTemplates.fullImg, data[1]);
        addFullPost(btn, cardTemplates.fullImg, data[2]);
        addFullPost(btn, cardTemplates.fullImg, data[3]);
        addFullPost(btn, cardTemplates.fullImg, data[4]);
        addFullPost(btn, cardTemplates.fullImg, data[5]);
        addFullPost(btn, cardTemplates.fullImg, data[6]);

        for (let i = 0; i < 7; i++) {
            addShortPost(btn, data[i]);
        }
    }

    function setShowMore() {
        newsItems.forEach((el) => {
            const showMoreBtn = el.querySelector('.show-more');
            showMoreBtn.addEventListener('click', (e) => {
                w.fetch('http://localhost:3000/posts')
                    .then(response => response.json())
                    .then((data) => {
                        addPosts(e.target.parentNode, data);
                    });
            });
        });
    }

    tabs(doc.querySelector('.section__header_all-news'), allNewsTabClickListener);
    setShowMore();
}
