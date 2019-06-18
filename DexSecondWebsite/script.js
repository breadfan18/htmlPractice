var myIndex = 0;
autoSlideShow();

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

