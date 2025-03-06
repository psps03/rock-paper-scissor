//Human Choice
const options = document.querySelectorAll(".option");

//Game instructions
const howButton = document.querySelector("#how-button");

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

        setTimeout(playAgain, 500);
    } else if(humanChoice == "rock"){
        if (computerChoice == "scissor"){
            alert("Rock smashes scissor! You win!");
            humanScore += 1;

            //Display score on UI
            scoreH.textContent = humanScore;

            //Display score on console
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);

            setTimeout(playAgain, 500);
        } else{
            alert("Paper covers rock! You lose.")
            computerScore += 1;

            //Display score on UI
            scoreC.textContent = computerScore;

            //Display score on console
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);

            setTimeout(playAgain, 500);
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
            
            setTimeout(playAgain, 500);
        } else{
            alert("Scissors cut paper! You lose.");
            computerScore += 1;

            //Display score on UI
            scoreC.textContent = computerScore;

            //Display score on console
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
            
            setTimeout(playAgain, 500);
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
            
            setTimeout(playAgain, 500);
        } else{
            alert("Rock smashes scissor! You lose.");
            computerScore += 1;

            //Display score on UI
            scoreC.textContent = computerScore;

            //Display score on console
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore);
            
            setTimeout(playAgain, 500);
        }
    }
};

function playGame(){
    //Get Human's choice
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
};

//Ask user if they want to play again
function playAgain(){
    const text = "Do you still want to play?";

    //Reset options
    if (confirm(text) == true){
        paperH.src = "./icons/paper.png";
        scissorH.src = "./icons/scissor.png";
        rockH.src = "./icons/rock.png";

        paperC.src = "./icons/paper.png";
        scissorC.src = "./icons/scissor.png";
        rockC.src = "./icons/rock.png";
    } else{
        alert("Game over!");

        paperH.src = "./icons/paper.png";
        scissorH.src = "./icons/scissor.png";
        rockH.src = "./icons/rock.png";

        paperC.src = "./icons/paper.png";
        scissorC.src = "./icons/scissor.png";
        rockC.src = "./icons/rock.png";

        scoreC.textContent = 0;
        scoreH.textContent = 0;
    }
}

//How to play pop up
howButton.addEventListener("click", () => {
    alert("Game Instructions:\nClick either rock, paper, or scissor"
    + "\n\nRemember:\nRock smashes scissors.\nPaper covers rock.\nScissors cut paper."
    + "\n\n Have fun!");
});

playGame();