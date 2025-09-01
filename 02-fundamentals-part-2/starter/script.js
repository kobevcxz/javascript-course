// // // // // // // console.log("Part 2: Functions ready!");

// // // // // // // // Functions - Declarations and Expressions
// // // // // // // function logger() {
// // // // // // //     console.log("My name is Dirk");
// // // // // // // }

// // // // // // // logger();
// // // // // // // logger();
// // // // // // // logger();

// // // // // // function fruitProcessor(apples, oranges) {
// // // // // //   console.log(apples, oranges);
// // // // // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // // // // //   return juice;
// // // // // // }

// // // // // // console.log(fruitProcessor(5, 3));

// // // // // // const juice1 = fruitProcessor(5, 0);
// // // // // // const juice2 = fruitProcessor(2, 4);
// // // // // // const juice3 = fruitProcessor(3, 2);

// // // // // // // Function expression
// // // // // // const calcAge = function (birthYear) {
// // // // // //   return 2025 - birthYear;
// // // // // // };

// // // // // // const age1 = calcAge(2004);
// // // // // // console.log(age1);

// // // // // // function introduce(firstName, lastName, age) {
// // // // // //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // // // // //   return introduction;
// // // // // // }

// // // // // // console.log(introduce("Dirk", "Alejandro", 21));
// // // // // // console.log(introduce("Sarah"));

// // // // // // // Return Values and Scope
// // // // // // function yearsUntilRetirement(birthYear, firstName) {
// // // // // //   const age = calcAge(birthYear);
// // // // // //   const retirement = 65 - age;

// // // // // //   if (retirement > 0) {
// // // // // //     return `${firstName} retires in ${retirement} years`;
// // // // // //   } else {
// // // // // //     return `${firstName} has already retired!`;
// // // // // //   }
// // // // // // }

// // // // // // console.log(yearsUntilRetirement(1991, "Jonas"));
// // // // // // console.log(yearsUntilRetirement(1950, "Mike"));

// // // // // // // function scope
// // // // // // const globalVar = "I am global";

// // // // // // function testScope() {
// // // // // //     const localVar = "I am local";
// // // // // //   console.log(globalVar);
// // // // // //   console.log(localVar);
// // // // // // }

// // // // // // testScope();
// // // // // // console.log(globalVar);
// // // // // // //console.log(localVar);

// // // // // // function calcAverage(score1, score2, score3) {
// // // // // //   return (score1 + score2 + score3) / 3;
// // // // // // }

// // // // // // function checkWinner(avgDolphins, avgKoalas) {
// // // // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // // // //     return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
// // // // // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // // // // //     return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
// // // // // //   } else {
// // // // // //     return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
// // // // // //   }
// // // // // // }

// // // // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // const grades = [85, 92, 78, 96, 88];
// // // // // console.log(grades);

// // // // // const friends = ["Michael", "Steven", "Peter"];
// // // // // console.log(friends);

// // // // // const mixed = ["Jonas", 27, true, friends];
// // // // // console.log(mixed);

// // // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // // console.log(years);

// // // // // // accessing array elements
// // // // // // Array indexing starts at 0
// // // // // console.log(friends[0]);
// // // // // console.log(friends[1]);
// // // // // console.log(friends[2]);

// // // // // console.log(friends.length);

// // // // // console.log(friends[friends.length - 1]);

// // // // // friends[1] = "Jay";
// // // // // console.log(friends);

// // // // // const calcAge = function (birthYear) {
// // // // //   return 2037 - birthYear;
// // // // // };

// // // // // const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// // // // // console.log(ages);

// // // // // // array methods 
// // // // // const newLength = friends.push("Jay");
// // // // // console.log(friends);
// // // // // console.log(newLength);

// // // // // friends.unshift("John");
// // // // // console.log(friends);

// // // // // // removing elements
// // // // // const popped = friends.pop()
// // // // // console.log(popped); 
// // // // // console.log(friends);

// // // // // // Shift
// // // // // const shifted = friends.shift();
// // // // // console.log(shifted);
// // // // // console.log(friends);

// // // // // //finding an elements
// // // // // console.log(friends.indexOf("Steven"));
// // // // // console.log(friends.indexOf("Bob"));

// // // // // // includes
// // // // // console.log(friends.includes("Peter"));
// // // // // console.log(friends.includes("Bob"));

// // // // // // Array iterations

// // // // // // traditional for loop
// // // // // for (let i = 0; i < friends.length; i++) {
// // // // //   console.log(friends[i]);
// // // // // }

// // // // // friends.forEach(function (friend, index) {
// // // // //   console.log(`${index}: ${friend}`);
// // // // // });

// // // // // friends.forEach((friend, index) => {
// // // // //   console.log(`Friend ${index + 1}: ${friend}`);
// // // // // });

// // // // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // // // let total = 0;

// // // // // for (let i = 0; i < grades2.length; i++) {
// // // // //   total += grades2[i];
// // // // // }

// // // // // const average = total / grades.length;
// // // // // console.log(`Average grade: ${average.toFixed(2)}`);

