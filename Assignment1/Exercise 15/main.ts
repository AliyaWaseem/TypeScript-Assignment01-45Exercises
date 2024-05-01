//Exercise:15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. 
//Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest 
//who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person 
//who is still in your list.

//initial guestlist.
let myguests: string[] = ["Mehwish", "Shumaila", "Fatima"];

myguests.forEach(guest =>
    console.log(`Assalamualaikum!, ${guest}, "You are invited for a small dinner get together if you will join us it will be a great pleasure for us." `));

console.log(`\n\n ${myguests[0]} can't join us because she is out of country.\n\n`);

//updated list.

let guest: string[] = ["Mehwish", "Shumaila", "Fatima"];

guest.splice(0, 1, "Tasleem");

console.log(guest);
//New Invitations:
guest.forEach(person =>
    console.log(`Assalamualaikum!, ${person}, "You are invited for a small dinner get together if you will join us it will be a great pleasure for us." `));

