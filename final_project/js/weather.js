const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=Hooper&units=imperial&appid=90f2c50a722503252a55278283c7524a';
var weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.1638&lon=112.1224&units=imperial&appid=90f2c50a722503252a55278283c7524a';

var lat;
var long;

var daysOfForcast = 3;

navigator.geolocation.getCurrentPosition(success, fail);

function success(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=90f2c50a722503252a55278283c7524a`;

    fetch (weatherURL)
        .then (function (response){
            return response.json();
        })
        .then (function (jsonObject){
            console.log(jsonObject);
            calcWeather(jsonObject);
        });
}

function fail() {
    fetch (weatherURL)
        .then (function (response){
            return response.json();
        })
        .then (function (jsonObject){
            calcWeather(jsonObject);
        });
}


function calcWeather(jsonObject) {
    var temp = document.querySelector('.temp');
    var condition = document.querySelector('.condition');
    var icon = document.querySelector('.weather-icon');
    var speed = document.querySelector('.speed');
    var chill = document.querySelector('.chill');

    temp.textContent = jsonObject.current['temp'];
    condition.textContent = jsonObject.current.weather[0]['main'];
    icon.src = `https://openweathermap.org/img/w/${jsonObject.current.weather[0].icon}.png`;
    speed.textContent = jsonObject.current.wind_speed;
    chill.textContent = calcWindChill(jsonObject.current.wind_speed, jsonObject.current['temp']);

    if (jsonObject['alerts'] != null) {
        alert(jsonObject.current['alerts']['description']);
    }

    forecast(jsonObject);
}

function calcWindChill(windSpeed, temp) {
    
    if (temp <= 50 && windSpeed > 3)
    {
        var degree = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temp * (windSpeed ** 0.16));
        return String(degree.toFixed(1));
    }
    else
    {
        return "NA";
    }
} 

function forecast(jsonObject) {
    var forecastParent = document.querySelector('.forecast');

    for (let i = 0; i < daysOfForcast; i++) {
        var dayParent = document.createElement('div');
        dayParent.setAttribute('class', 'day-weather');

        var icon = document.createElement('img');
        icon.src = `https://openweathermap.org/img/w/${jsonObject.daily[i].weather[0].icon}.png`;

        var temp = document.createElement('p');
        temp.textContent = jsonObject.daily[i].temp['day'] + " F";

        dayParent.append(icon);
        dayParent.append(temp);

        forecastParent.append(dayParent);
    }
}