const requestURL = 'https://mjaycolebyui.github.io/wdd230/chamber/data/directory.json';

fetch (requestURL)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        const businesses = jsonObject['businesses'];        
        businesses.forEach(displayBusinessCard);
    })

function displayBusinessCard(business) {
    let cardParent = document.querySelector('.dir-cards');
    //Create the new elements
    let newCard = document.createElement('div');
    let logo = document.createElement('img');
    let name = document.createElement('h3');
    let address = document.createElement('p');

    logo.src = business['image'];
    name.textContent = business['name'];
    address.textContent = business['address'];

    newCard.setAttribute('class', 'dir-card');
    newCard.append(logo);
    newCard.append(name);
    newCard.append(address);

    cardParent.append(newCard);
}