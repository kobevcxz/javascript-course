'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

// DOM Element Selection
console.log('=== DOM ELEMENT SELECTION ===');

const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');

// Initial setup for guessEl
guessEl.value = 23;

// Reading and Modifying Element Content
console.log('Current message:', messageEl.textContent);
console.log('Current score:', scoreEl.textContent);

messageEl.textContent = 'Hello from JavaScript!';
scoreEl.textContent = '15';

console.log('Elements updated!');

// Reading and Setting Input Value
console.log('Current guess:', guessEl.value);

guessEl.value = '10';
console.log('Guess set to:', guessEl.value);

// Element Manipulation Practice
numberEl.textContent = '15';
highscoreEl.textContent = '100';
guessEl.value = '7';

console.log('Number:', numberEl);
console.log('Highscore:', highscoreEl);
console.log('Guess:', guessEl);

// Game State Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number:', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
console.log('Game state initialized!');
console.log('Secret:', secretNumber, 'Score:', score, 'Highscore:', highscore);

let playerName = 'Player';
let attempts = 0;
let gameActive = true;
let easySecret = Math.trunc(Math.random() * 10) + 1;
console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);
console.log('Easy secret number:', easySecret);

document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});

const guess = Number(document.querySelector('.guess').value);
console.log('Input as string:', document.querySelector('.guess').value);
console.log('Input as number:', Number(document.querySelector('.guess').value));
console.log('String comparison:', '15' === 15);
console.log('Number comparison:', 15 === 15);

console.log('🎮 Game Foundation Complete!');
console.log('✅ DOM element selection working');
console.log('✅ Game state variables initialized');
console.log('✅ Event listeners responding');
console.log('✅ Basic game logic implemented');
console.log('Ready for advanced features in Hour 2!');
console.log('Secret number for testing:', secretNumber);
console.log('Try to guess it!');
