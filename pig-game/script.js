'use strict';

//Steps
// 1. Change player scores to 0 and make dice disappear
// 2. Show dice when game start


// Selecting Elements
// getElementById is another way to get the element from HTML and it is a little faster than querySelector
// # is for id, . is for class
// Total score
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// Current score
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// // My btnNew Codes
// // Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// let scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;
// // Set the state of the game
// // My btnNew Codes

let scores, currentScore, activePlayer, playing;

const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

const switchPlayers = function() {
        // Swtich to next player (if roll 1)
        document.getElementById(`current--${activePlayer}`).textContent = 0; // Change score to 0 before switching player
        currentScore = 0; // Reset the current score to 0 else it keep adding on
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}


// Rolling dice functionality
btnRoll.addEventListener('click', function(){
    if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if(dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0El.textContent = currentScore; // CHANGE LATER

    } else {
        switchPlayers();
    }
}
});


//Holding the value
btnHold.addEventListener('click', function(){
    if (playing) {
    // 1. Add current score to avtive player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // Display the current score in score


    // 2. Check if player's score is >= 100
    if(scores[activePlayer] >= 10) {
    // Finish the game
    playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        // Change background to player--winner to indicate winner
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        // Remove this because player has won. We don't need to switch player anymore
        diceEl.classList.add('hidden');
        // Hide dice when a player wins
} else {
    // Switch to the next player
    switchPlayers();
}
}
});

btnNew.addEventListener('click', init);


// function() {
    
//     // My codes @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//     playing = true;
//     currentScore = 0;
//     scores = [0, 0];

//     document.getElementById('current--0').textContent = 0;
//     document.getElementById('current--1').textContent = 0;
//     document.getElementById('score--0').textContent = 0;
//     document.getElementById('score--1').textContent = 0;
//     document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
//     // Remove black winning background
//     document.querySelector(`.player--0`).classList.add('player--active');
//     // Add the white background to player 1
//     // My codes @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// }