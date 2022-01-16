let playerSelection, playerWinCount = 0, computerWinCount = 0;;
function computerPlay(){
        let number = Math.floor ( ( Math.random() * 3) + 1);
        switch (number) {
                case 1:
                        return "rock";
                        break;
                case 2: 
                        return "scissor";
                        break;
                case 3: 
                        return "paper";
        }
}

function playRound ( playerSelection , computerSelection ) {
        if ( playerSelection === computerSelection ) return "Draw";
        if ( playerSelection === "rock" ) {
                if ( computerSelection === 'paper' ) {
                        computerWinCount++ ;
                        return "Computer Win" ;
                } 
                playerWinCount++ ;
                return "Player Win" ;
        }else if ( playerSelection === 'scissor' ) {
                if ( computerSelection === "paper" ) {
                        playerWinCount++ ;
                        return "Player Win" ;
                }
                computerWinCount++ ;
                return "Computer Win" ;
        }else {
                if ( computerSelection === "rock" ) {
                        playerWinCount++ ;
                        return "Player Win" ;
                }
                computerWinCount++ ;
                return "Computer Win" ;
        }
}

function showResults () {
        const res = document.querySelector( '#result' );
        if ( playerWinCount === 5 ) {
                res.textContent = "Finally Player Win" ;
        } else {
                res.textContent = "Finally Computer Win" ;
        }
        playerWinCount = 0, computerWinCount = 0 ;
}



function makeMoveAndShowResult () {
        const playercnt = document.querySelector( '#playerCount' ) ;
        const computercnt = document.querySelector( '#computerCount' ) ;
        let computerSelection = computerPlay() ;
        
        console.log(computerSelection);

        playRound ( playerSelection , computerSelection ) ;
        playercnt.textContent = "Player - " + playerWinCount ;
        computercnt.textContent = "Computer - " + computerWinCount ;
}

function paperButtonOnClickHandler () {
        const btnPaper = document.querySelector( '#paper' );
        btnPaper.addEventListener ( 'click' ,() => {
                playerSelection = "paper";
                makeMoveAndShowResult() ;
                if ( computerWinCount === 5 || playerWinCount === 5) {
                        showResults();
                }
        })
} 

function rockButtonOnClickHandler () {
        const btnRock = document.querySelector( '#rock' );
        btnRock.addEventListener( 'click' ,() => {
                playerSelection = "rock" ;
                makeMoveAndShowResult() ;
                if ( computerWinCount === 5 || playerWinCount === 5 ) {
                        showResults();
                }
        })
}
function scissorButtonOnClickHandler () {
        const btnScissor = document.querySelector( '#scissor' ) ;
        btnScissor.addEventListener( 'click' , () => {
                playerSelection = "scissor" ;
                makeMoveAndShowResult() ;
                if ( computerWinCount === 5 || playerWinCount === 5 ) {
                        showResults();
                }
        })
}


// If Paper is selected
paperButtonOnClickHandler();

// If rock is selected
rockButtonOnClickHandler();

// If scissor is selected
scissorButtonOnClickHandler();


