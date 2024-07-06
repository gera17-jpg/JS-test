let apples= 100;
const eaters = 5;
let eaten = true;

function moves() {
    while (eaten === true) {
        apples = apples - eaters;
        console.log(apples);
    }else{
        console.log("The children haven't eaten yet.");
    }
}
    
moves();
