'use strict';

console.log('Starting program');

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
  console.trace();
}

outerFunction();

const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  // blockConst not here
  console.log(outer, inner, functionVar);
}

demoScope();

const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name);
  }
  b();
}

a();

console.log(varX);
// console.log(letX);
// console.log(constX);

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX);
console.log(letX);
console.log(constX);

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

const apiUrl = 'https://example.com';
console.log(apiUrl);

let title = 'Behind the Scenes';

function outer2() {
  const label = 'outer';
  function inner2() {
    console.log('scope:', label);
  }
  inner2();
}
outer2();

function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one();

const person = {
  name: 'Jonas',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

person.greet();

const anotherPerson = { name: 'Sarah' };
anotherPerson.greet = person.greet;
anotherPerson.greet();

// Detached function call (commented out to prevent error)
// const greetFunction = person.greet;
// greetFunction();

const obj = {
  name: 'Object',
  regularMethod: function () {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

obj.regularMethod();
obj.arrowMethod();

const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

quiz.regularMethod();
quiz.arrowMethod();

const timer = {
  name: 'Timer',
  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;

    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },
  startModern: function () {
    console.log(`${this.name} starting modern...`);

    setTimeout(() => {
      console.log(`${this.name} finished modern`);
    }, 1500);
  },
};

timer.start();
timer.startModern();

const user = {
  name: 'Alice',
  hobbies: ['reading', 'coding', 'gaming'],

  printHobbiesBad: () => {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },

  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },
};

user.printHobbiesBad();
user.printHobbiesGood();

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');

const userCard = {
  name: 'Sarah',

  setupEvents() {
    console.log('Event setup for:', this.name);
  },
};

userCard.setupEvents();

const calculator = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 2,

  processNumbers() {
    return this.numbers.map(num => num * this.multiplier);
  },
};

console.log('Processed numbers:', calculator.processNumbers());

const myTimer = {
  name: 'My Timer',

  startCountdown() {
    console.log(`${this.name} starting countdown...`);

    setTimeout(() => {
      console.log(`${this.name} countdown finished!`);
    }, 1000);
  },
};

myTimer.startCountdown();