// // // // // let passedCount = 0;
// // // // // grades2.forEach((grade) => {
// // // // //   if (grade >= 70) passedCount++;
// // // // // })
// // // // // console.log(`${passedCount} out of ${grades2.length} students passed`);


// // // // ////////////////////////////////////
// // // // // Coding Challenge #2 - Student Grade Manager

// // // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // // // // Function to calculate average
// // // // function calculateAverage(grades) {
// // // //   let total = 0;
// // // //   for (let i = 0; i < grades.length; i++) {
// // // //     total += grades[i];
// // // //   }
// // // //   return total / grades.length;
// // // // }

// // // // // Function to find highest grade
// // // // function findHighestGrade(grades) {
// // // //   let highest = grades[0];
// // // //   for (let i = 1; i < grades.length; i++) {
// // // //     if (grades[i] > highest) {
// // // //       highest = grades[i];
// // // //     }
// // // //   }
// // // //   return highest;
// // // // }

// // // // // Function to find lowest grade
// // // // function findLowestGrade(grades) {
// // // //   let lowest = grades[0];
// // // //   for (let i = 1; i < grades.length; i++) {
// // // //     if (grades[i] < lowest) {
// // // //       lowest = grades[i];
// // // //     }
// // // //   }
// // // //   return lowest;
// // // // }

// // // // // Function to count passing students
// // // // function countPassing(grades, passingGrade) {
// // // //   let count = 0;
// // // //   for (let i = 0; i < grades.length; i++) {
// // // //     if (grades[i] > passingGrade) {   // must be STRICTLY greater
// // // //       count++;
// // // //     }
// // // //   }
// // // //   return count;
// // // // }

// // // // // Generate complete report
// // // // const average = calculateAverage(grades);
// // // // const highest = findHighestGrade(grades);
// // // // const lowest = findLowestGrade(grades);
// // // // const passing = countPassing(grades, 75); // use 75 as passing grade

// // // // console.log("=== GRADE REPORT ===");
// // // // console.log(`Average: ${average.toFixed(2)}`);
// // // // console.log(`Highest: ${highest}`);
// // // // console.log(`Lowest: ${lowest}`);
// // // // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // // // Objects - Creation with Object Literal Syntax
// // // //

// // // // Object Methods
// // // const jonas = {
// // //   firstName: "Jonas",
// // //   lastName: "Schmedtmann",
// // //   birthYear: 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // //   hasDriversLicense: true,

// // //   // Method - function inside object
// // //   calcAge: function (birthYear) {
// // //     return 2037 - birthYear;
// // //   },
// // // };

// // // // Call methods using dot notation
// // // console.log(jonas.calcAge(1991));
// // // console.log(jonas.calcAge(jonas.birthYear));

// // // const jonasImproved = {
// // //   firstName: "Jonas",
// // //   lastName: "Schmedtmann",
// // //   birthYear: 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // //   hasDriversLicense: true,

// // //   calcAge: function () {
// // //     console.log(this);
// // //     return 2037 - this.birthYear;
// // //     },
// // // };
// // // console.log(jonasImproved.calcAge());


// // // const jonasAdvanced = {
// // //   firstName: "Jonas",
// // //   lastName: "Schmedtmann",
// // //   birthYear: 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // //   hasDriversLicense: true,

// // //   calcAge: function () {
// // //     this.age = 2037 - this.birthYear;
// // //     return this.age;
// // //   },

// // //   getSummary: function () {
// // //     return `${this.firstName} is a ${this.calcAge()}-year old ${
// // //       this.job
// // //     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
// // //   },
// // // };
// // // console.log(jonasAdvanced.calcAge());
// // // console.log(jonasAdvanced.age);
// // // console.log(jonasAdvanced.getSummary());

// // // ////////////////////////////////////
// // // // Coding Challenge #3 - User Profile System

// // // const user = {
// // //   firstName: "Sarah",
// // //   lastName: "Johnson",
// // //   birthYear: 1995,
// // //   location: "New York",
// // //   interests: ["photography", "travel", "coding"],
// // //   friends: [
// // //     { name: "Michael", status: "active" },
// // //     { name: "Emma", status: "inactive" },
// // //     { name: "David", status: "active" },
// // //   ],
// // //   isActive: true,

// // //   // Calculate age method
// // //   calcAge: function () {
// // //     const currentYear = new Date().getFullYear();
// // //     this.age = currentYear - this.birthYear;
// // //     return this.age;
// // //   },

// // //   // Add friend method
// // //   addFriend: function (name, status = "active") {
// // //     this.friends.push({ name, status });
// // //     return this.friends.length;
// // //   },

// // //   // Get active friends count
// // //   getActiveFriends: function () {
// // //     return this.friends.filter(friend => friend.status === "active").length;
// // //   },

// // //   // Toggle active status
// // //   toggleStatus: function () {
// // //     this.isActive = !this.isActive;
// // //     return this.isActive;
// // //   },

// // //   // Generate profile summary
// // //   getSummary: function () {
// // //     // Ensure age is calculated
// // //     this.calcAge();

// // //     const activeFriends = this.getActiveFriends();
// // //     const totalFriends = this.friends.length;
// // //     const interestsStr = this.interests.join(", ");

