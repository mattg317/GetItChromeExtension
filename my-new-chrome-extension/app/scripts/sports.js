var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://api.seatgeek.com/2/events?client_id=NjY4MDExN3wxNDg1MTk5NTUz", false);
xhr.send();

var result = xhr.responseText;

// for (x=0;x<result.articles)
console.log("--------------------RESULT-----------------" + result)

var para = document.createElement("P"); 

// document.body.innerHTML = "";
var t = document.createTextNode(JSON.stringify(result, null, 4));

para.appendChild(t);                                          // Append the text to <p>
document.getElementById("sports").appendChild(para);

// navigator.geolocation.getCurrentPosition(function(position) {
//     console.log(position);
// }, function(positionError) {
//     console.error(positionError);
// });