var slideIndex = 1;
//autoSlideShow();
addDots();
const dotsList = document.querySelectorAll('.dots');
const images = document.querySelectorAll(".mySlides");


manualSlideShow(slideIndex);



function autoSlideShow(slideIndex) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    if (slideIndex > images.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = images.length;
    }
    images[slideIndex-1].style.display = "block";
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
        dotsList[j].style.backgroundColor = "white"
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




