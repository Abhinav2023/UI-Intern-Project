function computerPlay(){
        let number=Math.floor((Math.random()*3)+1);
        if(number===1) return "rock";
        else if(number==2) return "scissor";
        else return "paper";
}

let playerWinCount=0;
function playRound(playerSelection,computerSelection){
        if(playerSelection===computerSelection) return "Draw";
        if(playerSelection==="rock"){
                if(computerSelection==='paper'){
                        playerWinCount--;
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
                        playerWinCount--;
                        return "Computer Win";
                }
        }else {
                if(computerSelection==="rock"){
                        playerWinCount++;
                        return "Player Win";
                }
                else{
                        playerWinCount--;
                        return "Computer Win";
                }
        }
}


for(let i=0;i<5;i++){
        let playerSelection =prompt("Please enter your move","rock").toLowerCase();
        let computerSelection=computerPlay();
        console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection));
}

if(playerWinCount>0){
        console.log("Finally Player Win");
}else console.log("Finally Computer Win");

