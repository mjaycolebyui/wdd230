var templeUrl = "https://mjaycolebyui.github.io/wdd230/final_project/temples/temples.json";

fetch (templeUrl)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        console.log(jsonObject);
        loadTempleList(jsonObject);
    })

function loadTempleList(jsonObject) {
    var templeListParent = document.querySelector('.temple-images');

    for (temple in jsonObject) {
        var templeImage = document.createElement('img');
        templeImage.setAttribute('class', 'temple');

        templeImage.src = temple.image;

        templeListParent.append(templeImage);
    }

    jsonObject.forEach(element => {
        var templeImage = document.createElement('img');
        templeImage.setAttribute('class', 'temple');

        templeImage.src = element.image;

        templeListParent.append(templeImage);
    });
}