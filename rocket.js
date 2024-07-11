 document.addEventListener("DOMContentLoaded", function(){

     let engineBtn=  document.querySelector(".engineBtn").value;
     let rocketStatus ={engine: engineBtn, speed: 0};
    
     function turnOnEngine(){
          if(rocketStatus.engine === "Off"){
            console.log("Turning the engine on");
            document.querySelector(".engineBtn").value = "On";
            rocketStatus.engine="On";
        }else{
            console.log("Turning the engine off");
            document.querySelector(".engineBtn").value = "Off";
            rocketStatus.engine="Off";
        }
     }
    document.querySelector(".engineBtn").addEventListener("click", turnOnEngine);
 })
