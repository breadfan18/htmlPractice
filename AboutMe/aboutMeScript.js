const navPanel = document.querySelector('nav');
const family = document.querySelector('.myFamily');
const education = document.querySelector('.myEducation');
const work = document.querySelector('.myWork');
const hobbies = document.querySelector('.myHobbies');
const origin = document.querySelector('.origin');
const sanFran = document.querySelector('.myGoals');
const intro = document.querySelector('.intro');

getCity();

function getCity() {
    navPanel.addEventListener('click',
        function (e) {
            let clickedSection = e.target;
            if (clickedSection.innerText === "Family") {
                intro.style.display = "none";
                family.style.display = "block";
                education.style.display = "none";
                work.style.display = "none";
                hobbies.style.display = "none";
                origin.style.display = "none";
                sanFran.style.display = "none";
            }
            else if (clickedSection.innerText === "Education") {
                family.style.display = "none";
                education.style.display = "block";
                work.style.display = "none";
                hobbies.style.display = "none";
                origin.style.display = "none";
                sanFran.style.display = "none";
                intro.style.display = "none";
            }
            else if (clickedSection.innerText === "Work") {
                family.style.display = "none";
                education.style.display = "none";
                work.style.display = "block";
                hobbies.style.display = "none";
                origin.style.display = "none";
                sanFran.style.display = "none";
                intro.style.display = "none";
            }
            else if (clickedSection.innerText === "My Band") {
                family.style.display = "none";
                education.style.display = "none";
                work.style.display = "none";
                hobbies.style.display = "block";
                origin.style.display = "none";
                sanFran.style.display = "none";
                intro.style.display = "none";
            }
            else if (clickedSection.innerText === "Home City") {
                family.style.display = "none";
                education.style.display = "none";
                work.style.display = "none";
                hobbies.style.display = "none";
                origin.style.display = "block";
                sanFran.style.display = "none";
                intro.style.display = "none";
            }
            else if (clickedSection.innerText === "My Goals") {
                family.style.display = "none";
                education.style.display = "none";
                work.style.display = "none";
                hobbies.style.display = "none";
                origin.style.display = "none";
                sanFran.style.display = "block";
                intro.style.display = "none";
            }
            e.preventDefault();
        }, false);
}