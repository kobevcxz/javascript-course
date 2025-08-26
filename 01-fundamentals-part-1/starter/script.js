// // // // let js = "amazing";
// // // // console.log(40 + 8 + 23 - 10);
// // // // console.log(js);


// // // // console.log("=== VARIABLES ===");

// // // // let firstName = "Jonas";
// // // // console.log(firstName);

// // // // let age = 30;
// // // // console.log(age);
// // // // age = 31;
// // // // console.log(age);

// // // // const birthYear = 1991;
// // // // console.log(birthYear);

// // // // const PI = 3.1415;
// // // // console.log(PI);

// // // // const country = "Philippines";
// // // // const language = "Filipino";
// // // // const population = 10;

// // // // age = 21;
// // // // age = 22; //this will change

// // // // // good vairable names
// // // // // let firstName = "Sarah";
// // // // // let myCurrentJob = "teacher";
// // // // // let PI = 3.1415; // Constants in UPPERCASE

// // // // // bad variable names   
// // // // // let 3years
// // // // // let jonas&matilda
// // // // // let new

// // // // console.log("=== DATA TYPES ===");

// // // // // number
// // // // let id = 12345;
// // // // console.log(id)
// // // // console.log(typeof id);

// // // // // String
// // // // let lastName = "Schmedtmann";
// // // // console.log(lastName);
// // // // console.log(typeof lastName);

// // // // // boolean
// // // // let javascriptIsFun = true;
// // // // console.log(javascriptIsFun);
// // // // console.log(typeof javascriptIsFun);

// // // // // undefined
// // // // let year;
// // // // console.log(year);
// // // // console.log(typeof year);

// // // // let dynamicVariable = 23;
// // // // console.log(dynamicVariable, typeof dynamicVariable); 23, "number"

// // // // // change to a string
// // // // dynamicVariable = "Now I'm a string";
// // // // console.log(dynamicVariable, typeof dynamicVariable); "Now I'm a string", "string"

// // // // // change to a boolean 
// // // // dynamicVariable = true;
// // // // console.log(dynamicVariable, typeof dynamicVariable); true, "boolean"




// // // // Basic Operators - Math operators
// // // console.log("=== BASIC OPERATORS ===");
// // // const now = 2037;
// // // const ageJonas = now - 1991;
// // // const ageSarah = now - 2018;
// // // console.log(ageJonas, ageSarah); 

// // // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // // console.log("Math operations:");
// // // console.log("Addition:", 10 + 5);
// // // console.log("Subtraction:", 20 - 8);
// // // console.log("Multiplication:", 4 * 7);
// // // console.log("Division:", 15 / 3);
// // // console.log("Exponentiation:", 2 ** 3);

// // // // Math with strings!
// // // const firstName = "Jonas";
// // // const lastName = "Schmedtmann";
// // // console.log(firstName + " " + lastName);


// // // console.log("Hello " + "World" + "!");
// // // console.log("I am " + 21 + " years old");

// // // // Assignment operators
// // // console.log("=== ASSIGNMENT OPERATORS ===");

// // // let x = 10 + 5;
// // // console.log("x starts as:", x);

// // // x += 10;
// // // console.log("After x += 10:", x);

// // // x *= 4;
// // // console.log("After x *= 4:", x);

// // // x /= 2;
// // // console.log("After x /= 2:", x);

// // // x++; // Same as: x = x + 1
// // // console.log("After x++:", x); // 51

// // // x--;
// // // x--;
// // // console.log("After x-- twice:", x);

// // // // Comparison operators
// // // console.log("=== COMPARISON OPERATORS ===");

// // // console.log("Age comparison:");
// // // console.log(ageJonas > ageSarah);
// // // console.log(ageSarah >= 18);
// // // console.log(ageJonas < 30);

// // // console.log("Number comparisons:");
// // // console.log(25 > 20);
// // // console.log(15 < 10);
// // // console.log(18 >= 18);
// // // console.log(16 <= 15);

