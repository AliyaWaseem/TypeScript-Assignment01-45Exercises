// Exercise:24
// // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let apple: string = "apple";
let upperCase: string = "APPLE";
let ten: number = 15;
let fruits: string[] = ["Papaya", "Grapes", "Orange"];

// 1.(Tests for equality and inequality with strings)

console.log("Is apple is equal to apple?");
console.log(apple == "apple"); //true

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple"); //false

// 2.(Tests using the lower case function)

console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(upperCase.toLocaleLowerCase() == "apple"); //true

console.log("\nIs APPLE is  not equal to apple after converting to lowercase?");
console.log(upperCase.toLocaleLowerCase() != "apple"); //false

// 3.(Numerical tests involving equality and inequality)

console.log("\nIs ten is equal to 15?");
console.log(ten == 15); //true

console.log("\nIs ten is not equal to 15?");
console.log(ten != 15); //false

// Greater and less than

console.log("\nIs ten is greater than 15?");
console.log(ten > 15); //false

console.log("\nIs ten is less than 15?");
console.log(ten < 15); //false

//Greater and less than or equal to

console.log("\nIs ten is greater than or equal to 15?");
console.log(ten >= 15); //true

console.log("\nIs ten is less than or equal to 15?");
console.log(ten <= 15); //true

// 4.(Tests using "and" and "or" operators)

console.log("\nIs ten is not equal to 15 and 10 is less than 15?");
console.log(ten != 15 && 10 < 15); //false

console.log("\nIs ten is equal to 15 and 10 is greater than 15?");
console.log(ten == 15 && 10 > 15); //false

console.log("\nIs ten is equal to 15 and 10 is less than 15?");
console.log(ten == 15 || 10 < 15); //true

console.log("\nIs ten is not equal to 15 and 10 is greater than 15?");
console.log(ten != 15 || 10 > 15); //false

// 5.(Test whether an item is in a array)
console.log("\nIs Papaya includes in my fruits array?");
console.log(fruits.includes("Papaya")); //true

// 6.(Test whether an item is not in a array)

console.log("\nIs Papaya  not includes in my fruits array?");
console.log(!fruits.includes("Papaya")); //false
