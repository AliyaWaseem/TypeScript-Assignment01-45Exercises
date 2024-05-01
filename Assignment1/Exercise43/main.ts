//Exercise:43
//Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of 
// the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => {
      console.log(magician);
  });
}

function make_great(magicians: string[]): string[] {
  return magicians.map(magician => `The Great ${magician}`);
}

// Original array of magicians names:
const originalMagicians: string[] = ["Ricky Jay","Derren Brown","Harry Houdini","David Blaine"];

// Make a copy of the original array to keep it unchanged
const unchangedMagicians: string[] = originalMagicians.slice();

// Call  the function make_great() with a copy of the original array
const greatMagicians: string[] = make_great(originalMagicians.slice());

// Show the original names
console.log("Original Magicians:");
show_magicians(unchangedMagicians);

// Show the modified names
console.log("\nModified Magicians:");
show_magicians(greatMagicians);

  