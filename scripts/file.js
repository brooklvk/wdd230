
let year = "numeric";
document.getElementsByClassName("p1").textContent = new Date().toLocaleDateString("en-US", year);

let lastModif = new Date(document.lastModified);
