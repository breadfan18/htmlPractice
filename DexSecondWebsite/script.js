var slideIndex = 1;
var autoIndex = 0;
let slideshowPlaying = false;
let timeout;
let currentSlide;
const images = document.querySelectorAll(".mySlides");
const galleryContainer = document.querySelector(".slideshow-container");




addDots();
const dotsList = document.querySelector('.dots');

//next step is to show the right photo when each dot is clicked. need to see how to do that..think!!!

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
    dotsList[autoIndex - 1].style.backgroundColor = "hotpink";

    timeout = setTimeout(autoSlideShow, 2000);
    currentSlide = autoIndex;

    slideshowPlaying = true;

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
    // dotsList[slideIndex -1].style.backgroundColor = "hotpink";
}

function plusSlides(n) {
    if (slideshowPlaying === true) {
        clearTimeout(timeout);
        slideshowPlaying = false;
        slideIndex = currentSlide;
        autoIndex = 0;
    }
    manualSlideShow(slideIndex += n);
}

function addDots() {
    dots = [];
    let dotsContainer = document.querySelector("#dotsContainer");
    for (let i = 0; i < images.length; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dots.push(dot);
    }
}

function pauseSlideshow() {
    if (slideshowPlaying === true) {
    clearTimeout(timeout);
    slideshowPlaying = false;
    slideIndex = currentSlide;
    autoIndex = 0;
    }
}


//below code trying to get left and right arrow keys to change the images in the slideshow..right now just trying to
//find out way to get any key events for a given element, in this case gallery container. document works for
document.onkeydown = function (e) {
    e = e || galleryContainer.event;
    switch (e.keyCode) {
        case 37:
            console.log("Left");
            break;
        case 39:
            console.log("Right");
            break;
    }
};

// window.addEventListener('keyup', (e) => {
//     console.log(e.keyCode);
// });
// function clickDotsToChangeImg(dotIndex) {
//     manualSlideShow(dotIndex);
// }
//
// function getDotsLocator(index){
//     return document.querySelector('.dots:nth-child('+ index+')')
// }
//
//
// eachDot.addEventListener('click', clickDotsToChangeImg, false);

//----------------------------------------------------------------------------------------------------------------------

// This variable will keep track of what the player chooses.
// It starts off as null, which means specifically "nothing," because the user hasn't chosen anything when the game starts.
let player = {
    currentChoice: null
};

// This variable keeps track of what the computer chooses.
let computer = {
    currentChoice: null
};

// The following three variables store the three options users can choose between.
const choices = ["Lapis", "Papyrus", "Scalpellus"];


function computerChooses() {
    return Math.floor(Math.random() * choices.length);
}

computer.currentChoice = choices[computerChooses()];
player.currentChoice = choices[1];


function display(winningMessage) {
    const winningMessageElement = document.createElement("h2");
    winningMessageElement.innerText = winningMessage;
    document.body.appendChild(winningMessageElement);
}

function compareChoices(computerChoice, playerChoice) {
    if (computerChoice === choices[0]) {
        if (playerChoice === choices[1]) {
            let winner = "Player";
            let loser = "Computer";
            display("Player wins! The computer chose " + computerChoice + " and the player chose " + playerChoice);
        } else if (playerChoice === choices[2]) {
            display("Computer wins! The computer chose " + computerChoice + " and the player chose " + playerChoice);
        } else {
            display("It's a tie!");
        }
    }

    if (computerChoice === choices[1]) {
        if (playerChoice === choices[0]) {
            display("Computer wins! The computer chose " + computerChoice + " and the player chose " + playerChoice);
        } else if (playerChoice === choices[2]) {
            display("Player wins! The computer chose " + computerChoice + " and the player chose " + playerChoice)
        } else {
            display("It's a tie!");
        }
    }

    if (computerChoice === choices[2]) {
        if (playerChoice === choices[0]) {
            display("Player wins! The computer chose " + computerChoice + " and the player chose " + playerChoice);
        } else if (playerChoice === choices[1]) {
            display("Computer wins! The computer chose " + computerChoice + " and the player chose " + playerChoice)
        } else {
            display("It's a tie!");
        }
    }
}

compareChoices(computer.currentChoice, player.currentChoice);





