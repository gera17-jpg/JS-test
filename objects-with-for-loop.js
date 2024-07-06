let person = {
    name: "Ashley",
    activity:["Dancing","Cooking","Cleaning","Practicing","Studying"],
    answer: function asked(activity){
        console.log(`I'm ${activity}.I can't go.`);
    },
    choice1:{
        place:"beach",
        activity: "Surf",
        companion: "Josh"
    },
    choice2:{
        place: "cinema",
        activity: "Watch Spiderman 3",
        companion: "Ella"
    }
}

for(let i=0;i < person["activity"].length;i++){  
    let currentAct = person.activity[i];
    console.log(currentAct);
    person.answer(currentAct);
    let randomBinary = Math.floor(Math.random() * 2);
    console.log(randomBinary); // Will log either 0 or 1
    switch (randomBinary){
        case 0:
             console.log(`Okay I'm free let's go ${person.choice1.activity} with ${person.choice1.companion} at the ${person.choice1.place}.`);
             break;
         case 1:
             console.log(`Okay I'm free let's go ${person.choice2.activity} with ${person.choice2.companion} at the ${person.choice2.place}.`);
             break;
        }
}
