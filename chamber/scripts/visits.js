
let dateVisited = new Date.now();

localStorage.setItem("dateVisited", dateVisited);

let difference = (Date.now() - localstorage.getItem(dateVisited)) / 86400000;

if (difference == null) {
  difference = 0;
}

document.querySelector("#visit").innerHTML = difference;
