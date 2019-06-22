var slideIndex = 1;
var autoIndex = 0;
addDots();
const dotsList = document.querySelectorAll('.dots');
const images = document.querySelectorAll(".mySlides");
const pauseBtn = document.querySelectorAll(".mySlides");
manualSlideShow(slideIndex);

function autoSlideShow() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (let j = 0; j < dotsList.length; j++) {
        dotsList[j].style.backgroundColor = "white";
    }
    autoIndex++;
    if (autoIndex > images.length) {
        autoIndex = 1;
    }
    if (autoIndex < 1) {
        autoIndex = images.length;
    }
    images[autoIndex - 1].style.display = "block";
    dotsList[autoIndex - 1].style.backgroundColor = "grey";

    setTimeout(autoSlideShow, 1000);
}

function manualSlideShow(n) {
    if (n > images.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = images.length;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (let j = 0; j < dotsList.length; j++) {
        dotsList[j].style.backgroundColor = "white";
    }
    images[slideIndex - 1].style.display = "block";
    dotsList[slideIndex -1].style.backgroundColor = "grey";
}

function plusSlides(n) {
    manualSlideShow(slideIndex += n);
}

function addDots() {
    dots = [];
    let images = document.querySelectorAll(".mySlides");
    let dotsContainer = document.querySelector("#dotsContainer");
    for (let i = 0; i < images.length; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dots.push(dot);
    }
}

function pauseSlideshow() {

}




