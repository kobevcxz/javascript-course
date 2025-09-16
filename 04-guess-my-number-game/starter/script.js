'use strict';

const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

scoreEl.textContent = score;
highscoreEl.textContent = highscore;

// Log the initial secret number for testing
console.log('Initial secret number:', secretNumber);

checkBtn.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // This log will appear every time you click the "Check!" button
  console.log('Check button clicked! Player guessed:', guess);

  if (!guess) {
    messageEl.textContent = '⛔️ No number!';
    console.log('Message: No number');
  } else if (guess < 1 || guess > 20) {
    messageEl.textContent = 'Number must be between 1 and 20!';
    console.log('Message: Out of range');
  } else if (guess === secretNumber) {
    messageEl.textContent = '🎉 You won!';
    numberEl.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    console.log('Game status: Win!');

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
      console.log('New highscore:', highscore);
    }
    guessEl.disabled = true;
    checkBtn.disabled = true;
  } else if (score > 1) {
    messageEl.textContent =
      guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    score--;
    scoreEl.textContent = score;
    console.log('Guess is wrong. Score:', score);
  } else {
    messageEl.textContent = '💥 You lost the game!';
    scoreEl.textContent = 0;
    document.body.style.backgroundColor = '#d32f2f';
    console.log('Game status: Lose.');

    guessEl.disabled = true;
    checkBtn.disabled = true;
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('Game reset! New secret number:', secretNumber);

  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  scoreEl.textContent = score;
  guessEl.value = '';
  document.body.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';

  guessEl.disabled = false;
  checkBtn.disabled = false;
});
