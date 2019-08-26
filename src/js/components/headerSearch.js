import debounce from '../common';

export default function HeaderSearch() {
    const doc = document;
    const w = window;

    const HEADER_CLASS = 'header';
    const JS_SEARCH_HEADER_CLASS = 'js-search-header';
    const JS_HEADER_FIXED_CLASS = 'js-header-fixed';
    const JS_SEARCH_HEADER_MIN_CLASS = 'js-search-header_min';
    const SEARCH_FIELD_CLASS = 'search-field';

    const logo = doc.querySelector('.logo');
    const searchHeader = doc.querySelector(`.${HEADER_CLASS} .${JS_SEARCH_HEADER_CLASS}`);
    const searchFixedHeader = doc.querySelector(`.${JS_HEADER_FIXED_CLASS} .${JS_SEARCH_HEADER_CLASS}`);
    const searchMinHeader = doc.querySelector(`.${JS_SEARCH_HEADER_MIN_CLASS}`);
    function initSearch(searchBlock) {
        const searchFieldForm = searchBlock.querySelector(`.${SEARCH_FIELD_CLASS}`);
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
