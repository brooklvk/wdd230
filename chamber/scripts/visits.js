
const visitElement = document.querySelector("#visit");

let numberOfVisits = localStorage.getItem("numberOfVisits");

if (!numberOfVisits) {
    numberOfVisits = 0;
  }

numberOfVisits = +numberOfVisits + 1; 

localStorage.setItem("numberOfVisits", numberOfVisits);

visitElement.innerHTML = numberOfVisits;
