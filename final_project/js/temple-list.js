const requestURL = "https://mjaycolebyui.github.io/wdd230/final_project/temples/temples.json";

fetch (requestURL)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        console.log(jsonObject);
    })