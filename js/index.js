document.querySelector("#timestamp").innerHTML = String("Last updated: ") + String(document.lastModified);
document.querySelector("#copyright").innerHTML = String("&copy ") + new Date().getFullYear() + String(" Michael Coleman    Utah");
