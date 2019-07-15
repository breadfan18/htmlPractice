const parisLink = document.querySelector('.cityList li:nth-child(2) > a');
const tokyoLink = document.querySelector('.cityList li:nth-child(3) > a');
const londonLink = document.querySelector('.cityList li:nth-child(1) > a');

const parisPage = document.querySelector('.paris');
const tokyoPage = document.querySelector('.tokyo');
const londonPage = document.querySelector('.london');



function showParis() {
    parisPage.style.display = "block";
    londonPage.style.display = "none";
    tokyoPage.style.display = "none";
}

function showTokyo() {
    tokyoPage.style.display = "block";
    londonPage.style.display = "none";
    parisPage.style.display = "none";
}

function showLondon() {
    londonPage.style.display = "block";
    parisPage.style.display = "none";
    tokyoPage.style.display = "none";
}

parisLink.addEventListener('click', showParis, false);
tokyoLink.addEventListener('click', showTokyo, false);
londonLink.addEventListener('click', showLondon, false);

