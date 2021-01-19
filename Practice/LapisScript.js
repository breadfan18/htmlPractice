// This variable will keep track of what the player chooses.
// It starts off as null, which means specifically "nothing," because the user hasn't chosen anything when the game starts.
let player = {
    currentChoice: null
};

// This variable keeps track of what the computer chooses.
let computer = {
    currentChoice: null
};

// The following three variables store the three options users can choose between.
const choices = ["Lapis", "Papyrus", "Scalpellus"];


function computerChooses() {
    return Math.floor(Math.random() * choices.length);
}

computer.currentChoice = choices[computerChooses()];


function display(winner, computerChoice, playerChoice) {
    const winningMessageElement = document.createElement("h2");
    if (winner === "It's a tie!") {
        winningMessageElement.innerText = "It's a tie! Both player and computer chose " + computerChoice;
    } else {
        winningMessageElement.innerText = winner + " wins! The computer chose " + computerChoice + " and the player chose " + playerChoice;
    }
    document.body.appendChild(winningMessageElement);
}

function compareChoices(computerChoice, playerChoice) {
    if (computerChoice === choices[0]) {
        if (playerChoice === choices[1]) {
            display("Player", computerChoice, playerChoice);
        } else if (playerChoice === choices[2]) {
            display("Computer", computerChoice, playerChoice);
        } else {
            display("It's a tie!", computerChoice, playerChoice);
        }
    }

    if (computerChoice === choices[1]) {
        if (playerChoice === choices[0]) {
            display("Computer", computerChoice, playerChoice);
        } else if (playerChoice === choices[2]) {
            display("Player", computerChoice, playerChoice);
        } else {
            display("It's a tie!", computerChoice, playerChoice);
        }
    }

    if (computerChoice === choices[2]) {
        if (playerChoice === choices[0]) {
            display("Player", computerChoice, playerChoice);
        } else if (playerChoice === choices[1]) {
            display("Computer", computerChoice, playerChoice);
        } else {
            display("It's a tie!", computerChoice, playerChoice);
        }
    }
}



function setPlayerChoice(e) {
    let choiceMade = choices.indexOf(e.target.innerText);
    player.currentChoice = choices[choiceMade];
    console.log(computer.currentChoice);
    console.log(player.currentChoice);
    compareChoices(computer.currentChoice, player.currentChoice);
}

// compareChoices(computer.currentChoice, player.currentChoice);

document.querySelector("#lapis").addEventListener("click", setPlayerChoice);
document.querySelector("#papyrus").addEventListener("click", setPlayerChoice);
document.querySelector("#scalpellus").addEventListener("click", setPlayerChoice);



