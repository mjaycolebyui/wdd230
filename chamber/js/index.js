document.querySelector("#timestamp").innerHTML = String("Last updated: ") + String(document.lastModified);
document.querySelector("#copyright").innerHTML = String("&copy ") + new Date().getFullYear() + String(" Michael Coleman    WDD 230 Project");

function openNav() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    document.getElementsByClassName("menu-button")[0].classList.toggle("selected");
}