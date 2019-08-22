export default function newsView() {
    const doc = document;
    const btnsCon = doc.querySelector('.news-view');
    const toListBtn = btnsCon.querySelector('.view-list');
    const toCardBtn = btnsCon.querySelector('.view-cards');
    const newsContainer = doc.querySelector('.section-cards_all');
    const toListClass = 'section-cards_list-type';
    const toCardClass = 'section-cards_card-type';
    const activeListClass = 'view-list-active';
    const activeCardClass = 'view-cards-active';

    toListBtn.addEventListener('click', () => {
        if (!toListBtn.classList.contains(activeListClass)) {
            newsContainer.classList.remove(toCardClass);
            newsContainer.classList.add(toListClass);
            toCardBtn.classList.remove(activeCardClass);
            toListBtn.classList.add(activeListClass);
        }
    });

    toCardBtn.addEventListener('click', () => {
        if (!toCardBtn.classList.contains(activeCardClass)) {
            newsContainer.classList.remove(toListClass);
            newsContainer.classList.add(toCardClass);
            toListBtn.classList.remove(activeListClass);
            toCardBtn.classList.add(activeCardClass);
        }
    });
}
