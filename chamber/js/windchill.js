const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=Hooper&units=imperial&appid=90f2c50a722503252a55278283c7524a';

fetch (requestURL)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        console.log(jsonObject);
        calcWeather(jsonObject);
    });

function calcWeather(jsonObject) {
    var temp = document.querySelector('.temp');
    var condition = document.querySelector('.condition');
    var icon = document.querySelector('.weather-icon');
    var speed = document.querySelector('.speed');
    var chill = document.querySelector('.chill');

    temp.textContent = jsonObject.main['temp'];
    condition.textContent = jsonObject.weather[0]['main'];
    icon.src = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
    speed.textContent = jsonObject.wind.speed;
    chill.textContent = calcWindChill(jsonObject.wind.speed, jsonObject.main['temp']);
}
// calcWindChill();

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

