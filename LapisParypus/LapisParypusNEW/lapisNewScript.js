const playerInputField = document.querySelector("header input");
const startGameButton = document.querySelector("header button");
const errorPrompt = document.querySelector(".enterNamePrompt");
const gameButtons = document.querySelector(".gameSection");
const welcomeField = document.querySelector("#welcome");

let playerNameEntered = null;

let player = {
    currentChoice: null
};

let computer = {
    currentChoice: null
};

const choices = ["Lapis", "Papyrus", "Scalpellus"];
let rand = Math.floor(Math.random() * 3);

computer.currentChoice = choices[rand];

const winningMessageElement = document.createElement("h2");
winningMessageElement.setAttribute("class", "displayText");

function displayResult(winner, playerName, computerChoice, playerChoice) {
    if (winner === "Tie") {
        winningMessageElement.innerHTML = "It's a tie!</br> Both <span id='computer'>Computer</span>" + "and <span id='player'>" + playerName + "</span> chose <span id='gameName'>" + computerChoice + "</span>";
    }
    else {
        winningMessageElement.innerHTML = "<span id='player'>" + winner + "</span> wins!</br> The <span id='computer'>Computer</span> chose <span id='gameName'>" +
            computerChoice + "</span> and <span id='player'>" + playerName + "</span>  chose <span id='gameName'>" + playerChoice + "</span>";
    }
    document.body.appendChild(winningMessageElement);
}

function runGame(playerName, computerChoice, playerChoice) {
    gameButtons.style.display = "flex";

    if (computerChoice === playerChoice) {
        displayResult("Tie", playerName, computerChoice, playerChoice);
    } else if (computerChoice === choices[0]) {
        if (playerChoice === choices[1]) {
            displayResult(playerName, playerName, computerChoice, playerChoice);
        } else if (playerChoice === choices[2]) {
            displayResult("Computer", playerName, computerChoice, playerChoice);
        }
    } else if (computerChoice === choices[1]) {
        if (playerChoice === choices[0]) {
            displayResult("Computer", playerName, computerChoice, playerChoice);
        } else if (playerChoice === choices[2]) {
            displayResult(playerName, playerName, computerChoice, playerChoice);
        }
    } else if (computerChoice === choices[2]) {
        if (playerChoice === choices[0]) {
            displayResult(playerName, playerName, computerChoice, playerChoice);
        } else if (playerChoice === choices[1]) {
            displayResult("Computer", playerName, computerChoice, playerChoice);
        }
    }
}

function setPlayerChoice(e) {
    let imgAlt = e.target.alt;
    let buttonText = e.target.innerHTML;
    let sectionId = e.target.id;

    if (imgAlt === "Lapis" || buttonText === "Lapis" || sectionId === "lapisSection") {
        player.currentChoice = choices[0];
    }
    else if (imgAlt === "Papyrus" || buttonText === "Papyrus" || sectionId === "papySection") {
        player.currentChoice = choices[1];
    }
    else if (imgAlt === "Scalpellus" || buttonText === "Scalpellus" || sectionId === "scalpSection") {
        player.currentChoice = choices[2];
    }
    runGame(playerNameEntered, computer.currentChoice, player.currentChoice);
}

playerInputField.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        startGameButton.click();
    }
});

startGameButton.addEventListener("click", function () {
    playerNameEntered = playerInputField.value;
    if (playerNameEntered === "") {
        errorPrompt.innerHTML = "Please enter your name to start";
    } else {
        welcomeField.innerHTML = "Hey <span id='player'>" + playerNameEntered + "</span>. Let's play <span id='gameName'>Lapis, Papyrus, Scalpellus</span>";
        document.querySelector("h3").style.display = "block";
        welcomeField.style.display = "block";
        gameButtons.style.display = "flex";
        document.querySelector("header").remove();
    }
}, false);


document.querySelector(".gameSection div:nth-child(1)").addEventListener("click", setPlayerChoice, false);
document.querySelector(".gameSection div:nth-child(2)").addEventListener("click", setPlayerChoice, false);
document.querySelector(".gameSection div:nth-child(3)").addEventListener("click", setPlayerChoice, false);
