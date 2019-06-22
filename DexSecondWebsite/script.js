var slideIndex = 1;
//autoSlideShow();
manualSlideShow(slideIndex);
addDots();

playPauseBtn = document.querySelector('#playPauseButton');


// function autoSlideShow(n) {
//     console.log(images);
//     if (n > images.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = images.length;
//     }
//     for (let i = 0; i < images.length; i++) {
//         images[i].style.display = "none";
//     }
//     images[slideIndex-1].style.display = "block";
//     setTimeout(autoSlideShow, 2000);
// }


function manualSlideShow(n) {
    var images = document.querySelectorAll(".mySlides");

    if (n > images.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = images.length;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[slideIndex - 1].style.display = "block";
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

//playPauseBtn.addEventListener('click', autoSlideShow, false);




