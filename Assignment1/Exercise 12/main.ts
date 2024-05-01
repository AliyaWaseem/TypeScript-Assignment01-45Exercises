//Exercise:12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.

let myfriends: string[] =["Fatima","Mehwish","Zainab","Tasleem","Musarrat"];

myfriends.forEach(friendname => 
    console.log(`Assalamualaikum! ${friendname}, Nice to meet you.`));
