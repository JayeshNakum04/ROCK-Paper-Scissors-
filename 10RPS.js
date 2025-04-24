let score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

displayScore();

function movebyPlayer(playerMove){

const computerMove = movebyComputer();
let result  = '';
if(playerMove === 'scissors'){
    if (computerMove === 'rock'){
    result = 'You Lose.';
    }
    else if(computerMove === 'paper'){
    result = 'You win.';
    }
    else if(computerMove === 'scissors'){
    result = 'Tie.'; 
  }

}else if(playerMove === 'paper'){
    if (computerMove === 'rock'){
    result = 'You win.';
   }
   else if(computerMove === 'paper'){
    result = 'Tie.';
   }
   else if(computerMove === 'scissors'){
    result = 'You Lose.'; 
  } 
  
}else if(playerMove === 'rock'){
   if (computerMove === 'rock'){
    result = 'Tie.';
   }
   else if(computerMove === 'paper'){
    result = 'You Lose.';
   }
   else if(computerMove === 'scissors'){
    result = 'You win.'; 
  } 
}

if(result === 'You win.'){
        score.Wins ++;
 }else if(result === 'You Lose.'){
        score.Losses ++;
 }else if(result === 'Tie.'){
        score.Ties ++;
 }

 function movebyComputer(){
    const  randomNumber = Math.random();

    let computerMove  = '';

    if(randomNumber >= 0 && randomNumber < 1/3){computerMove = 'rock' ;}
    else if(randomNumber >= 1/3 &&  randomNumber < 2/3)
    {computerMove = 'paper';}
    else if(randomNumber >= 2/3 && randomNumber < 1)
    {computerMove = 'scissors';}

    return computerMove;
   }



 
displayScore();
 
document.querySelector('.js-outcome').innerHTML = `${result}`;
document.querySelector('.js-selected').innerHTML = ` You 
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    computer`;
}

function displayScore(){
    document.querySelector('.js-score').innerHTML = ` Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
};