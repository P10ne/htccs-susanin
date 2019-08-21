/*
* row - контейнер со слайдами
* nav - контейнер с кнопками управления
 */
export default function slider(row, nav) {
    const sliderRow = row;
    const sliderBtns = { left: nav.firstChild, right: nav.lastChild };
    let activeSlideNum = 0;
    const slidesCount = row.childNodes.length;

    if(slidesCount === 1) {
        nav.style.display = 'none';
        return;
    }

    sliderBtns.left.onclick = () => {
        if (activeSlideNum > 0) {
            activeSlideNum--;
            sliderRow.style.transform = `translateX(-${activeSlideNum * 100}%)`;
            sliderBtns.right.disabled = false;
        }

        if (activeSlideNum === 0) {
            sliderBtns.left.disabled = true;
        }
    };

    sliderBtns.right.onclick = () => {
        if (activeSlideNum + 1 < slidesCount) {
            activeSlideNum++;
            sliderRow.style.transform = `translateX(-${activeSlideNum * 100}%)`;
            sliderBtns.left.disabled = false;

            if (activeSlideNum + 1 === slidesCount) {
                sliderBtns.right.disabled = true;
            }
        }
    };
}
