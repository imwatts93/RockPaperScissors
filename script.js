//Make a function that randomly selects an element from an array//
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//Make a list of choices//
let choices = ["Rock", "Scissors", "Paper"];
//Ask for player input//

let playerChoice = "";

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn")

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
    let playerChoice = "rock";
    console.log(playerChoice);
    let computerChoice = getComputerChoice(choices);
    playRound(playerChoice, computerChoice);
    console.log("Computer: " + computerScore);
    console.log("Player: " + playerScore);
});

paperBtn.addEventListener("click", () => {
    let playerChoice = "paper";
    let computerChoice = getComputerChoice(choices);
    playRound(playerChoice, computerChoice);
    console.log("Computer: " + computerScore);
    console.log("Player: " + playerScore);
});

scissorsBtn.addEventListener("click", () => {
    let playerChoice = "scissors";
    let computerChoice = getComputerChoice(choices);
    playRound(playerChoice, computerChoice);
    console.log("Computer: " + computerScore);
    console.log("Player: " + playerScore);
});
/*function that plays a round of Rock Scissors Paper*/
function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() == computerChoice.toLowerCase()) {
        return alert("It's a tie.")
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
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        playerScore++;
        return alert("You win, scissors beats paper")
    }
    else
        return alert("That's not a valid choice!")
};

let roundCount = 0



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
    
