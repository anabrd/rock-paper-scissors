// POSSIBLE TO DOS: REMOVE SECOND QUESTION, TURN NUMBERS INTO STRINGS, LESS VARIABLES
// MAKE CODE DRIER
// MAKE THE NUMBERS BETWEEN 1 AND 3 CYLICAL (1 -> 2 -> 3 -> 1,...)

// GLOBAL VARIABLES
let humanScore = 0;
let botScore = 0;
let userChoice;

// FUNCTION TO COMPARE CHOICES
function comparison(human, bot) {

    let currentHumanScore = 0;
    let currentBotScore = 0;

    // DRAW SCENARIOS
    if (human == bot) {
        humanScore += 0;
        botScore += 0;
        currentBotScore += 0;
        currentHumanScore += 0;
    }

    // BOT WINNING SCENARIOS
    if ((human == 1 && bot == 2) || (bot == 1 && human == 3) || (human == 2 && bot == 3)) {
        botScore += 1;
        currentBotScore += 1;
    }

    // HUMAN WINNING SCENARIOS
    if ((bot == 1 && human == 2) || (human == 1 && bot == 3) || (bot == 2 && human == 3)) {
        humanScore += 1;
        currentHumanScore += 1;
    }

    if (currentHumanScore > currentBotScore) {
        return "You";
    } else if (currentBotScore > currentHumanScore) {
        return "Computer";
    } else {
        return "Draw";
    }
}

// GAME STARTS, USER ASKS FOR INPUTS
userChoice = parseInt(prompt(`Welcome! Please choose between rock, paper and scissors:
    [1] rock
    [2] paper
    [3] scissors
    
    Type anything else is you want to finish.`));

if (userChoice == 1 || userChoice == 2 || userChoice == 3) {
while (userChoice == 1 || userChoice == 2 || userChoice == 3) {

    let computerChoice = Math.floor(Math.random() * 3) + 1;

    alert(`The winner is: ${comparison(userChoice, computerChoice)}!`)

    console.log("My choice: ", userChoice);
    console.log("Computer: ", computerChoice);
    console.log(humanScore, botScore);

    userChoice = parseInt(prompt(`Please choose between rock, paper and scissors:
    [1] rock
    [2] paper
    [3] scissors
    
    Type anything else is you want to finish.`));

};

// CALLBACK FUNCTION TEST
function alertWinner(winner) {
    alert(`${winner} is the winner!`);
}

function calcWinner(callBack) {
    let winner = ""
    if (humanScore > botScore) {
        winner+="Human";
    } else if (botScore > humanScore) {
        winner+="Computer";
    } else {
        winner+="Draw";
    }
    callBack(winner);
}

calcWinner(alertWinner);

} else {
    alert("Goodbye!");
}