let dateField = document.querySelector("#current-date");

let now = new Date();
let fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now);

dateField.innerHTML = String(fulldate);