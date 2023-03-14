
// const visitElement = document.querySelector("#visit");

// let numberOfVisits = localStorage.getItem("numberOfVisits");

// if (!numberOfVisits) {
//     numberOfVisits = 0;
//   }

// numberOfVisits = +numberOfVisits + 1; 

// localStorage.setItem("numberOfVisits", numberOfVisits);

// visitElement.innerHTML = numberOfVisits;

var numberOfVisits = localStorage.getItem("numberOfVisits");

if (!numberOfVisits) {
  numberOfVisits = 0;
}
numberOfVisits = +numberOfVisits + 1; 

localStorage.setItem("numberOfVisits", numberOfVisits);
document.querySelector("#visit").innerHTML = numberOfVisits;
