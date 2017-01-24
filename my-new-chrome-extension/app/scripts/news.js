var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=b3be849909794624bb814119271d0ea8", false);
xhr.send();

var result = JSON.parse(xhr.responseText);
ument.getElementById("news").appendChild(a);
// }

for(var i=0; i<5; i++){
	console.log("--------------------RESULT-----------------" + result.articles[i].title);
	console.log("--------------------RESULT-----------------" + result.articles[i].url);

	var para = document.createElement("P"); 

		// document.body.innerHTML = "";
		//var t = document.createTextNode(JSON.stringify(result, null, 4));
		var t = document.createTextNode(JSON.stringify(result.articles[i].title, null, 4));
		var u = document.createTextNode(JSON.stringify(result.articles[i].url, null, 4));
		var div = document.createElement('div');
		var a = document.createElement('a');
			a.appendChild(u);
			a.href = u;
		//para.appendChild(t);
		//para.appendChild(u);    
		div.appendChild(t)
		div.appendChild(a)
		 
	                                 // Append the text to <p>
		document.getElementById("news").appendChild(div);
};

