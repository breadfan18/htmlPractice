var autoIndex = 0;
var manualIndex = 1;
//autoSlideShow();
manualSlideShow(manualIndex);
addDots();

playPauseBtn = document.querySelector('#playPauseButton');

function autoSlideShow() {
    let images = document.getElementsByClassName("mySlides");
    console.log(images);
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    autoIndex++;
    if (autoIndex > images.length) {
        autoIndex = 1;
    }
    images[autoIndex - 1].style.display = "block";
    setTimeout(autoSlideShow, 3000);
}


function manualSlideShow(n) {
    let images = document.querySelectorAll(".mySlides");
    if (n > images.length) {
        manualIndex = 1;
    }
    if (n < 1) {
        manualIndex = images.length;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[manualIndex - 1].style.display = "block";
}

function plusSlides(n) {
    manualSlideShow(manualIndex += n);
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

playPauseBtn.addEventListener('click', autoSlideShow, false);