// // // let score = 100;

// // // score += 50;
// // // score *= 3;
// // // score -= 73;

// // // console.log(score);

// // // const isFullAge = ageSarah >= 18;
// // // console.log("Sarah is adult:", isFullAge);

// // // const isJonasOlder = ageJonas > ageSarah;
// // // console.log("Jonas is older:", isJonasOlder);

// // // console.log("Complex comparison:");
// // // console.log(now - 1991 > now - 2018); //same as ageJonas > ageSarah


// // // let z, y;
// // // z = y = 25 - 10 - 5;
// // // console.log(z, y);

// // // const averageAge = (ageJonas + ageSarah) / 2;
// // // console.log(ageJonas, ageSarah, averageAge);

// // // // Test Data 1
// // // let markMass = 78;
// // // let markHeight = 1.69;
// // // let johnMass = 92;
// // // let johnHeight = 1.95;

// // // let markBMI = markMass / (markHeight ** 2);
// // // let johnBMI = johnMass / (johnHeight ** 2);

// // // let markHigherBMI = markBMI > johnBMI;

// // // console.log("Test Data 1:");
// // // console.log("Mark BMI:", markBMI);
// // // console.log("John BMI:", johnBMI);
// // // console.log("Is Mark's BMI higher?", markHigherBMI);

// // // // Test Data 2
// // // markMass = 95;
// // // markHeight = 1.88;
// // // johnMass = 85;
// // // johnHeight = 1.76;

// // // markBMI = markMass / (markHeight ** 2);
// // // johnBMI = johnMass / (johnHeight ** 2);

// // // markHigherBMI = markBMI > johnBMI;

// // // console.log("\nTest Data 2:");
// // // console.log("Mark BMI:", markBMI);
// // // console.log("John BMI:", johnBMI);
// // // console.log("Is Mark's BMI higher?", markHigherBMI);



// // // Strings and Template Literals
// // const firstName = "Jonas";
// // const job = "teacher";
// // const birthYear = 1991;
// // const year = 2037;

// // const jonas =
// //   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // console.log(jonas);

// // // The modern way - ES6 Template Literals
// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // console.log(jonasNew);

// // console.log(`I'm ${2037 - 1991} years old`);
// // console.log(`Math works: ${2 + 3} equals five`);
// // console.log(`Comparisons too: ${5 > 3}`);

// // console.log(`Just a regular string...`);

// // // Taking Decisions: if / else Statements
// // const age = 15;

// // if (age >= 18) {
// //   console.log("Sarah can start driving license 🚗");
// // } else {
// //   const yearsLeft = 18 - age;
// //   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// // }


// // // Truthy and Falsy Values

// // // 5 falsy values: 0, '', undefined, null, NaN
// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean("Jonas")); 
// // console.log(Boolean({}));
// // console.log(Boolean(""));



// // // Coding Challenge #2

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);

// // if (BMIMark > BMIJohn) {
// //   console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
// // } else if (BMIJohn > BMIMark) {
// //   console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
// // } else {
// //   console.log(`Mark and John have the same BMI (${BMIMark.toFixed(1)})`);
// // }


// // Type Conversion and Coercion

// // type conversion (manual)
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23)); 

// // type coercion (automatic)
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");



// // equality - strict

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18);
// console.log("18" == 18); 
// console.log(18 === 18);

// // why == can be dangerous
// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);
// console.log(null == undefined);

// console.log("" == 0);
// console.log("   " == 0);

// // best practice
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// // Not-equal operator
// if (favourite !== 23) console.log("Why not 23?");

// // Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B  
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);
// console.log(!hasGoodVision);   
// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// }
// else {
//   console.log("Someone else should drive...");
// }

const age = 19;
const hasID = true;
const isVIP = false;

if ((age >= 21 && hasID) || isVIP) {
  console.log(`Welcome to the club!`);
} else {
  console.log(`Sorry, you cannot enter`);
}






