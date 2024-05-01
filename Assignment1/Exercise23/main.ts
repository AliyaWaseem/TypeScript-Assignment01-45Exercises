// Exercise:23
// Conditional Tests: Write a series of conditional tests.
//  Print a statement describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// Creating a variable.
let a = 5;
let b = 10;

// 5 tests evaluate to True.

// Test:1
console.log("Is a == 5 and b == 10? I predict True.");
console.log(a == 5 && b == 10);

// Test:2
console.log("Is a + b == 15? I predict True.");
console.log(a + b == 15);

// Test:3
console.log("Is a * b == 50? I predict True.");
console.log(a * b == 50);

// Test:4
console.log("Is a !== b? I predict True.");
console.log(a !== b);

// Test:5
console.log("Is a > 3 and b > 8? I predict True.");
console.log(a > 3 && b > 8);

// 5 tests evaluate to False.

// Test:1
console.log("Is a === b? I predict False.");
console.log(a === b);

// Test:2
console.log("Is a * b !== 50? I predict False.");
console.log(a * b !== 50);

// Test:3
console.log("Is a !== 5? I predict False.");
console.log(a !== 5);

// Test:4
console.log("Is a + b === 16? I predict False.");
console.log(a + b === 16);

// Test:5
console.log("Is a < 3 and b > 15? I predict False.");
console.log(a < 3 && b > 15);