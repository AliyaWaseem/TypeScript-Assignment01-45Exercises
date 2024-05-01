"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. 
//Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.
let placesTovisit = ["Paradise", "Mount Everest", "Disney land", "Kashmir", "HariPur"];
console.log("Original Order:", placesTovisit);
console.log("Alphabetical Order:", [...placesTovisit].sort());
console.log("Original Order:", placesTovisit);
console.log("Reverse Alphabetical Order:", [...placesTovisit].sort().reverse);
console.log("Original Order after reverse sorting:", placesTovisit);
placesTovisit.reverse();
console.log("Reversed Order:", placesTovisit);
placesTovisit.sort();
console.log("Alphabetical Order:", placesTovisit);
placesTovisit.sort((a, b) => b.localeCompare(a));
console.log("Stored in Reverse Alphabetical Order:", placesTovisit);
