"use strict";
//Assignment#3
//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
let person_name = "Muhammad waseeM";
//Print the name in lowercase
console.log(person_name.toLowerCase());
//Print the name in uppercase
console.log(person_name.toUpperCase());
//Print the name in titlecase
let myName = person_name.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
console.log(myName);
