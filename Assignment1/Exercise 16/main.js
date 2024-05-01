"use strict";
//Exercise: 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
let guest = ["Mehwish", "Shumaila", "Fatima"];
console.log(`\n\n ${guest[0]} can't join us because she is out of country.\n\n`);
guest.splice(0, 1, "Tasleem");
//guest.forEach(friend =>
//console.log(`Good News! \n Dear ${friend}, \n I have found a bigger dinner table, so I'm inviting more friends.\n `));
//Add guest to the beginning of array
guest.unshift("Zainab");
//Add guest to the middle of array
guest.splice(guest.length / 2, 0, "Hina");
//Add guest to the end of array
guest.push("Nadia");
console.log(guest);
//guest.forEach(person =>
//console.log(`Assalamualaikum! ${person}, \n " You are invited for a small dinner get together if you will join us it will be a great pleasure for us."\n `))
