'use strict';
/* 
//Uses .textContent because computer will generate the value
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// Uses .value because user have to input the value and it is contain within a <input> tag in html
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber); // Can hide this

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No number!');
  } // when player wins
  else if (guess === secretNumber) {
    displayMessage('Correct number, you win!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Highscore
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
  } // when guess is too high
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.guess').value = '';

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
