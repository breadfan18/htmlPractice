function openNav() {
    document.querySelector("#mySideNav").style.width = "350px";
    document.querySelector("#main").style.marginLeft = "350px";
}


function closeNav() {
    document.querySelector("#mySideNav").style.width = "0";
    document.querySelector("#main").style.marginLeft = "0";


}


document.querySelector(".closebtn").addEventListener("click", closeNav);
document.querySelector("span").addEventListener("click", openNav);
