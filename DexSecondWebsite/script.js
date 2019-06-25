var slideIndex = 1;
var autoIndex = 0;
let slideshowPlaying = false;
let timeout;
let currentSlide;
const images = document.querySelectorAll(".mySlides");
addDots();
const dotsList = document.querySelectorAll('.dots');

//next step is to try and get this slideshow to pause and play
const pauseBtn = document.querySelector("#playPauseButton");

manualSlideShow(slideIndex);

function autoSlideShow() {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        for (let j = 0; j < dotsList.length; j++) {
            dotsList[j].style.backgroundColor = "grey";
        }
        autoIndex++;

        if (autoIndex > images.length) {
            autoIndex = 1;
        }
        if (autoIndex < 1) {
            autoIndex = images.length;
        }
        images[autoIndex - 1].style.display = "block";
        dotsList[autoIndex - 1].style.backgroundColor = "white";

        timeout = setTimeout(autoSlideShow, 2000);
        currentSlide = autoIndex;

        slideshowPlaying = true;

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
        dotsList[j].style.backgroundColor = "grey";
    }
    images[slideIndex - 1].style.display = "block";
    dotsList[slideIndex -1].style.backgroundColor = "white";
}

function plusSlides(n) {
    if (slideshowPlaying === true) {
        clearTimeout(timeout);
        slideshowPlaying = false;
        slideIndex = currentSlide;
        autoIndex = 0;
    }
    manualSlideShow(slideIndex += n);
}

function addDots() {
    dots = [];
    let dotsContainer = document.querySelector("#dotsContainer");
    for (let i = 0; i < images.length; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dots.push(dot);
    }
}


function pauseSlideshow() {
    if (slideshowPlaying === true) {
    clearTimeout(timeout);
    slideshowPlaying = false;
    slideIndex = currentSlide;
    autoIndex = 0;
    }
 //how?? playing boolean? use that somehow...take a look at the typing text example timerRunning boolean
}

pauseBtn.addEventListener("click", pauseSlideshow, false);




