
const now = new Date();

// Visit message 
let visit = now;
localStorage.setItem("numberOfVisits", visit);

document.querySelector("#visit").innerHTML = visit;

//localStorage.setItem("numberOfVisits", 0);

