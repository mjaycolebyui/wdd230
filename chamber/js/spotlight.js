const url = 'https://mjaycolebyui.github.io/wdd230/chamber/data/directory.json';
var spotlight1 = document.querySelector('.spotlight-1');
var spotlight2 = document.querySelector('.spotlight-2');
var spotlight3 = document.querySelector('.spotlight-3');


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
    spotlight1.innerHTML = "";
    spotlight2.innerHTML = "";
    spotlight3.innerHTML = "";

    let index = 0;

    //Create the stuff for spotlight 1
    index = getRandomInt(0, jsonObject.businesses.length);

    let bizName = document.createElement('h3');
    bizName.textContent = jsonObject.businesses[index].name;

    let bizIcon = document.createElement('img');
    bizIcon.src = jsonObject.businesses[index].image;
    bizIcon.style.height = '70px';

    let bizTag = document.createElement('p');
    bizTag.textContent = jsonObject.businesses[index].tag;

    spotlight1.append(bizName);
    spotlight1.append(bizIcon);
    spotlight1.append(bizTag);

    //Create the stuff for spotlight 2
    index = getRandomInt(0, jsonObject.businesses.length);

    let bizName2 = document.createElement('h3');
    bizName2.textContent = jsonObject.businesses[index].name;

    let bizIcon2 = document.createElement('img');
    bizIcon2.src = jsonObject.businesses[index].image;
    bizIcon2.style.height = '70px';

    let bizTag2 = document.createElement('p');
    bizTag2.textContent = jsonObject.businesses[index].tag;

    spotlight2.append(bizName2);
    spotlight2.append(bizIcon2);
    spotlight2.append(bizTag2);

    //Create the stuff for spotlight 3
    index = getRandomInt(0, jsonObject.businesses.length);

    let bizName3 = document.createElement('h3');
    bizName3.textContent = jsonObject.businesses[index].name;

    let bizIcon3 = document.createElement('img');
    bizIcon3.src = jsonObject.businesses[index].image;
    bizIcon3.style.height = '70px';

    let bizTag3 = document.createElement('p');
    bizTag3.textContent = jsonObject.businesses[index].tag;

    spotlight3.append(bizName3);
    spotlight3.append(bizIcon3);
    spotlight3.append(bizTag3);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
