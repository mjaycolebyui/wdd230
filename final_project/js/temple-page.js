var templeUrl = "https://mjaycolebyui.github.io/wdd230/final_project/temples/temples.json";

var templeList = {};

fetch (templeUrl)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        templeList = jsonObject;
        loadTempleList();
    })

function loadTempleList() {
    var templeListParent = document.querySelector('.temple-page-list');

    for (temple in templeList.temples) {
        var newTemple = document.createElement('div');
        newTemple.setAttribute('class', 'temple-page-listing');

        var templeImage = document.createElement('img');
        templeImage.src = templeList.temples[temple].image;

        var templeName = document.createElement('h4');
        templeName.textContent = templeList.temples[temple].name;

        //Liking function
        var likedButton = document.createElement('button');
        likedButton.setAttribute('temp-id', `${templeList.temples[temple].name}`);

        //If local storage liked, then turn this to "liked"
        if (localStorage.getItem(`${templeList.temples[temple].name}`) == 'true') {            
            likedButton.textContent = "Liked";
            likedButton.setAttribute('onclick', `unlikeTemple(${temple})`)
        }
        else {
            likedButton.textContent = "Like";
            likedButton.setAttribute('onclick', `likeTemple(${temple})`)
        }


        var location = document.createElement('p');
        location.textContent = templeList.temples[temple].location;

        var dedicated = document.createElement('p');
        dedicated.textContent = templeList.temples[temple].dedicated;

        var address = document.createElement('p');
        address.textContent = templeList.temples[temple].address;

        var phone = document.createElement('p');
        phone.textContent = templeList.temples[temple].phone;

        var email = document.createElement('p');
        email.textContent = templeList.temples[temple].email;

        var history = document.createElement('p');
        history.textContent = templeList.temples[temple].history;

        var ordinances = document.createElement('p');
        ordinances.textContent = templeList.temples[temple]['ordinance-schedule'];

        var sessions = document.createElement('p');
        sessions.textContent = templeList.temples[temple]['session-schedule'];
        
        var closures = document.createElement('div');


        

        newTemple.append(templeImage);
        newTemple.append(templeName);
        newTemple.append(likedButton);
        newTemple.append(location);
        newTemple.append(dedicated);
        newTemple.append(address);
        newTemple.append(phone);
        newTemple.append(email);
        newTemple.append(history);
        newTemple.append(ordinances);
        newTemple.append(sessions);
        newTemple.append(closures);


        templeListParent.append(newTemple);
    }
}

function likeTemple(temple) {
    var templeToLike = document.querySelectorAll(`[temp-id="${templeList.temples[temple].name}"]`);
    templeToLike[0].textContent = "Liked";
    templeToLike[0].setAttribute('onclick', `unlikeTemple(${temple})`)

    localStorage.setItem(`${templeList.temples[temple].name}`, 'true');
}

function unlikeTemple(temple) {
    var templeToLike = document.querySelectorAll(`[temp-id="${templeList.temples[temple].name}"]`);
    templeToLike[0].textContent = "Like";
    templeToLike[0].setAttribute('onclick', `likeTemple(${temple})`)

    localStorage.setItem(`${templeList.temples[temple].name}`, 'false');
}