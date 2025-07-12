let humanScore=0;
let computerScore=0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const final = document.querySelector('#final');
const firstImage = document.querySelector('.firstImage');
const secondImage = document.querySelector('.secondImage');
const thirdImage = document.querySelector('.thirdImage');

const arr = ["images/rock.jpg","images/paper.jpg","images/scissors.jpg"];

function appendImg(div,source){
    div.innerHTML = '';
    const img = document.createElement('img');
    img.src = source;
    div.appendChild(img);
}   

// 
function getRandomInt(max){
return Math.floor(Math.random()*max);
}

const div = document.createElement('div');
function getComputerChoice(){
    const choice=getRandomInt(3);
    if(choice===0){
        logResult('Computer played Rock');
        appendImg(thirdImage,arr[0]);
    }
    else if(choice===1){
        logResult('Computer Played Paper');
        appendImg(thirdImage,arr[1]);
    }
    else{
        logResult('Computer Played Scissors');
        appendImg(thirdImage,arr[2]);
    }
    return choice;
}
function playRound(humanSelection,computerSelection){
    if(humanSelection==1 && computerSelection==1 ||
        humanSelection==0 && computerSelection==0 ||
        humanSelection==2 && computerSelection==2
    ){
        logResult('Its a draw');
    }
    else if(humanSelection==1 && computerSelection==0){
        logResult('Human won with paper');
        humanScore++;
    }
    else if(humanSelection==2 && computerSelection==1){
        logResult('Human won with scissors');
        humanScore++;
    }
    else if(humanSelection==0 && computerSelection==2){
        logResult('Human won with rock');
        humanScore++;
    }
    else if(computerSelection==0 && humanSelection==2){
        logResult('Computer won with Rock');
        computerScore++;
    }
    else if(computerSelection==1 && humanSelection==0){
        logResult('Computer won with paper');
        computerScore++;
    }
    else if(computerSelection==2 && humanSelection==1){
        logResult('Computer won with scissors')
        computerScore++;
    }
}

function removeTransition(e){
    if(e.propertyName !== 'box-shadow')return;
    e.target.classList.remove('highlight');
}

function reset(){
    final.textContent = ' ';
    score.textContent = `Human: 0, Computer: 0`;
    humanScore = 0;
    computerScore = 0;
    results.innerHTML = ' ';
}

function logResult(text){
    results.textContent = text;
}

rock.addEventListener('click',()=>{
    playGame(0);
    rock.classList.add('highlight');
    appendImg(firstImage,arr[0]);
});
rock.addEventListener('transitionend',removeTransition);

paper.addEventListener('click',()=>{
    playGame(1);
    paper.classList.add('highlight');
    appendImg(firstImage,arr[1]);
});
paper.addEventListener('transitionend',removeTransition);

scissors.addEventListener('click',()=>{
    playGame(2);
    scissors.classList.add('highlight');
    appendImg(firstImage,arr[2]);
});
scissors.addEventListener('transitionend',removeTransition);

function playGame(humanSelection){
// CALLING EACH FUNCTION
const computerSelection=getComputerChoice();
playRound(humanSelection,computerSelection);
score.textContent= `Human: ${humanScore} , Computer: ${computerScore}`;
if(humanScore==5){
    final.textContent = 'You won!';
    setTimeout(reset,500);
}
if(computerScore==5){
    final.textContent = 'Computer Won!';
    setTimeout(reset,500);
}
}