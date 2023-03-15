
// Visit message 
let visit = now.getMinutes();
localStorage.setItem("visit", visit);

let difference = now.getMinutes() - visit;
localStorage.setItem("difference", difference);

document.querySelector("#visit").innerHTML = difference;

//localStorage.setItem("numberOfVisits", 0);

