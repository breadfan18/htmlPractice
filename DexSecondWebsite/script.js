var myIndex = 0;
var slideIndex = 1;
//autoSlideShow();
showOnlyFirstImage();

var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");


function showOnlyFirstImage() {
    let images = document.getElementsByClassName("mySlides");
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[1].style.display = "block";
}
function autoSlideShow() {
    let images = document.getElementsByClassName("mySlides");
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > images.length) {
        myIndex = 1;
    }
    images[myIndex - 1].style.display = "block";
    setTimeout(autoSlideShow, 3000);
}

// function manualSlides() {
//     let images = document.getElementsByClassName("mySlides");
//     for (let i = 0; i < images.length; i++) {
//         images[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > images.length) {
//         myIndex = 1;
//     }
//     for (let i = 0; i < images.length; i++) {
//         images[i].style.display = "no"
//     }
//
// }
//
// function showSlides(n) {
//     let images = document.getElementsByClassName("mySlides");
//     for (let i = 0; i < images.length; i++) {
//         images[i].style.display = "none";
//     }
// }

function showNextSlide(index){
    let images = document.getElementsByClassName("mySlides");
    images[index+1].style.display = "block";
}

function showPrevSlide(index){
    let images = document.getElementsByClassName("mySlides");
    images[index-1].style.display = "block";
}

prevButton.addEventListener('click', showNextSlide, false);
nextButton.addEventListener('click', showPrevSlide, false);

