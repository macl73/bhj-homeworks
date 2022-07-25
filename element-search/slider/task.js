const sliderItems = Array.from(document.querySelectorAll(".slider__item"));

const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));
sliderDots[0].className = "slider__dot slider__dot_active";

const arrowPrev = document.querySelector(".slider__arrow_prev");
arrowPrev.onclick = showPrevSlide;

const arrowNext = document.querySelector(".slider__arrow_next");
arrowNext.onclick = showNextSlide;

let activeSlide;

function showPrevSlide() {
    activeSlide = document.querySelector(".slider__item_active");
    let prevSlideNumber = sliderItems.indexOf(activeSlide) - 1;
    if (prevSlideNumber== -1) {
        prevSlideNumber = sliderItems.length - 1;
    };
    activeSlide = sliderItems[prevSlideNumber];
    classEraser();
    activeSlide.className = "slider__item slider__item_active";
    let activeDot = sliderDots[sliderItems.indexOf(activeSlide)];
    activeDot.className = "slider__dot slider__dot_active";
};

function showNextSlide() {
    activeSlide = document.querySelector(".slider__item_active");
    let nextSlideNumber = sliderItems.indexOf(activeSlide) + 1;
    if (nextSlideNumber == sliderItems.length) {
        nextSlideNumber = 0;
    };
    activeSlide = sliderItems[nextSlideNumber];
    classEraser();
    activeSlide.className = "slider__item slider__item_active";
    let activeDot = sliderDots[sliderItems.indexOf(activeSlide)];
    activeDot.className = "slider__dot slider__dot_active";
};

for (let i = 0; i < sliderDots.length; i++) {
    let activeDot = sliderDots[i];
    activeDot.onclick = activateDot;
    function activateDot() {
        classEraser();
        activeDot.className = "slider__dot slider__dot_active";
        activeSlide = sliderItems[sliderDots.indexOf(activeDot)];
        activeSlide.className = "slider__item slider__item_active";
    };
};

function classEraser() {
    sliderDots.forEach(element => element.className = "slider__dot");
    sliderItems.forEach(element => element.className = "slider__item");
};