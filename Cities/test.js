const parisLink = document.querySelector('.cityList li:nth-child(2) > a');
const tokyoLink = document.querySelector('.cityList li:nth-child(3) > a');
const londonLink = document.querySelector('.cityList li:nth-child(1) > a');
const ktmLink = document.querySelector('.cityList li:nth-child(4) > a');

const navPanel = document.querySelector('nav');


const parisPage = document.querySelector('.paris');
const tokyoPage = document.querySelector('.tokyo');
const londonPage = document.querySelector('.london');
const ktmPage = document.querySelector('.ktm');

getCity();

function getCity() {
    navPanel.addEventListener('click',
        function(e) {
                    let test = e.target;
            console.log(test.innerText);
        }, false);


}






function showParis(e) {
    parisPage.style.display = "block";
    londonPage.style.display = "none";
    tokyoPage.style.display = "none";
    ktmPage.style.display = "none";
    e.preventDefault()
}
function showTokyo(e) {
    tokyoPage.style.display = "block";
    londonPage.style.display = "none";
    parisPage.style.display = "none";
    ktmPage.style.display = "none";
    e.preventDefault()
}
function showLondon(e) {
    londonPage.style.display = "block";
    parisPage.style.display = "none";
    tokyoPage.style.display = "none";
    ktmPage.style.display = "none";
    e.preventDefault()
}

function showKtm(e) {
    ktmPage.style.display = "block";
    londonPage.style.display = "none";
    parisPage.style.display = "none";
    tokyoPage.style.display = "none";
    e.preventDefault()
}

parisLink.addEventListener('click', showParis, false);
tokyoLink.addEventListener('click', showTokyo, false);
londonLink.addEventListener('click', showLondon, false);
ktmLink.addEventListener('click', showKtm, false);

//think of ways to do this with just one function???

