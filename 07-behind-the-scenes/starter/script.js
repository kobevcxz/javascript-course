'use strict';

console.log('Starting program');

// ===== Execution Context & Call Stack =====
function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace(); // shows call stack
}

outerFunction();

// ===== Scoping & Scope Chain =====
const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  console.log(outer, inner, /* blockConst not here */, functionVar);
}

demoScope();

const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name); // scope chain lookup
  }
  b();
}

a();

// ===== Hoisting & TDZ =====

// Variable hoisting
console.log(varX); // undefined
// console.log(letX); // TDZ: ReferenceError
// console.log(constX); // TDZ: ReferenceError

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX); // 1
console.log(letX); // 2
console.log(constX); // 3

// Function hoisting
console.log(addDecl(2, 3)); // works
// console.log(addExpr(2, 3)); // TDZ ReferenceError
// console.log(addArrow(2, 3)); // TDZ ReferenceError

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Now all work
console.log(addDecl(2, 3));  // 5
console.log(addExpr(2, 3));  // 5
console.log(addArrow(2, 3)); // 5

// TDZ Fix Example
// console.log(apiUrl); // TDZ ReferenceError
const apiUrl = 'https://example.com';
console.log(apiUrl);

// ===== Combined Practice: Hoisting, Scope, Call Stack =====

// let title already declared above, duplicate commented out
// let title = 'Behind the Scenes';
console.log('Behind the Scenes'); // simulate initial print

function outer() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label); // 'outer'
  }
  inner();
}
outer();

function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one();
