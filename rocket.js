document.addEventListener("DOMContentLoaded", function(){

    let engineBtn=  document.querySelector(".engineBtn");
    let rocketStatus ={engine: engineBtn.value, speed: 0};
    let launcherBorder = document.getElementsByClassName("launch")[0];
    let destination = document.getElementsByClassName("destinationC")[0];
    let launchElement = document.querySelector(".launch");
    let launchStatus = "clicked";
    
    function turnOnEngine(){
        if(rocketStatus.engine === "Off"){
            console.log("Turning the engine on");
            document.querySelector(".engineBtn").value = "On";
            rocketStatus.engine="On";
            launcherBorder.style.border = "10px solid green";
            destination.style.display="inline";
        }else{
            console.log("Turning the engine off");
            document.querySelector(".engineBtn").value = "Off";
            rocketStatus.engine="Off";
            launcherBorder.style.border = "";
            destination.style.display= "";
        }
    }
    
    function launchRocket() {
        if (launchStatus === "clicked") {
            launchElement.style.border = "2px solid yellow"; // Set the border
            launchElement.style.backgroundColor = "green"; // Set the background color
        }
    }
    document.querySelector(".engineBtn").addEventListener("click", turnOnEngine);
    launchElement.addEventListener("click", launchRocket);
})
