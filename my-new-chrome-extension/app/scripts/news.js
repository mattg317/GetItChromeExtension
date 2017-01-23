var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=b3be849909794624bb814119271d0ea8", false);
xhr.send();

var result = xhr.responseText;

// for (x=0;x<result.articles)
console.log("--------------------RESULT-----------------" + result)