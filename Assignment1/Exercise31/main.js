//Exercise:31
// No Users: 
// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, 
// and make sure the correct message is printed.
// Empty array case:
var userNames = ["Admin", "Waseem", "Ahmed", "Hassan", "Arham"];
if (userNames.length === 0) {
    console.log("Array is empty, We need to find some users!");
}
else {
    userNames = [];
    console.log("All user names have been removed." + userNames.length);
}
