/*
    Rock Paper Scissors
    Let's play! You have to return which player won! In case of a draw return Draw!.

    Examples(Input1, Input2 --> Output):

*/

/*** My solution ***/

const rps = (p1, p2) => {
  if(p1 != p2){
    if(p1 == "scissors") {
      if(p2 == "paper"){
        return "Player 1 won!";
      }
      else if(p2 == "rock"){
        return "Player 2 won!";
      }
    }
    else if (p1 == "rock"){
      if(p2=="scissors"){
        return "Player 1 won!";
      }
      else if (p2 == "paper"){
        return "Player 2 won!";
      }
    }
    else if (p1 == "paper"){
      if(p2 == "rock"){
        return "Player 1 won!";
      }
      else if( p2 == "scissors"){
        return "Player 2 won!";
      }
    }
  }
  else{
    return "Draw!";
  }
  
};

/*** Other solutions ***/

/** 1 **/

const rps1 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};

/** 2 **/
const rps2 = (p1, p2) => {
  if (p1 == p2)
    return 'Draw!';
    
   if (p1 == 'rock' && p2 == 'scissors') 
     return 'Player 1 won!'
   else if (p1 == 'scissors' && p2 == 'paper') 
     return 'Player 1 won!'
   else if (p1 == 'paper' && p2 == 'rock') 
     return 'Player 1 won!'
   else
     return 'Player 2 won!';
};

/** 3 **/
const rps3 = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}