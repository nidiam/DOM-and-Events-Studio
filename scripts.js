// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let takeOffButton = document.getElementById("takeoff");
    let status = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    
    
   
    takeOffButton.addEventListener("click", function (event) {
        console.log("confirms that shuttle is ready to takeoff!");
        status.innerHTML = ("Shuttle In Flight")
        background.style.backgroundColor = "blue";
    });

    takeOffButton



} window.addEventListener('load', init)   

