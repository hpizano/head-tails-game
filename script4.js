//there is going to be an array of numbers
//user has 5 guesses to try and guess one number in the array
// if the user gesses correctly the game ends
// if the user doesnt ge tit in 5 guesse
// tell user it is incorrect and display the correct numbers

function getRandArr() {
    const randArr = []

    for(let i=0; i<5; i++) {
        let rnd = Math.random() * 100 ;
        rnd = Math.round(rnd)
        randArr.push(rnd)
    }
    return randArr
}

function getGuess(){
    let guess = window.prompt('Enter a number from 1 to 100');
    guess = guess * 1;
    return guess;
}

function displayResult (arr, guess) {
    let guessRight = false;

    for( let i = 0 ; i < arr.length; i++){
        if(guess === arr[i]) {
            window.alert(`You got it! One of the numbers is ${arr[i]}`);
            guessRight = true;
            return guessRight
        }
    }
    return guessRight
}

function startGame() {
    let arr = getRandArr();
    let numGuess = 0 ;

    for(let i = 0; i<arr.length ; i++) {
        let guess = getGuess();
        let beatGame = displayResult(arr, guess)
        if(beatGame === true) {
            break;
        }
        numGuess++
    }
    if (numGuess === 5) {
        window.alert(`Nope. Here is the list ${arr}`)
    }
}

startGame
