var slideIndex = 1;
//changeImageAuto();
addDots();
const dotsList = document.querySelectorAll('.dots');
console.log(dotsList);

manualSlideShow(slideIndex);



function changeImageAuto(slideIndex) {
    let images = document.querySelectorAll('.mySlides');

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
    setTimeout(changeImageAuto, 2000);
}


function manualSlideShow(n) {
    let images = document.querySelectorAll(".mySlides");

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
    dotsList[slideIndex -1].style.backgroundColor = "#9FAEBC";

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

//playPauseBtn.addEventListener('click', changeImageAuto, false);




