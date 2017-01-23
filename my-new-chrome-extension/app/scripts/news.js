var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=b3be849909794624bb814119271d0ea8", false);
xhr.send();

var result = xhr.responseText;

// for (x=0;x<result.articles)
console.log("--------------------RESULT-----------------" + result)

var para = document.createElement("P"); 

// document.body.innerHTML = "";
var t = document.createTextNode(JSON.stringify(result, null, 4));

para.appendChild(t);                                          // Append the text to <p>
document.getElementById("news").appendChild(para);
