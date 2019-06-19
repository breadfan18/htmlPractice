var myIndex = 0;
var imgIndex = 1;
//autoSlideShow();
//manualSlideShow(imgIndex);
showOnlyFirstImage();

var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");


function showOnlyFirstImage() {
    let images = document.getElementsByClassName("mySlides");
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[0].style.display = "block";
}

function autoSlideShow() {
    let images = document.getElementsByClassName("mySlides");
    console.log(images);
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


function manualSlideShow(n) {
    let images = document.getElementsByClassName("mySlides");
    if (n > images.length) {
        imgIndex = 1;
    }
    if (n < 1) {
        imgIndex = images.length;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
   // images[imgIndex - 1].style.display = "block";

}

function showNextSlide(n){
    manualSlideShow(imgIndex += n);
}

// function showPrevSlide(n){
//     let images = document.getElementsByClassName("mySlides");
//     images[index-1].style.display = "block";
// }

nextButton.addEventListener('click', showNextSlide, false);
//nextButton.addEventListener('click', showPrevSlide, false);

