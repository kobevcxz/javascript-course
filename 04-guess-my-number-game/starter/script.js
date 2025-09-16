'use strict';

// ======= Constants =======
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// ======= Cached Selectors =======
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// ======= UI Helper Functions =======
function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}

// ======= Game State =======
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

console.log('🔐 Secret number at start:', secretNumber);

// ======= Game Reset Functions =======
function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  console.log('🔄 Game reset! New secret number:', secretNumber);
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('#222');
  numberEl.style.width = '15rem';
  guessInputEl.focus();
}

// ======= Initial Render =======
renderInitialUI();

// ======= Event Listeners =======

// Check Button Logic
checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);
  console.log('🎯 Player guessed:', guess);

  if (!guess) return setMessage('⛔ No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    return setMessage(
      `⚠️ Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );
  }

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('#60b347');
    numberEl.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }

    disablePlay(true);
    clearInput();
    return;
  }

  // Wrong Guess
  score--;
  setScore(score);
  if (score < 1) {
    setMessage('💥 You lost the game!');
    setNumber(secretNumber);
    setBackground('#d32f2f');
    disablePlay(true);
    clearInput();
  } else {
    setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  }
});

// Again Button Logic
againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});

// Enter Key = Submit Guess
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});
