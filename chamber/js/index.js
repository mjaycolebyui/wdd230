document.querySelector("#timestamp").textContent = String("Last updated: ") + String(document.lastModified);
document.querySelector("#copyright").textContent = String("&copy ") + new Date().getFullYear() + String(" Michael Coleman    WDD 230 Project");



function openNav() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    document.getElementsByClassName("menu-button")[0].classList.toggle("selected");
}


function eventBanner() {
    const d = new Date();
    let day = d.getDay();

    if (day != 1 && day != 2)
    {
        document.getElementsByClassName("event-banner")[0].classList.toggle("not-event-day");
    }
}