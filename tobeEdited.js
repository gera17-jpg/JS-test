/*1. Print all even numbers from 0 – 10
Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort. */

let random =Math.floor(Math.random()*11);
let even = random / 2;
let arr = [2,4,6,8,10];
function evenNum(){
    if (let i = 0; i === [...arr] ; i++){
        console.log(i) ; 
    }
}
 evenNum();
