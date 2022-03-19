const url = 'https://mjaycolebyui.github.io/wdd230/chamber/data/directory.json';
var spolight1 = document.querySelector('.spotlight-1');
var spolight2 = document.querySelector('.spotlight-2');
var spolight3 = document.querySelector('.spotlight-3');


getData();

function getData(){
    fetch (url)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        console.log(jsonObject);
        fillSpotlights(jsonObject);
    })
}

function fillSpotlights(jsonObject) {
    spolight1.innerHTML = "";
    spolight2.innerHTML = "";
    spolight3.innerHTML = "";

    let index = 0;

    //Create the stuff for spotlight 1
    index = getRandomInt(0, jsonObject.businesses.length);

    let bizName = document.createElement('h3');
    bizName.textContent = jsonObject.businesses[index].name;

    let bizIcon = document.createElement('img');
    bizIcon.src = jsonObject.businesses[index].image;
    bizIcon.style.height = '100px';

    spolight1.append(bizName);
    spolight1.append(bizIcon);

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
