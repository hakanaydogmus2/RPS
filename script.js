console.log("Welcome to console RPS");
let humanScore = 0;
let computerScore = 0;
let userChoise;
const options = {
    scissors: "assets/rps-icons/kelebek.jpeg",
    paper: "assets/rps-icons/pap.jpeg",
    rock: "assets/rps-icons/rock.png"
};
changePlayerName();
document.querySelectorAll("#btn").forEach(button => {
    button.addEventListener("click", (event)=>{
        userChoise = event.target.value;
        playRound(getHumanChoise(), getComputerChoise());
    })
})
function changePlayerName(){
    let tempName = prompt("what is your name");
    document.querySelector("#playerName").textContent = tempName;
}
function getComputerChoise(){
    let randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function getHumanChoise(){

    let cleanChoise = userChoise.toLowerCase();
    switch (cleanChoise) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
    
        default:
            return "it is not a valid choise";
    }
}


function playRound(humanChoise, compChoise){
    const playerChooseImg = document.querySelector("#playerRpsImg");
    playerChooseImg.src = options[humanChoise];
    playerChooseImg.style.display = "block";
    const enemyChooseImg = document.querySelector("#enemyRpsImg");
    enemyChooseImg.src = options[compChoise];
    enemyChooseImg.style.display = "block";
    if((humanChoise === "rock" && compChoise === "scissors") || (humanChoise === "scissors" && compChoise === "paper") || (humanChoise === "paper" && compChoise === "rock")){
        humanScore++;
    }
    else if(compChoise === humanChoise){
        console.log(`human choise is ${humanChoise} computer choise is ${compChoise} so it's a draw`);
    }
    else{
        computerScore++;
        console.log(`human choise is ${humanChoise} computer choise is ${compChoise} so human lost`);
    }
    showScores();
}

function showScores(){
    const playerScore = document.querySelector("#player-score");
    const enemyScore = document.querySelector("#enemy-score");
    console.log(humanScore);
    console.log(computerScore);
    playerScore.textContent = humanScore;
    enemyScore.textContent = computerScore;
}


function playGame(){
    for(let i = 0; i<5; i++){
        playRound(getHumanChoise(), getComputerChoise());
    }
    console.log(`human score is ${humanScore} computer score is ${computerScore}`);
}




