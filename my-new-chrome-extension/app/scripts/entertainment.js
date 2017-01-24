var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://getitchrome.herokuapp.com/api/concerts", false);
xhr.send();

var result = JSON.parse(xhr.responseText);
ument.getElementById("news").appendChild(a);



// for (x=0;x<result.articles)
console.log("--------------------RESULT-----------------" + result[0].title);
console.log("--------------------RESULT-----------------" + result[0].url)

var para = document.createElement("P"); 

// document.body.innerHTML = "";
var t = document.createTextNode(JSON.stringify(result, null, 4));

para.appendChild(t);                                          // Append the text to <p>
document.getElementById("entertainment").appendChild(para);
