var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://getitchrome.herokuapp.com/api/events", false);
xhr.send();

var result = xhr.responseText;

// for (x=0;x<result.articles)
console.log("--------------------RESULT-----------------" + result.title)

var para = document.createElement("P"); 

// document.body.innerHTML = "";
var t = document.createTextNode(JSON.stringify(result, null, 4));

para.appendChild(t);                                          // Append the text to <p>
document.getElementById("whatsHot").appendChild(para);
