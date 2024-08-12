const data = new Promise((paased,rejected)=>{
    setTimeout(()=>{
        const player = {
        name:"",
        age:21
        };
    
        if(player.name){
        passed(player);
        }else{
            rejected("Please register the player.")
        }
    },2500);
});
data
    .then((passedValue)=>{
        console.log(passedValue);
    })
    .catch((rejectedValue)=>{
        console.log(rejectedValue);
    })
