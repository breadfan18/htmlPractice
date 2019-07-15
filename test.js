let paris = document.querySelector('.cityList li:nth-child(2) > a');
let tokyo = document.querySelector('.cityList li:nth-child(3) > a');
let london = document.querySelector('.cityList li:nth-child(1) > a');

function showParis() {
    paris.style.display = "block";
    london.style.display = "none";
    console.log("test");
}

paris.addEventListener('click', showParis, false);
