console.log("Welcome to console RPS");
let humanScore = 0;
let computerScore = 0;
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
    let choise = prompt("What is your choise rock, paper, scissors");
    let cleanChoise = choise.toLowerCase();

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
    if((humanChoise === "rock" && compChoise === "scissors") || (humanChoise === "scissors" && compChoise === "paper") || (humanChoise === "paper" && compChoise === "rock")){
        humanScore++;
        console.log(`human choise is ${humanChoise} computer choise is ${compChoise} so human win`);
    }
    else if(compChoise === humanChoise){
        console.log(`human choise is ${humanChoise} computer choise is ${compChoise} so it's a draw`);
    }
    else{
        computerScore++;
        console.log(`human choise is ${humanChoise} computer choise is ${compChoise} so human lost`);
    }

}


function playGame(){
    for(let i = 0; i<5; i++){
        playRound(getHumanChoise(), getComputerChoise());
    }
    console.log(`human score is ${humanScore} computer score is ${computerScore}`);
}
playGame();



