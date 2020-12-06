// POSSIBLE TO DOS: REMOVE SECOND QUESTION, TURN NUMBERS INTO STRINGS, LESS VARIABLES
// MAKE CODE DRIER
// MAKE THE NUMBERS BETWEEN 1 AND 3 CYLICAL (1 -> 2 -> 3 -> 1,...)

// GLOBAL VARIABLES
let humanScore = 0;
let botScore = 0;
let userChoice;

// FUNCTION TO COMPARE CHOICES
function comparison(human, bot) {

    // HUMAN WINNING SCENARIOS
    if ((human - bot == -2) || (human - bot == 1)) {
        humanScore++;
        return "You win";
    // BOT WINNING SCENARIOS
    } else if ((human - bot == 2) || (human - bot == -1)) {
        botScore++;
        return "Computer wins";
    // DRAW SCENARIOS
    } else {
        return "It's a draw";
    }
}

// GAME STARTS, ASKS USER FOR INPUT
userChoice = parseInt(prompt(`Welcome! Please choose between rock, paper and scissors:
    [1] rock
    [2] paper
    [3] scissors
    
    Press any other key if you want to finish.`));

if (userChoice == 1 || userChoice == 2 || userChoice == 3) {
while (userChoice == 1 || userChoice == 2 || userChoice == 3) {

    // COMPUTER GENERATES RANDOM NUMBER BETWEEN 1 AND 3
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    // FUNCTION EXECUTES COMPARISON AND ALTERS THIS ROUNDS' WINNER
    alert(`${comparison(userChoice, computerChoice)}!`)

    // CONSOLE LOG FOR CHECK
    console.log("My choice: ", userChoice);
    console.log("Computer: ", computerChoice);
    console.log(humanScore, botScore);

    // CHECK FOR NEW GAME
    userChoice = parseInt(prompt(`Ready to play again? Please choose between rock, paper and scissors:
    [1] rock
    [2] paper
    [3] scissors
    
    Type any other key if you want to finish.`));

};

// CALLBACK FUNCTION TO ALERT THE WINNER
function alertWinner(winner) {
    alert(`${winner}`);
}

function calcWinner(callBack) {
    let winner = "Game over! "
    if (humanScore > botScore) {
        winner+="Human wins.";
    } else if (botScore > humanScore) {
        winner+="Computer wins.";
    } else {
        winner+="It's a draw.";
    }
    callBack(winner);
}

calcWinner(alertWinner);

} else {
    alert("Goodbye!");
}