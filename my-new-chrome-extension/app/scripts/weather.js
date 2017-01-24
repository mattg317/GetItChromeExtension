var xhr = new XMLHttpRequest();
var WeatherAPIkey = "08b0500863b3dfb3863a05215f613d59";

xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + WeatherAPIkey, false);
xhr.send();

var result = xhr.responseText;

// for (x=0;x<result.articles)
console.log("--------------------RESULT-----------------" + result)

var para = document.createElement("P"); 

// document.body.innerHTML = "";
var t = document.createTextNode(JSON.stringify(result, null, 4));

para.appendChild(t);                                          // Append the text to <p>
document.getElementById("weather").appendChild(para);
