
//Hamburger menu in nav 
// function hamburger() {
//     var x = document.querySelectorAll(".link");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }

//     var x = document.querySelectorAll(".social");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

//hamburger

// Store the selected elements that we are going to use. 
const mainnav = document.querySelector("nav");
const hambutton = document.querySelector(".link", ".social");

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);

// What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 



// Date in header 
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
document.querySelector(".date").textContent = fulldate;

// Current year in footer 
const year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;

// Last Modified in footer 
document.querySelector("#lastModified").innerHTML = document.lastModified;
