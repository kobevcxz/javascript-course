'use strict';

// Section 1: DOM Element Selection & Caching
// Select the modal element
const modalEl = document.querySelector('.modal');

// Select the overlay element
const overlayEl = document.querySelector('.overlay');

// Select the close button
const btnCloseModalEl = document.querySelector('.close-modal');

// Select ALL the open buttons using querySelectorAll
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Verify our selections worked correctly
console.log('Open buttons:', btnsOpenModalEl.length);

// Section 2: Open/Close Helpers with Class Toggling
// Function to open the modal
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

// Function to close the modal
const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// Section 3: Refactor, Recap, and Q&A
// Attach event listeners to all open modal buttons
for (let i = 0; i < btnsOpenModalEl.length; i++) {
  btnsOpenModalEl[i].addEventListener('click', openModal);
}

// Attach event listener to close button
btnCloseModalEl.addEventListener('click', closeModal);

// Attach event listener to overlay
overlayEl.addEventListener('click', closeModal);
