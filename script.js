//Human Choice
const options = document.querySelectorAll(".option");

//Images
const paperH = document.querySelector("#paperH");
const scissorH = document.querySelector("#scissorH");
const rockH = document.querySelector("#rockH");

const paperC = document.querySelector("#paperC");
const scissorC = document.querySelector("#scissorC");
const rockC = document.querySelector("#rockC");

//Scores
let scoreH = document.querySelector("#human-score");
let humanScore = 0;
let scoreC = document.querySelector("#computer-score");
let computerScore = 0;

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

    return computerChose;
};

//Play a round
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        alert("It's a tie");

        //Display score on UI
        scoreH.textContent = humanScore;
        scoreC.textContent = computerScore;

        //Display score on console
        console.log("Your score: " + humanScore)
        console.log("Computer score: " + computerScore);
    } else if(humanChoice == "rock"){
        if (computerChoice == "scissor"){
            alert("Rock smashes scissor! You win!");
            humanScore += 1;

            //Display score on UI
            scoreH.textContent = humanScore;

            //Display score on console
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        } else{
            alert("Paper covers rock! You lose.")
            computerScore += 1;

            //Display score on UI
            scoreC.textContent = computerScore;

            //Display score on console
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        }
    } else if(humanChoice == "paper"){
        if (computerChoice == "rock"){
            alert("Paper covers rock! You win!");
            humanScore +=  1;

            //Display score on UI
            scoreH.textContent = humanScore;

            //Display score on console
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        } else{
            alert("Scissors cut paper! You lose.");
            computerScore += 1;

            //Display score on UI
            scoreC.textContent = computerScore;

            //Display score on console
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        }
    } else if (humanChoice = "scissor"){
        if (computerChoice == "paper"){
            alert("Scissors cut paper! You win!");
            humanScore += 1;

            //Display score on UI
            scoreH.textContent = humanScore;

            //Display score on console
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        } else{
            alert("Rock smashes scissor! You lose.");
            computerScore += 1;

            //Display score on UI
            scoreC.textContent = computerScore;

            //Display score on console
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
        }
    }
};

/* function playGame(){
    options.forEach(option => {
        option.addEventListener("click", () => {
            const humanSelection = option.id;
            
            //Change image to selected
            if (humanSelection == "paper"){
                paperH.src = "./icons/paper-selected.png";
            } else if (humanSelection == "scissor"){
                scissorH.src = "./icons/scissor-selected.png";
            } else{
                rockH.src = "./icons/rock-selected.png";
            }

            const computerSelection = getComputerChoice();

            //Display choices
            console.log("You: " + humanSelection);
            console.log("Computer: " + computerSelection);

            playRound(humanSelection, computerSelection);

        });
    });
}; */


    options.forEach(option => {
        option.addEventListener("click", () => {
            const humanSelection = option.id;
            
            //Change image to selected
            if (humanSelection == "paper"){
                paperH.src = "./icons/paper-selected.png";
            } else if (humanSelection == "scissor"){
                scissorH.src = "./icons/scissor-selected.png";
            } else{
                rockH.src = "./icons/rock-selected.png";
            }

            const computerSelection = getComputerChoice();

            //Display choices
            console.log("You: " + humanSelection);
            console.log("Computer: " + computerSelection);

            playRound(humanSelection, computerSelection);

        });
    });

/* for(let tries = 1; tries <= 5; tries++){
    playGame();
} */