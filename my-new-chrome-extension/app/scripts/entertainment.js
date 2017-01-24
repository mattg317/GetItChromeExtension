

var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://getitchrome.herokuapp.com/api/concerts", false);
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
	console.log("--------------------RESULT-----------------" + result[i].title);
	console.log("--------------------RESULT-----------------" + result[i].url);

	var para = document.createElement("P"); 

		// document.body.innerHTML = "";
		//var t = document.createTextNode(JSON.stringify(result, null, 4));
		var t = document.createTextNode(JSON.stringify(result[i].title, null, 4));
		var u = document.createTextNode(JSON.stringify(result[i].url, null, 4));
		var div = document.createElement('div');
		var a = document.createElement('a');
			a.appendChild(u);
			a.href = u;
		//para.appendChild(t);
		//para.appendChild(u);    
		div.appendChild(t)
		div.appendChild(a)
		 
	                                 // Append the text to <p>
		document.getElementById("entertainment").appendChild(div);
};


