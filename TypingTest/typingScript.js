const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const overlayClose = document.querySelector("#overlay");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths TheTimer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellcheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);
    if (textEntered === originText){
        clearInterval(interval);
        testWrapper.style.borderColor = "#599690";
        let successAudio = new Audio('sounds/success.wav');
        successAudio.play();
        let overlay = document.querySelector("#overlay");
        overlay.style.display = "block";
    }else {
        if (textEntered === originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        }else {
            testWrapper.style.borderColor = "#E95D0F";
            let errorAudio = new Audio('sounds/error.wav');
            errorAudio.play();
        }
    }
}

// Start the TheTimer:
function start(){
    console.log(overlayClose.innerHTML);
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
}

// Reset everything:
function reset(){
    clearInterval(interval);
    interval = null;

    //set the clock back to 0:
    timer = [0, 0, 0, 0];

    //set timerRunning back to false:
    timerRunning = false;

    //clear the testArea:
    testArea.value = "";

    //set the time back:
    theTimer.innerHTML = "00:00:00";

    //set the test area wrapper back to gray:
    testWrapper.style.borderColor = "grey";
}

function returnToApp(){
    overlayClose.style.display = "none";
    reset();
}

// Event listeners for keyboard input and the reset

//keypress event triggers when any key is pressed
testArea.addEventListener("keypress", start, false);
//keyup event triggers when you let go of the key
testArea.addEventListener("keyup", spellcheck, false);

resetButton.addEventListener("click", reset, false);

overlayClose.addEventListener("click", returnToApp, false);


