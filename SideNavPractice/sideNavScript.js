function openNav() {
    document.querySelector("#mySideNav").style.width = "250px";
}


function closeNav() {
    document.querySelector("#mySideNav").style.width = "0";

}


document.querySelector(".closebtn").addEventListener("click", closeNav)
document.querySelector("span").addEventListener("click", openNav)
