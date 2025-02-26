//Paper
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => getHumanChoice("paper"));

//Scissor
const sciBtn = document.querySelector("#scissor");
sciBtn.addEventListener("click", () => getHumanChoice("scissor"));

//Rock
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => getHumanChoice("rock"));

//Images
const paperH = document.querySelector("#paperH");
const scissorH = document.querySelector("#scissorH");
const rockH = document.querySelector("#rockH");

const paperC = document.querySelector("#paperC");
const scissorC = document.querySelector("#scissorC");
const rockC = document.querySelector("#rockC");

//Scores
let scoreH = document.querySelector("#human-score");
let humanScore = parseInt(scoreH);
let scoreC = document.querySelector("computer-score");
let computerScore = parseInt(scoreC);

//Get user's choice
function getHumanChoice(choice){
    if(choice == "paper"){
        paperH.src = "./icons/paper-selected.png";
    } else if(choice == "scissor"){   
        scissorH.src = "./icons/scissor-selected.png";
    } else{ 
        rockH.src = "./icons/rock-selected.png";
    }

    console.log("You chose: " + choice);
    return choice;
};

//Get computer's choice
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3); //Generates a number between 0 to 2
    let computerChose = "";
    if (computerChoice == 0){
        computerChose = "rock";
        rockC.src = "./icons/rock-selected.png";
    } else if(computerChoice == 1){
        computerChose = "paper";
        paperC.src = "./icons/paper-selected.png";
    } else{
        computerChose = "scissor";
        scissorC.src = "./icons/scissor-selected.png";
    }

    console.log("Computer: " + computerChose)
    return computerChose;
};

//Play a round
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        alert("It's a tie");
        console.log("Your score: " + humanScore)
        console.log("Computer score: " + computerScore);
    } else if(humanChoice == "rock"){
        if (computerChoice == "scissor"){
            alert("Rock smashes scissor! You win!");
            humanScore += 1;
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        } else{
            alert("Paper covers rock! You lose.")
            computerScore += 1;
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        }
    } else if(humanChoice == "paper"){
        if (computerChoice == "rock"){
            alert("Paper covers rock! You win!");
            humanScore +=  1;
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        } else{
            alert("Scissors cut paper! You lose.");
            computerScore += 1;
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        }
    } else if (humanChoice = "scissor"){
        if (computerChoice == "paper"){
            alert("Scissors cut paper! You win!");
            humanScore += 1;
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        } else{
            alert("Rock smashes scissor! You lose.");
            computerScore += 1;
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        }
    }
};

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
};