let paris = document.querySelector('.paris');
let tokyo = document.querySelector('.tokyo');
let london = document.querySelector('.london');

function showParis() {
    paris.style.display = "block";
    london.style.display = "none";
    console.log("test");
}

paris.addEventListener('click', showParis, false);
