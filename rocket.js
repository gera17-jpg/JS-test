let engineBtn;
let rocketStatus;
let launcherBorder;
let destination;
let launchElement;
let speed;
let distanceInput;
let plus100;
let plus500;
let minus100;
let minus500;

function turnOnEngine() {
    if (rocketStatus.engine === "Off") {
        console.log("Engine turned on");
        engineBtn.value = "On";
        rocketStatus.engine = "On";
        distanceInput.style.color = "green";
        launcherBorder.style.border = "10px solid yellow";
        launchElement.style.backgroundColor = "teal";
        destination.style.display = "inline";
    } else {
        console.log("Turning the engine off");
        engineBtn.value = "Off";
        rocketStatus.engine = "Off";
        speed.style.color = "";
        speed.value = "0000";
        launcherBorder.style.border = "";
        launchElement.style.backgroundColor = "grey";
        destination.style.display = "none";
        distanceInput.style.color = "grey";
        distanceInput.value = "";
    }
}

function setDistance() {
    let chosenDes = document.querySelector('input[name="des"]:checked').value.trim();
    switch (chosenDes.toLowerCase()) {
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
            distanceInput.value = "714000000";
            break;
        default:
            distanceInput.value = "";
            console.log("No destination selected");
    }
}

function rocketLaunch() {
    console.log("Attempting to launch...");
    console.log("Current engine status: ", rocketStatus.engine);
    if (rocketStatus.engine === "On") {
        console.log("Launching rocket...");
        speed.value = "9000";
        speed.style.color = "green";
    } else {
        console.log("Engine is off. Cannot launch.");
  
    }
}
    
function add100 () {
    let btn ="clicked";  
    if (btn === "clicked"){
        speed.value = parseInt(speed.value) + 100;
        distanceInput.value = parseInt(distanceInput.value) - 100;
    } 
}

function add500 () {
    let btn ="clicked";  
    if (btn === "clicked"){
        speed.value = parseInt(speed.value) + 500;
        distanceInput.value = parseInt(distanceInput.value) - 500;
    } 
}

function dec100 () {
    let btn ="clicked";  
    if (btn === "clicked"){
        speed.value = parseInt(speed.value) - 100;
    } 
}

function dec500 () {
    let btn ="clicked";  
    if (btn === "clicked"){
        speed.value = parseInt(speed.value) - 500;
    } 
}

document.addEventListener("DOMContentLoaded", function() {
    engineBtn = document.querySelector(".engineBtn");
    rocketStatus = { engine: engineBtn.value, speed: "" };
    launcherBorder = document.getElementsByClassName("launch")[0];
    destination = document.getElementsByClassName("destinationC")[0];
    launchElement = document.querySelector(".launch");
    speed = document.querySelector(".speedInput");
    distanceInput = document.querySelector(".distanceInput");
    plus100 = document.querySelector(".p100");
    plus500 = document.querySelector(".p500");
    minus100 = document.querySelector(".m100");
    minus100 = document.querySelector(".m500");


    engineBtn.addEventListener("click", turnOnEngine);
    launchElement.addEventListener("click", rocketLaunch);
    document.querySelectorAll('input[name="des"]').forEach(radio => {
        radio.addEventListener("change", setDistance);
    });
    plus100.addEventListener("click",add100);
    plus500.addEventListener("click",add500);
    minus100.addEventListener("click",dec100);
    minus500.addEventListener("click",dec500);
});
