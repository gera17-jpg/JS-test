const player = {
    name: "James Charles",
    gender: "gay",
    age: 26
};
const interest = prompt("What do you wanna know about the player? Choose between the name,age & gender");
console.log(player[interest]);
const add =prompt("What other info do you know about the player?");
const shared =  prompt("What about it?");
player[add]= shared;

console.log(player);
