const requestURL = 'https://mjaycolebyui.github.io/wdd230/chamber/data/directory.json';
var cardView = true;

fetch (requestURL)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        const businesses = jsonObject['businesses'];     
        if (cardView){
            document.querySelector('.dir-cards').innerHTML = "";
            businesses.forEach(displayBusinessCard);
        }
        else {
            document.querySelector('.dir-list').innerHTML = "";
            businesses.forEach(displayBusinessList);
        }   
    })

function displayBusinessCard(business) {
    let cardParent = document.querySelector('.dir-cards');

    //Create the new elements
    let newCard = document.createElement('div');
    let logo = document.createElement('img');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');

    //Set the values for the new elements
    logo.src = business['image'];
    name.textContent = business['name'];
    address.textContent = business['address'];
    phone.textContent = business['phone'];
    website.textContent = business['website'];

    //Add them to the new card
    newCard.setAttribute('class', 'dir-card');
    newCard.append(logo);
    newCard.append(name);
    newCard.append(address);
    newCard.append(phone);
    newCard.append(website);

    //Add the new card to the parent
    cardParent.append(newCard);
}

function displayBusinessList(business) {
    let listParent = document.querySelector('.dir-list');

    //Create the new elements
    let newListItem = document.createElement('div');
    let logo = document.createElement('img');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');

    //Set the values for the new elements
    logo.src = business['image'];
    name.textContent = business['name'];
    address.textContent = business['address'];
    phone.textContent = business['phone'];
    website.textContent = business['website'];

    //Add them to the new card
    newListItem.setAttribute('class', 'dir-list-item');
    newListItem.append(logo);
    newListItem.append(name);
    newListItem.append(address);
    newListItem.append(phone);
    newListItem.append(website);

    //Add the new card to the parent
    listParent.append(newListItem);
}