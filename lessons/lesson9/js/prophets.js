const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch (requestURL)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        const prophets = jsonObject['prophets'];        
        prophets.forEach(displayProphet);
    })

function displayProphet(prophet) {
    console.log(prophet);
    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let portrait = document.createElement('img');
    let order = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    name.textContent = `${prophet.name} ${prophet.lastname}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}, ${getOrder(prophet)} Latter-Day Prophet`);
    portrait.setAttribute('loading', 'lazy');

    //Build the order
    order.textContent = `${getOrder(prophet)} Latter-Day Prophet, born ${prophet['birthdate']}`;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(name);
    card.appendChild(portrait);
    card.appendChild(order);
    card.setAttribute('class', 'card');
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}

function getOrder(prophet) {
    switch (prophet['order'])
    {
        case 1:
            return prophet['order'] + "st";
        case 2:
            return prophet['order'] + "nd";
        case 3:
            return prophet['order'] + "rd";
        default:
            return prophet['order'] + "th";
    }
}