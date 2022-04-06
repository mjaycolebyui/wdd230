var templeUrl = "https://mjaycolebyui.github.io/wdd230/final_project/temples/temples.json";

fetch (templeUrl)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        loadTempleList(jsonObject);
    })

function loadTempleList(jsonObject) {
    var templeListParent = document.querySelector('.temple-images');

    for (temple in jsonObject.temples) {
        var newTemple = document.createElement('div');
        newTemple.setAttribute('class', 'temple-img');

        var templeImage = document.createElement('img');
        templeImage.src = jsonObject.temples[temple].image;

        var templeName = document.createElement('h4');
        templeName.textContent = jsonObject.temples[temple].name;

        newTemple.append(templeImage);
        newTemple.append(templeName);

        templeListParent.append(newTemple);
    }
}