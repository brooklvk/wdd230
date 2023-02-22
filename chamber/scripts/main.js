
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
