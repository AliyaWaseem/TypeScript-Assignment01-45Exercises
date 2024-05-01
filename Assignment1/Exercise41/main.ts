//Exercise:41
//Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

//Array of of magician’s names:
let magician : string[] = ["Ricky Jay", "Derren Brown", "Harry Houdini", "David Blaine"];

function show_magicians(magicians: string[]) {

    magicians.forEach(name => {

        console.log(name);
    })
}

show_magicians(magician);