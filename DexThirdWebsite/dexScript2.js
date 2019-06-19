var slideIndex, slides, dots, captionText;

initGallery();

function initGallery() {
    slideIndex = 0;
    slides = document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity = 1;

    captionText = document.querySelector(".captionHolder .captionText");
    captionText.innerHTML = slides[slideIndex].querySelector(".captionText").innerHTML;

    dots = [];
    let dotsContainer = document.getElementById("dotsContainer");
    for (let i = 0; i < slides.length; i++) {
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
        if (n > slides.length) (n = 0);
        moveSlidesAnimClass.forCurrent = "moveLeftCurrentSlide";
        moveSlidesAnimClass.forNext = "moveLeftNextxsSlide";
    }else if (n<slideIndex)   {

    }
    if (n !== slideIndex) {
        next = slides[n];
        current = slides[slideIndex];
        for (i = 0; i < slides.length; i++) {

        }
    }
}
