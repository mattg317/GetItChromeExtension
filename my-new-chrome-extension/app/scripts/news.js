

var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=b3be849909794624bb814119271d0ea8", false);
xhr.send();

var result = JSON.parse(xhr.responseText);

// // for (x=0;x<result.articles)

// console.log("--------------------RESULT-----------------" + result.events[1].title)
// console.log("--------------------RESULT-----------------" + result.events[2].title)




// var para = document.createElement("P"); 

// // document.body.innerHTML = "";
// //var t = document.createTextNode(JSON.stringify(result, null, 4));
// var t = document.createTextNode(JSON.stringify(result.events[1].title, null, 4));

// para.appendChild(t);                                          // Append the text to <p>
// document.getElementById("sports").appendChild(para);


for(var i=0; i<5; i++){
	console.log("--------------------RESULT-----------------" + result.articles[i].title);
	console.log("--------------------RESULT-----------------" + result.articles[i].url);

	var para = document.createElement("P"); 

		// document.body.innerHTML = "";
		//var t = document.createTextNode(JSON.stringify(result, null, 4));
		var t = document.createTextNode(JSON.stringify(result.articles[i].title, null, 4));
		var u = document.createTextNode(JSON.stringify(result.articles[i].url, null, 4));
		var div = document.createElement('div');
		div.id="divID" + [i];
		console.log(div.id)
		var a = document.createElement('a');
			a.appendChild(u);
			a.setAttribute('href', u);
			console.log(u)
			console.log(a.href)
		//para.appendChild(t);
		//para.appendChild(u);    
		div.appendChild(t)
		div.appendChild(a)
		 
	                                 // Append the text to <p>
		document.getElementById("news").appendChild(div);

		 div.click(function() {
      chrome.tabs.create({url: u});
    });
};

// function parseURL(url) {
//     var parser = document.createElement('a'),
//         searchObject = {},
//         queries, split, i;
//     // Let the browser do the work
//     parser.href = url;
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
// }