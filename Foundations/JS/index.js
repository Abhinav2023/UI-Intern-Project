function computerPlay(){
        let number=Math.floor((Math.random()*3)+1);
        if(number===1) return "rock";
        else if(number==2) return "scissor";
        else return "paper";
}

let playerWinCount=0,computerWinCount=0;
function playRound(playerSelection,computerSelection){
        if(playerSelection===computerSelection) return "Draw";
        if(playerSelection==="rock"){
                if(computerSelection==='paper'){
                        computerWinCount++;
                        return "Computer Win";
                } 
                else{
                        playerWinCount++;
                        return "Player Win";
                }
        }else if(playerSelection==='scissor'){
                if(computerSelection==="paper"){
                        playerWinCount++;
                        return "Player Win";
                }
                else{
                        computerWinCount++;
                        return "Computer Win";
                }
        }else {
                if(computerSelection==="rock"){
                        playerWinCount++;
                        return "Player Win";
                }
                else{
                        computerWinCount++;
                        return "Computer Win";
                }
        }
}

function showResults(){
        const res=document.querySelector('#result');
        if(playerWinCount===5){
                res.textContent="Finally Player Win";
        }else{
                res.textContent="Finally Computer Win"
        }
        playerWinCount=0,computerWinCount=0;
}


let playerSelection;
function makeMoveAndShowResult(){
        let computerSelection=computerPlay();
        console.log(computerSelection);
        playRound(playerSelection,computerSelection);
        const playercnt=document.querySelector('#playerCount');
        playercnt.textContent="Player - "+playerWinCount;
        const computercnt=document.querySelector('#computerCount');
        computercnt.textContent="Computer - "+computerWinCount;
}

// If Paper is selected
const btnPaper=document.querySelector('#paper');
btnPaper.onclick=()=>{
        playerSelection="paper";
        makeMoveAndShowResult();
        if(computerWinCount===5 || playerWinCount===5){
                showResults();
        }
}

// If rock is selected
const btnRock=document.querySelector('#rock');
btnRock.onclick=()=>{
        playerSelection="rock";
        makeMoveAndShowResult();
        if(computerWinCount===5 || playerWinCount===5){
                showResults();
        }
}

// If scissor is selected
const btnScissor=document.querySelector('#scissor');
btnScissor.onclick=()=>{
        playerSelection="scissor";
        makeMoveAndShowResult();
        if(computerWinCount===5 || playerWinCount===5){
                showResults();
        }
}



