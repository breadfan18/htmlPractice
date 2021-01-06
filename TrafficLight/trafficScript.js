document.querySelector('stopButton').onclick = illuminateRed;
document.querySelector('slowButton').onclick = illuminateYellow;
document.querySelector('goButton').onclick = illuminateGreen;

function illuminateRed() {
    clearLights();
    document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
    clearLights();
    document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen(){
    clearLights();
    document.getElementById('goLight').style.backgroundColor = 'green';
}

function clearLights() {
    document.getElementById('stopLight').style.backgroundColor = "black";
    document.getElementById('slowLight').style.backgroundColor = "black";
    document.getElementById('goLight').style.backgroundColor = "black";
}