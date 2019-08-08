export default function tabs(tabsContainer, onSetTab) {
    const tabsList = tabsContainer.childNodes;
    const tabsObj = {};

    tabsObj.setActiveTab = function (toActiveTab) {
        tabsList.forEach((tab) => {
            if (tab.classList.contains('tab_active')) {
                tab.classList.remove('tab_active');
            }
        });
        toActiveTab.classList.add('tab_active');
    };

    tabsContainer.addEventListener('click', (e) => {
        tabsObj.setActiveTab(e.target);
        onSetTab(e.target);
    });
}
