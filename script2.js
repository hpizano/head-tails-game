function getFlip() {
    let rnd = Math.round(Math.random());
    return rnd;
  }
  
  
  function getGuess(num) {
    let guess = window.prompt(`Please select 0 or 1.`);
    return parseInt(guess);
  }
  
  function displayResult(){
    if ( guess !== 0 && guess !== 1) {
      console.log(`Your guess was ${guess}. Flip was ${flip}. Your guess is invalid. Either a 0 or 1 is allowed BOZO.`);
    }
    else if ( guess === flip ) {
      console.log(`Your guess was ${guess}. Flip was ${flip}. You are WINNERRRR`);
    }
    else {
      console.log(`Your guess was ${guess}. Flip was ${flip}. You are a BOZOOOO`);
      
    }
  }
  
  let guess = getGuess();
  let flip = getFlip();
  
  displayResult(guess, flip);
  
  guess = getGuess();
  flip = getFlip();
  
  displayResult(guess, flip);