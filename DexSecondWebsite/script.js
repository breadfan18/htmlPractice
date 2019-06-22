var slideIndex = 1;
var autoIndex = 0;
addDots();
const dotsList = document.querySelectorAll('.dots');
const images = document.querySelectorAll(".mySlides");

//next step is to try and get this slideshow to pause and play
const pauseBtn = document.querySelectorAll("#playPauseButton");


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
    playing = true;

    setTimeout(autoSlideShow, 2000);
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
 //how?? playing boolean? use that somehow...take a look at the typing text example timerRunning boolean
}




