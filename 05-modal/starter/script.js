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

// Handling an "Esc" keypress event
document.addEventListener('keydown', function (event) {
  console.log('A key was pressed:', event.key);

  if (event.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

// Add focus management variables
let lastFocusedButton = null;

// Enhance openModal function with focus management
const openModalWithFocus = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  // Move focus to the modal
  modalEl.focus();
  // Store which button opened the modal
  lastFocusedButton = document.activeElement;
};

// Enhance closeModal function to restore focus
const closeModalWithFocus = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  // Restore focus to the button that opened the modal
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

// Replace old event listeners with the focus-aware ones
btnsOpenModalEl.forEach(btn =>
  btn.addEventListener('click', openModalWithFocus)
);
btnCloseModalEl.addEventListener('click', closeModalWithFocus);
overlayEl.addEventListener('click', closeModalWithFocus);

// Add ARIA attributes for screen reader accessibility
modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
