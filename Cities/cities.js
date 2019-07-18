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
            if (test.innerText === "London") {
                londonPage.style.display = "block";
                parisPage.style.display = "none";
                tokyoPage.style.display = "none";
                ktmPage.style.display = "none";
            }else if (test.innerText === "Paris") {
                parisPage.style.display = "block";
                londonPage.style.display = "none";
                tokyoPage.style.display = "none";
                ktmPage.style.display = "none";
            }else if (test.innerText === "Tokyo") {
                parisPage.style.display = "none";
                londonPage.style.display = "none";
                tokyoPage.style.display = "block";
                ktmPage.style.display = "none";
            }else if (test.innerText === "Kathmandu") {
                parisPage.style.display = "none";
                londonPage.style.display = "none";
                tokyoPage.style.display = "none";
                ktmPage.style.display = "block";
            }else if (test.innerText === "Cincinnati") {
                parisPage.style.display = "none";
                londonPage.style.display = "none";
                tokyoPage.style.display = "none";
                ktmPage.style.display = "none";
            }else if (test.innerText === "San Francisco") {
                parisPage.style.display = "none";
                londonPage.style.display = "none";
                tokyoPage.style.display = "none";
                ktmPage.style.display = "none";
            }
            e.preventDefault();


        }, false);


}

//think of ways to do this with just one function???

