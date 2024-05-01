"use strict";
//Exercise:37
// Large Shirts: 
// Modify the make_shirt() function so that shirts are large by default
//  with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
//make function:
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Make a "${size}"  size shirt with the logo of "${message}".`);
}
// calling a function with by default values:
make_shirt();
//calling a function with medium size:
make_shirt("\nmedium");
//calling a function of any size with a different message:
make_shirt("small", "I love Python");
