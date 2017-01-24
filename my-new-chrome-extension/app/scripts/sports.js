var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://api.seatgeek.com/2/events?q=Rangers&client_id=NjY4MDExN3wxNDg1MTk5NTUz", false);
xhr.send();

var result = JSON.parse(xhr.responseText);

var result = JSON.parse(xhr.responseText);

var hrefs = [];
var titles = [];

for(var i=0; i<5; i++){
	

	var para = document.createElement("P"); 

		
		var t = document.createTextNode(JSON.stringify(result.events[i].title, null, 4));
		var u = document.createTextNode(JSON.stringify(result.events[i].url, null, 4));
		var div = document.createElement('div');
		div.id="divID" + [i];
		console.log(u.data)
		
			hrefs.push(u.data);
			titles.push(t.data);
			
			
	                                
		document.getElementById("sports").appendChild(div);

	
};


document.getElementById("divID0").innerHTML = "<a href=" + hrefs[0] + " target = 'blank'><div><p>" + titles[0] + "</p></div></a><br>"
document.getElementById("divID1").innerHTML = "<a href=" + hrefs[1] + " target = 'blank'><div><p>" + titles[1] + "</p></div></a><br>"
document.getElementById("divID2").innerHTML = "<a href=" + hrefs[2] + " target = 'blank'><div><p>" + titles[2] + "</p></div></a><br>"
document.getElementById("divID3").innerHTML = "<a href=" + hrefs[3] + " target = 'blank'><div><p>" + titles[3] + "</p></div></a><br>"
document.getElementById("divID4").innerHTML = "<a href=" + hrefs[4] + " target = 'blank'><div><p>" + titles[4] + "</p></div></a><br>"





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
	console.log("--------------------RESULT-----------------" + result.events[i].title);
	console.log("--------------------RESULT-----------------" + result.events[i].url);

	var para = document.createElement("P"); 

		// document.body.innerHTML = "";
		//var t = document.createTextNode(JSON.stringify(result, null, 4));
		
		var div = document.createElement('div');
		var a = document.createElement('a');
			a.appendChild(u);
			a.href = u;
		//para.appendChild(t);
		//para.appendChild(u);    
		div.appendChild(t)
		div.appendChild(a)
		 
	                                 // Append the text to <p>
		document.getElementById("sports").appendChild(div);
};

