const requestURL = 'https://api.scryfall.com/cards/random';

fetch(requestURL)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        displayCard(jsonObject);
    })

function displayCard(jsonObject) {
    let nameClass = document.querySelector('.card-name');
    let imgClass = document.querySelector('.card-image');
    let artistClass = document.querySelector('.artist');

    nameClass.innerHTML = jsonObject['name'];
    imgClass.src = jsonObject['image_uris']['normal'];
    artistClass.innerHTML = "By " + jsonObject['artist'];
}