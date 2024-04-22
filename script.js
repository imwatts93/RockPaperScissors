/*Make a function that randomly selects an element from an array*/
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
/*Make a list of choices*/
let choices = ["Rock", "Scissors", "Paper"];
let computerChoice = getComputerChoice(choices);
let computerChoice1 = getComputerChoice(choices);
let computerChoice2 = getComputerChoice(choices);
let computerChoice3 = getComputerChoice(choices);
let computerChoice4 = getComputerChoice(choices);
let computerChoice5 = getComputerChoice(choices);
console.log(computerChoice)
/*Ask for player input*/
function getPlayerChoice() {
    let playerChoice = prompt("Enter rock, scissors, or paper: ");
    return playerChoice
}
let playerChoice = getPlayerChoice()
console.log(playerChoice)
/*function that plays a round of Rock Scissors Paper*/
function playRound(playerChoice, computerChoice) {
    if (playerChoice.toUpperCase() == computerChoice.toUpperCase())
        return "It's a tie."
    else if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper")
        return "You lose, paper beats rock!"
    else if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors")
        return "You win, rock beats scissors!"
    else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors")
        return "You lose, scissors beats paper!"
    else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock")
        return "You win, paper beats rock!"
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock")
        return "You lose, rock beats scissors!"
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper")
        return "You win, scissors beats paper"
    else
        return "That's not a valid choice!"
}

// potential problem. I need to study more about defining functions and calling functions//
let playerScore = 0;
let computerScore = 0;
function playGame() {
    playerScore = 0;
    computerScore = 0;
    let match = playRound(playerChoice, computerChoice)

    playRound(prompt, computerChoice1)
    if (match.includes("win")) {
        playerScore++;
    }
    else if (match.includes("lose")) {
        computerScore++;
    }
    else (match.includes("tie"))
    playRound(playerChoice2, computerChoice2)
    if (match.includes("win")) {
        playerScore++;
    }
    else if (match.includes("lose")) {
        computerScore++;
    }
    else (match.includes("tie"))
    playRound(playerChoice3, computerChoice3)
    if (match.includes("win")) {
        playerScore++;
    }
    else if (match.includes("lose")) {
        computerScore++;
    }
    else (match.includes("tie"))
    playRound(playerChoice4, computerChoice4)
    if (match.includes("win")) {
        playerScore++;
    }
    else if (match.includes("lose")) {
        computerScore++;
    }
    else (match.includes("tie"))
    playRound(playerChoice5, computerChoice5)
    if (match.includes("win")) {
        playerScore++;
    }
    else if (match.includes("lose")) {
        computerScore++;
    }
    else (match.includes("tie"))
}


playGame()
console.log(playerScore)
console.log(computerScore)