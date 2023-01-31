
//Hamburger menu in nav 
function myFunction() {
    var x = document.querySelectorAll(".link");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// Date in header 
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
document.querySelector(".date").textContent = fulldate;

// Current year in footer 
const year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;

// Last Modified in footer 
document.querySelector("#lastModified").innerHTML = document.lastModified;
