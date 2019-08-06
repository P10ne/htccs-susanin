import debounce from '../common';

export default function HeaderSearch() {
    const doc = document;
    const w = window;
    const logo = doc.querySelector('.logo');
    const searchHeader = doc.querySelector('.header .js-search-header');
    const searchFixedHeader = doc.querySelector('.js-header-fixed .js-search-header');
    const searchMinHeader = doc.querySelector('.js-search-header_min');
    function initSearch(searchBlock) {
        const searchFieldForm = searchBlock.querySelector('.search-field');
        let searchIsOpen = false;

        function calcSearchFormWidth() {
            return searchBlock.offsetLeft + searchBlock.clientWidth - logo.offsetLeft;
        }

        function displaySearch() {
            searchFieldForm.style.width = `${calcSearchFormWidth()}px`;
            searchFieldForm.style.display = 'block';
            searchIsOpen = true;
        }

        searchBlock.addEventListener('click', displaySearch);

        doc.addEventListener('click', (e) => {
            if (searchIsOpen && !searchBlock.contains(e.target)) {
                searchFieldForm.style.display = 'none';
                searchIsOpen = false;
            }
        });

        w.addEventListener('resize', debounce(() => {
            searchFieldForm.style.width = `${calcSearchFormWidth()}px`;
        }, 300, false), false);
    }
    initSearch(searchHeader);
    initSearch(searchFixedHeader);
    initSearch(searchMinHeader);
}
