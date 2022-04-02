'use strict';
/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

//Uses .textContent because computer will generate the value
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// Uses .value because user have to input the value and it is contain within a <input> tag in html
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber); // Can hide this 

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    // When there is no input
    if(!guess) {
        // document.querySelector('.message').textContent = 'No Number!';
        displayMessage('No number!');
    } // when player wins
        else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct number, you win!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Highscore
        if(score > document.querySelector('.highscore').textContent) {
            document.querySelector('.highscore').textContent = score;
         } //else {
        //     score = score;
        // }

    }   // when guess is too high
    else if(guess !== secretNumber) {
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
        displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
        score--;
        document.querySelector('.score').textContent = score;
    }
    // Before refactor
    //     else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lose the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }   // when guess is too low
    //     else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lose the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    // document.querySelector('.number').textContent = 
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector('.guess').value = '';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';

});




/* let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

let score = 20;
document.querySelector('.score').textContent = score;
const message = function(msg){
    document.querySelector('.message').textContent = msg;
}


//If no guess
document.querySelector('.check').addEventListener('click', function() {
    if(!document.querySelector('.guess').value) {
        message('Choose a number');
        // document.querySelector('.message').textContent = 'Choose a number';
    } else if(document.querySelector('.guess').value > secretNumber) {
        // document.querySelector('.message').textContent = 'Too high';
        message('Too high');
        score--;
        document.querySelector('.score').textContent = score;

    } else if(document.querySelector('.guess').value < secretNumber) {
        // document.querySelector('.message').textContent = 'Too Low';
        message('Too low');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        message('You win');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.highscore').textContent = score;
        if(document.querySelector('.score').textContent > document.querySelector('.highscore').textContent) {
            document.querySelector('.highscore').textContent = score;
        } else {
            score = score;
        }
    }
});


document.querySelector('.again').addEventListener('click', function() {
    message('Start guessing...');
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

}) */