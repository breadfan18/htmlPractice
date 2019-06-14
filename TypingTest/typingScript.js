const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = 0;

// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths TheTimer:


// Match the text entered with the provided text on the page:
function spellcheck() {
    let textEntered = testArea.value;
    if (textEntered === originText){
        testWrapper.style.borderColor = "#000000";
    }else {

    }

}

// Start the TheTimer:
function start(){
    let textEnteredLength = testArea.value.length;
    console.log(textEnteredLength);
    if (textEnteredLength === 0) {
        //setInterval()
    }

}

// Reset everything:
function reset(){
    console.log("Reset button has been pressed.")
}

// Event listeners for keyboard input and the reset

//keypress event triggers when any key is pressed
testArea.addEventListener("keypress", start, false);
//keyup event triggers when you let go of the key
testArea.addEventListener("keyup", spellcheck, false);

resetButton.addEventListener("click", reset, false);
