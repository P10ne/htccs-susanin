export default function newsView() {
    const doc = document;

    const NEWS_VIEW_CLASS = 'news-view';
    const VIEW_LIST_CLASS = 'view-list';
    const VIEW_CARDS_CLASS = 'view-cards';
    const SECTION_CARDS_ALL_CLASS = 'section-cards_all';
    const SECTION_CARDS_LIST_TYPE_CLASS = 'section-cards_list-type';
    const SECTION_CARDS_CARD_TYPE_CLASS = 'section-cards_card-type';
    const VIEW_LIST_ACTIVE_CLASS = 'view-list-active';
    const VIEW_CARDS_ACTIVE_CLASS = 'view-cards-active';

    const btnsCon = doc.querySelector(`.${NEWS_VIEW_CLASS}`);
    const toListBtn = btnsCon.querySelector(`.${VIEW_LIST_CLASS}`);
    const toCardBtn = btnsCon.querySelector(`.${VIEW_CARDS_CLASS}`);
    const newsContainer = doc.querySelector(`.${SECTION_CARDS_ALL_CLASS}`);

    toListBtn.addEventListener('click', () => {
        if (!toListBtn.classList.contains(VIEW_LIST_ACTIVE_CLASS)) {
            newsContainer.classList.remove(SECTION_CARDS_CARD_TYPE_CLASS);
            newsContainer.classList.add(SECTION_CARDS_LIST_TYPE_CLASS);
            toCardBtn.classList.remove(VIEW_CARDS_ACTIVE_CLASS);
            toListBtn.classList.add(VIEW_LIST_ACTIVE_CLASS);
        }
    });

    toCardBtn.addEventListener('click', () => {
        if (!toCardBtn.classList.contains(VIEW_CARDS_ACTIVE_CLASS)) {
            newsContainer.classList.remove(SECTION_CARDS_LIST_TYPE_CLASS);
            newsContainer.classList.add(SECTION_CARDS_CARD_TYPE_CLASS);
            toListBtn.classList.remove(VIEW_LIST_ACTIVE_CLASS);
            toCardBtn.classList.add(VIEW_CARDS_ACTIVE_CLASS);
        }
    });
}
