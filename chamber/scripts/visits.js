
// const now = new Date();

// // Visit message 
// let visit = now;
// localStorage.setItem("numberOfVisits", visit);

// document.querySelector("#visit").innerHTML = visit;

// //localStorage.setItem("numberOfVisits", 0);


const visitElement = document.querySelector("#visit");
// Visit message 
// let visits = now.getMinutes();
localStorage.setItem("numberOfVisits", numberOfVisits);

// let numberOfVisits = localStorage.getItem("numberOfVisits");
// let difference = now.getMinutes() - visit;
// localStorage.setItem("difference", difference);

if (!numberOfVisits) {
    numberOfVisits = 0;
  }
document.querySelector("#visit").innerHTML = difference;

numberOfVisits = +numberOfVisits + 1; 
//localStorage.setItem("numberOfVisits", 0);

localStorage.setItem("numberOfVisits", numberOfVisits);

visitElement.innerHTML = numberOfVisits;