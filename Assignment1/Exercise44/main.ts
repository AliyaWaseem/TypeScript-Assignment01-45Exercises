//Exercise:44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as
// the function call provides, and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.

//Array with 1 parameter:

function orderSandwich(item: string[]) {
  console.log("\nOrdered Sandwiches:");

  item.forEach((element) => console.log("- " + element));

  console.log("Enjoy your Sandwiches!\n");
}

//calling the function three times:
orderSandwich(["Cuban Sandwich","Grilled Chicken Sandwich","Turkey Sandwich"]);

orderSandwich(["Cheesesteak Sandwich", "Peanut Butter Sandwich"]);

orderSandwich(["Tuna Sandwich", "Ham Sandwich", "Jelly Sandwich"]);
