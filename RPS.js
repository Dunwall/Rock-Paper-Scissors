// 1. CREATE COMPUTER FUNCTION THAT GENERATES RANDOM VALUE IN RESPONSE
// TO USER
// 2. CREATE PLAYER FUNCTION THAT RETURNS PLAYER'S INPUT
// 3. CRAFT RESPONSES ACCORDING TO THE GAME'S RULES
// 4. INCREMENT AFTER EACH PLAY, JUST OUTPUT FINAL SCORE FOR NOW
// 5. IMPORTANT! MAKE A LOOP SO USER CAN PLAY 5 TIMES

// VARIABLES FOR SCORES
let humanScore=0;
let computerScore=0;
// FUNCTION TO GET RANDOM NUMBER FOR COMPUTER
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

// COMPUTER OUTPUTS CHOICE, 0,1,2=>Rock, Paper, Scissors
function getComputerChoice(){
    const choice=getRandomInt(3);
    if(choice===0){
        console.log('ROCK');
    }
    else if(choice===1){
        console.log('PAPER');
    }
    else{
        console.log('SCISSORS');
    }
    return choice;
}

// HUMAN ENTERS CHOICE, NO ERROR CHECKING YET
function getHumanChoice(){
    let humanChoice=prompt("Please Enter Your Choice: ");
    let normalized=humanChoice.toLowerCase();
    console.log(normalized);
    if(humanChoice=='rock'){
        return 0;
    }
    else if(humanChoice=='paper'){
        return 1;
    }
    else if(humanChoice=='scissors'){
        return 2;
    }
    else{
        prompt("Invalid input!");
        return getHumanChoice();
    }
}

// EACH ROUND WHERE HUMAN PLAYS AND COMPUTER PLAYS AND OUTPUTS
// A MESSAGE IF DRAW OR NOT
function playRound(humanSelection,computerSelection){
    if(humanSelection==1 && computerSelection==1 ||
        humanSelection==0 && computerSelection==0 ||
        humanSelection==2 && computerSelection==2
    ){
        console.log("It's a Draw!");
        alert('Draw');
    }
    else if(humanSelection==1 && computerSelection==0){
        console.log("Paper Beats Rock!");
        alert('human won with paper');
        humanScore++;
    }
    else if(humanSelection==2 && computerSelection==1){
        console.log("Scissors Beats Paper!");
        alert('human won with scissors');
        humanScore++;
    }
    else if(humanSelection==0 && computerSelection==2){
        console.log("Rock Beats Scissors");
        alert('human won with rock');
        humanScore++;
    }
    else if(computerSelection==0 && humanSelection==2){
        console.log("Rock Beats Scissors!");
        alert('Computer won with rock');
        computerScore++;
    }
    else if(computerSelection==1 && humanSelection==0){
        console.log("Paper Beats Rock!");
        alert('Computer won with paper');
        computerScore++;
    }
    else if(computerSelection==2 && humanSelection==1){
        console.log("Scissors Beats Paper!");
        alert('Computer won with scissors');
        computerScore++;
    }
}

function playGame(){
    // CALLING EACH FUNCTION
    const humanSelection=getHumanChoice();
    const computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection);
    alert(`Human: ${humanScore} , Computer: ${computerScore}`);
}
for(let i=0;i<5;i++){
playGame();
}