
// Hamburger menu in nav 
const nav = document.querySelector(".navigation");
const icon = document.querySelector(".menu");

icon.addEventListener("click", () => {nav.classList.toggle("responsive")}, false);

// Date in header 
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
document.querySelector(".date").textContent = fulldate;

// Current year in footer 
const year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;

// Last Modified in footer 
document.querySelector("#lastModified").innerHTML = document.lastModified;


// Message banner above header 
const day = now.getDay();
if (day == 1 || day == 2) {
    document.querySelector("#message").style.display = "block";
}

// Lazy loading js
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }


// Visit message 
var numberOfVisits = localStorage.getItem("numberOfVisits");

if (!numberOfVisits) {
    numberOfVisits = 0;
}

numberOfVisits = +numberOfVisits + 1; 

localStorage.setItem("numberOfVisits", numberOfVisits);
document.querySelector("#visit").innerHTML = numberOfVisits;


// localStorage.setItem("numberOfVisits", 0);