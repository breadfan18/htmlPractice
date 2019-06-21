var slideIndex, images, dots, captionText;

initGallery();

function initGallery() {
    slideIndex = 0;
    images = document.getElementsByClassName("imageHolder");
    images[slideIndex].style.opacity = 1;

    captionText = document.querySelector(".captionHolder .captionText");
    captionText.innerHTML = images[slideIndex].querySelector(".captionText").innerHTML;

    dots = [];
    let dotsContainer = document.getElementById("dotsContainer");
    for (let i = 0; i < images.length; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dots.push(dot);
    }

    dots[slideIndex].classList.add("active");

}
function moveSlide(n) {
    var i, current, next;
    var moveSlidesAnimClass = {
        forCurrent: "",
        forNext: ""
    }

    if (n > slideIndex) {
        if (n > images.length) (n = 0);
        moveSlidesAnimClass.forCurrent = "moveLeftCurrentSlide";
        moveSlidesAnimClass.forNext = "moveLeftNextxsSlide";
    }else if (n<slideIndex)   {

    }
    if (n !== slideIndex) {
        next = images[n];
        current = images[slideIndex];
        for (i = 0; i < images.length; i++) {

        }
    }
}
