var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://getitchrome.herokuapp.com/api/events", false);
xhr.send();

var result = xhr.responseText;

// for (x=0;x<result.articles)
console.log("--------------------RESULT-----------------" + result)