export default function tabs(tabsContainer, onSetTab) {
    const tabsList = tabsContainer.querySelectorAll('.tab');
    const tabsObj = {};

    const TAB_CLASS = 'tab';
    const TAB_ACTIVE_CLASS = 'tab_active';

    tabsObj.setActiveTab = function (toActiveTab) {
        tabsList.forEach((tab) => {
            if (tab.classList.contains(TAB_ACTIVE_CLASS)) {
                tab.classList.remove(TAB_ACTIVE_CLASS);
            }
        });
        toActiveTab.classList.add(TAB_ACTIVE_CLASS);
    };

    tabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains(TAB_CLASS)) {
            tabsObj.setActiveTab(e.target);
            onSetTab(e.target);
        }
    });
}
