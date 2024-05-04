//Make a function that randomly selects an element from an array//
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//Make a list of choices//
let choices = ["rock", "scissors", "paper"];
//Ask for player input//

let playerChoice = "";

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const currentRound = document.querySelector("#currentRound");
const compScoreDisplay = document.querySelector("#compScoreDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const compChoiceDisplay = document.querySelector("#compChoiceDisplay");

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

rockBtn.addEventListener("click", () => {
    let playerChoice = "rock";
    let computerChoice = getComputerChoice(choices);
    compChoiceDisplay.textContent = computerChoice;
    playRound(playerChoice, computerChoice);
    roundCount++;
    compScoreDisplay.textContent = computerScore.toString();
    playerScoreDisplay.textContent = playerScore.toString();
    currentRound.textContent = roundCount.toString();
});

paperBtn.addEventListener("click", () => {
    let playerChoice = "paper";
    let computerChoice = getComputerChoice(choices)
    compChoiceDisplay.textContent = computerChoice;
    playRound(playerChoice, computerChoice);
    roundCount++;
    compScoreDisplay.textContent = computerScore.toString();
    playerScoreDisplay.textContent = playerScore.toString();
    currentRound.textContent = roundCount.toString();
});

scissorsBtn.addEventListener("click", () => {
    let playerChoice = "scissors";
    let computerChoice = getComputerChoice(choices);
    compChoiceDisplay.textContent = computerChoice;
    playRound(playerChoice, computerChoice);
    roundCount++;
    compScoreDisplay.textContent = computerScore.toString();
    playerScoreDisplay.textContent = playerScore.toString();
    currentRound.textContent = roundCount.toString();
});
/*function that plays a round of Rock Scissors Paper*/

function playRound(playerChoice, computerChoice) {
    
    if (playerChoice.toLowerCase() == computerChoice.toLowerCase()) {
        return alert("It's a tie.")
        document.querySelector("#roundMessage").textContent = "It's a tie."
    }
    else if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
        computerScore++;
        return alert("You lose, paper beats rock!")
    }
    else if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        playerScore++;
        return alert("You win, rock beats scissors!")
    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
        computerScore++;
        return alert("You lose, scissors beats paper!")
    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        playerScore++;
        return alert("You win, paper beats rock!")
    }
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {
        computerScore++;
        return alert("You lose, rock beats scissors!")
    }
    else {
        playerScore++;
        return alert("You win, scissors beats paper")
    }
};





/*function playGame() { {
        let playerScore = 0;
        let computerScore = 0;
        let playerChoice1 = getPlayerChoice();
        let computerChoice1 = getComputerChoice(choices);
        playRound(playerChoice1, computerChoice1);
        let playerChoice2 = getPlayerChoice();
        let computerChoice2 = getComputerChoice(choices);
        playRound(playerChoice2, computerChoice2)
        let playerChoice3 = getPlayerChoice();
        let computerChoice3 = getComputerChoice(choices);
        playRound(playerChoice3, computerChoice3)
        let playerChoice4 = getPlayerChoice();
        let computerChoice4 = getComputerChoice(choices);
        playRound(playerChoice4, computerChoice4)
        let playerChoice5 = getPlayerChoice();
        let computerChoice5 = getComputerChoice(choices);
        playRound(playerChoice5, computerChoice5);
    }
    
    {
    if (playerScore > computerScore) {
        console.log("Congratulations! You Win!");
    }
    else if (playerScore < computerScore) {
        console.log("I beat you! Better luck next time!");
    }
    else {
        console.log("It's a tie!");
    } }
}

playGame()*/
    
