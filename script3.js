function getFlip(){
    let rnd = Math.random();
    rnd = Math.round(rnd);
    return rnd;
}

function getGuess(){
    let guess = window.prompt('enter a 1 or 0')
    guess = guess * 1;
    return guess;
}

function displayResult(flip, guess){
    if(guess !== 1 && guess !==0){
        console.log(`Guess was ${guess}. This is not valid`);
        window.alert(`Guess was ${guess}. This is not valid`)
    }
    else if(flip === guess){
        console.log(`Guess was ${guess}. And flip was ${flip}. Winner!`);
        window.alert(`Guess was ${guess}.And flip was ${flip}. Winner!`)
    }
    else {
        console.log(`Guess was ${guess}. And flip was ${flip}. Loser!`);
        window.alert(`Guess was ${guess}. And flip was ${flip}. Loser!`)
    }
}
function startGameFor() {
    // I want to play the game 5 times //
    for(let i = 0; i < 5 ; i++) {
        let flip = getFlip();
        let guess = getGuess();
        displayResult(flip,guess);
    }
}
// startGameFor()

function playAgain(){
    const playAgainVar = window.confirm("Play Again?");
    return playAgainVar;
}

function startGameFor() {
    // Determine the amount of time you want to play //
    let playing = true;
    while(playing) {
        let flip = getFlip();
        let guess = getGuess();
        displayResult(flip,guess);
        playing = playAgain();
    }
}
startGameFor()

// const flip = getFlip();
// const guess = getGuess();
// console.log(guess);