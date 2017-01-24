var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=b3be849909794624bb814119271d0ea8", false);
xhr.send();

var result = JSON.parse(xhr.responseText);
var parsedLink = []
// for (x=0;x<result.articles)
console.log("--------------------RESULT-----------------" + result.articles[0].title)
console.log("--------------------RESULT-----------------" + result.articles[0].url)

for (x=0;x<result.articles.length;x++){

var a = document.createElement('a');
// document.body.innerHTML = "";
var linkText = document.createTextNode(result.articles[0].title);
var linkUrl = document.createTextNode(result.articles[0].url)
console.log(linkUrl)
a.appendChild(linkText);

a.title = linkText;
a.href = parsedLink[0];


// para.appendChild(t);                                          // Append the text to <p>
document.getElementById("news").appendChild(a);
}

// var a = document.createElement('a');
// var linkText = document.createTextNode("my title text");
// a.appendChild(linkText);
// a.title = "my title text";
// a.href = "http://example.com";
// document.body.appendChild(a);

// function parseURL(url) {
//     var parser = document.createElement('a'),
//         searchObject = {},
//         queries, split, i;
//     // Let the browser do the work
//     parser.href = linkUrl;
//     // Convert query string to object
//     queries = parser.search.replace(/^\?/, '').split('&');
//     for( i = 0; i < queries.length; i++ ) {
//         split = queries[i].split('=');
//         searchObject[split[0]] = split[1];
//     }
//     return {
//         protocol: parser.protocol,
//         host: parser.host,
//         hostname: parser.hostname,
//         port: parser.port,
//         pathname: parser.pathname,
//         search: parser.search,
//         searchObject: searchObject,
//         hash: parser.hash
//     };
//     console.log(parser)
// }