// // //     return `
// // // 👤 Profile Summary
// // // -------------------------
// // // Name: ${this.firstName} ${this.lastName}
// // // Age: ${this.age}
// // // Location: ${this.location}
// // // Status: ${this.isActive ? "🟢 Active" : "🔴 Inactive"}
// // // Friends: ${activeFriends} active out of ${totalFriends}
// // // Interests: ${interestsStr}
// // // `;
// // //   },
// // // };

// // // // Test your user profile system
// // // console.log(user.getSummary());

// // // user.addFriend("Alex", "active");
// // // user.toggleStatus();

// // // console.log(`\nAfter updates:`);
// // // console.log(user.getSummary());
// // // //dadshiasdasdahsdhuiosd

// // const message = document.querySelector(".message");
// // console.log(message);

// // const button = document.querySelector("#btn");
// // console.log(button);

// // const heading = document.querySelector("h1");
// // console.log(heading);

// // // getElementById
// // const buttonById = document.getElementById("btn");
// // console.log(buttonById);
// // console.log(buttonById === button);

// // // querySelectorAll - gets ALL matching elements
// // const allParagraphs = document.querySelectorAll("p");
// // console.log(allParagraphs);
// // console.log(allParagraphs[0]);
// // console.log(allParagraphs.length);

// // Modifying Element Content

// const message = document.querySelector(".message");

// console.log(message.textContent);
// message.textContent = "Hello from JavaScript!";
// console.log(message.textContent);

// message.innerHTML = "<strong>Bold text from JS!</strong>";
// console.log(message.innerText);

// const input = document.querySelector(".guess");
// console.log(input.value);
// input.value = "Default text";
// input.placeholder = "Type here";

// const heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "green";
// });

// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// // Input events
// const display = document.querySelector(".message");

// input.addEventListener("input", function () {
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
// });

// // Keyboard events - responding to specific keys
// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = ""; // Clear input
//   }
//   });

  


// DOM Elements
const scoreDisplays = [
  document.querySelector('#score-1'),
  document.querySelector('#score-2')
];
const playerContainers = [
  document.querySelector('.player-1'),
  document.querySelector('.player-2')
];
const addPointButtons = document.querySelectorAll('.btn-add');
const resetBtn = document.querySelector('#btn-reset');
const winningScoreInput = document.querySelector('#winning-score');
const targetScoreSpan = document.querySelector('.target');
const winnerMessage = document.querySelector('.winner');
const winnerNameSpan = document.querySelector('.winner-name');

// Game State
const gameState = {
  scores: [0, 0],
  winningScore: 5,
  isGameOver: false,
  players: [
    { name: 'Player 1' },
    { name: 'Player 2' }
  ]
};

// Functions
const updateScoreDisplay = () => {
  scoreDisplays[0].textContent = gameState.scores[0];
  scoreDisplays[1].textContent = gameState.scores[1];
};

const checkWinner = () => {
  const p1Score = gameState.scores[0];
  const p2Score = gameState.scores[1];

  if (p1Score >= gameState.winningScore || p2Score >= gameState.winningScore) {
    gameState.isGameOver = true;
    
    const winnerIndex = p1Score >= gameState.winningScore ? 0 : 1;
    const loserIndex = winnerIndex === 0 ? 1 : 0;

    playerContainers[winnerIndex].classList.add('winner');
    playerContainers[loserIndex].classList.add('loser');

    winnerNameSpan.textContent = gameState.players[winnerIndex].name;
    winnerMessage.classList.remove('hidden');

    addPointButtons.forEach(btn => btn.disabled = true);
  }
};

const resetGame = () => {
  gameState.scores = [0, 0];
  gameState.isGameOver = false;
  
  updateScoreDisplay();
  
  playerContainers.forEach(container => container.classList.remove('winner', 'loser'));
  
  winnerMessage.classList.add('hidden');
  addPointButtons.forEach(btn => btn.disabled = false);
};

// Event Handling
addPointButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (!gameState.isGameOver) {
      const playerIndex = parseInt(event.target.dataset.player) - 1;
      gameState.scores[playerIndex]++;
      updateScoreDisplay();
      checkWinner();
    }
  });
});

resetBtn.addEventListener('click', resetGame);

winningScoreInput.addEventListener('change', (event) => {
  const newScore = parseInt(event.target.value);
  if (newScore >= 1 && newScore <= 20) {
    gameState.winningScore = newScore;
    targetScoreSpan.textContent = newScore;
    resetGame();
  } else {
    winningScoreInput.value = gameState.winningScore;
  }
});

document.addEventListener('keydown', (event) => {
  if (!gameState.isGameOver) {
    if (event.key === '1') {
      gameState.scores[0]++;
      updateScoreDisplay();
      checkWinner();
    }
    if (event.key === '2') {
      gameState.scores[1]++;
      updateScoreDisplay();
      checkWinner();
    }
  }
  if (event.key.toLowerCase() === 'r') {
    resetGame();
  }
});

// Initial Setup
targetScoreSpan.textContent = winningScoreInput.value;
updateScoreDisplay();

