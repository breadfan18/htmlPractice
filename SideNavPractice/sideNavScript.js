function openNav() {
    document.querySelector("#mySideNav").style.width = "450px";
    document.querySelector("#main").style.marginLeft = "450px";
    document.body.style.backgroundColor = "rgba(0,0,0, 0.4)";
    document.querySelector("#hamMenu").style.left = "450px";
    document.querySelector("#hamMenu").style.transform = "rotate(90deg)";
    document.querySelector("#hamMenu").style.color = "#FF9900";
}


function closeNav() {
    document.querySelector("#mySideNav").style.width = "0";
    document.querySelector("#main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.querySelector("#hamMenu").style.left = "20px";
    document.querySelector("#hamMenu").style.transform = "rotate(360deg)";
    document.querySelector("#hamMenu").style.color = "#111111";

}


document.querySelector(".closebtn").addEventListener("click", closeNav);
document.querySelector("#hamMenu").addEventListener("click", openNav);
