calcWindChill();

function calcWindChill() {
    let temp = document.getElementsByClassName("temp")[0].innerHTML;
    let windSpeed = document.getElementsByClassName("speed")[0].innerHTML;
    let chill = document.getElementsByClassName("chill")[0];

    var myTemp = parseFloat(temp);
    var mySpeed = parseFloat(windSpeed);
    
    if (myTemp <= 50 && mySpeed > 3)
    {
        var degree = 35.74 + (0.6215 * myTemp) - (35.75 * (mySpeed ** 0.16)) + (0.4275 * myTemp * (mySpeed ** 0.16));
        chill.innerHTML = String(degree.toFixed(1));
    }
    else
    {
        chill.innerHTML = String("NA");
    }
}

