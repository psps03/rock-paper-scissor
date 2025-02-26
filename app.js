// Get computer's choice
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3); //Generates a number between 0 to 2
    let computerChose = "";
    if (computerChoice == 0){
        computerChose = "rock";
    } else if(computerChoice == 1){
        computerChose = "paper";
    } else{
        computerChose = "scissor";
    }

    console.log("Computer: " + computerChose)

    return computerChose;
}

getComputerChoice();

// //Get user's choice
// function getHumanChoice(){
//     let humanChose = prompt("Choose between rock, paper, and scissor").toLowerCase();
//     console.log("Human: " + humanChose);
//     return humanChose;
// }

// let computerScore = 0;
// let humanScore = 0;

// //Play a round
// function playRound(humanChoice, computerChoice){
//     if (humanChoice == computerChoice){
//         console.log("It's a tie");
//         console.log("Your score: " + humanScore)
//         console.log("Computer score: " + computerScore);
//     } else if(humanChoice == "rock"){
//         if (computerChoice == "scissor"){
//             console.log("Rock smashes scissor! You win!");
//             humanScore += 1;
//             console.log("Your score: " + humanScore)
//             console.log("Computer score: " + computerScore);
//         } else{
//             console.log("Paper covers rock! You lose.")
//             computerScore += 1;
//             console.log("Your score: " + humanScore)
//             console.log("Computer score: " + computerScore);
//         }
//     } else if(humanChoice == "paper"){
//         if (computerChoice == "rock"){
//             console.log("Paper covers rock! You win!");
//             humanScore +=  1;
//             console.log("Your score: " + humanScore)
//             console.log("Computer score: " + computerScore);
//         } else{
//             console.log("Scissors cut paper! You lose.");
//             computerScore += 1;
//             console.log("Your score: " + humanScore)
//             console.log("Computer score: " + computerScore);
//         }
//     } else if (humanChoice = "scissor"){
//         if (computerChoice == "paper"){
//             console.log("Scissors cut paper! You win!");
//             humanScore += 1;
//             console.log("Your score: " + humanScore)
//             console.log("Computer score: " + computerScore);
//         } else{
//             console.log("Rock smashes scissor! You lose.");
//             computerScore += 1;
//             console.log("Your score: " + humanScore)
//             console.log("Computer score: " + computerScore);
//         }
//     }
// }

// function playGame(){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);

// }

// for(let tries = 1; tries <= 5; tries++){
//     playGame();
// }