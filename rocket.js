document.addEventListener("DOMContentLoaded", function() {

    let engineBtn = document.querySelector(".engineBtn");
    let rocketStatus = { engine: engineBtn.value, speed: "" };
    let launcherBorder = document.getElementsByClassName("launch")[0];
    let destination = document.getElementsByClassName("destinationC")[0];
    let launchElement = document.querySelector(".launch");
    let speed = document.querySelector(".speedInput");
   // let launchStatus = "unclickable";

    function turnOnEngine() {
        if (rocketStatus.engine === "Off") {
            console.log("Turning the engine on");
            engineBtn.value = "On";
            speed.value = "9000";
            rocketStatus.engine = "On";
            speed.style.color = "green";
            launcherBorder.style.border = "10px solid yellow";
            launchStatus = "clickable";
            launchElement.style.backgroundColor = "teal";
            destination.style.display = "inline";
        } else {
            console.log("Turning the engine off");
            engineBtn.value = "Off";
            speed.value = "0000";
            rocketStatus.engine = "Off";
            speed.style.color = "";
            launcherBorder.style.border = "";
            launchElement.style.backgroundColor = "grey";
            destination.style.display = "none";
          //  launchStatus = "unclickable";
        }
    }


    function setDistance(){
        let chosenDes = document.querySelector('input[name="des"]:checked').value.trim();
        let distanceInput = document.querySelector(".distanceInput");
        switch (chosenDes.toLowerCase()){
            case "mars":
                distanceInput.value = "54600000";
                break;
            case "moon":
                distanceInput.value = "384400";
                break;
            case "saturn":
                distanceInput.value = "1352600000";
                break;
            case "uranus":
                distanceInput.value = "3003900000";
                break;
            case "jupiter":
                distanceInput.value = "714000000000";
                break;
            default:
            distanceInput.value = "";
            console.log("No destination selected");
        }
    }

    function rocketLaunch(){
        if(rocketStatus.engine === "on"){
            
        }
    }

    document.querySelectorAll('input[name="des"]').forEach(radio => {
    radio.addEventListener("change", setDistance);
    });
    engineBtn.addEventListener("click", turnOnEngine);
    launchElement.addEventListener("click", launchRocket);    

});
