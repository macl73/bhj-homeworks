const sliderItems = Array.from(document.querySelectorAll(".slider__item"));

const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));

document.querySelector(".slider__arrow_prev").onclick = showPrevSlide;

document.querySelector(".slider__arrow_next").onclick = showNextSlide;

let activeSlide = sliderItems.indexOf(document.querySelector(".slider__item_active"));
sliderDots[activeSlide].className = "slider__dot slider__dot_active";

function slideChanger(slideNumber) {
    sliderDots.forEach(element => element.className = "slider__dot");
    sliderItems.forEach(element => element.className = "slider__item");
    sliderItems[slideNumber].className = "slider__item slider__item_active";
    sliderDots[slideNumber].className = "slider__dot slider__dot_active";
};

function showPrevSlide() {
    let prevSlideNumber = activeSlide - 1;
    if (prevSlideNumber + 1 == 0) {
        prevSlideNumber = sliderItems.length - 1;
    };
    activeSlide = prevSlideNumber;
    slideChanger(activeSlide);
};

function showNextSlide() {
    let nextSlideNumber = activeSlide + 1;
    if (nextSlideNumber == sliderItems.length) {
        nextSlideNumber = 0;
    };
    activeSlide = nextSlideNumber;
    slideChanger(activeSlide);
};

for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = activateDot;
    function activateDot() {
        activeSlide = i;
        slideChanger(activeSlide);
    };
};