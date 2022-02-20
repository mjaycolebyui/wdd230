var one_day = 1000 * 60 * 60 * 24;


var last_time = new Date(localStorage.getItem('time'));
var current_time = new Date();

var difference_in_time = Math.round((current_time.getTime() - last_time.getTime()) / (one_day));

document.getElementsByClassName('time')[0].innerHTML = "It's been " + difference_in_time + " days since your last visit";


localStorage.setItem('time', new Date());
