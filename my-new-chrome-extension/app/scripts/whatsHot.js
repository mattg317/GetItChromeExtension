var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://getitchrome.herokuapp.com/api/events", false);
xhr.send();

var result = JSON.parse(xhr.responseText);

var result = JSON.parse(xhr.responseText);

var hrefs = [];
var titles = [];

for(var i=0; i<5; i++){
	

	var para = document.createElement("P"); 

		
		var t = document.createTextNode(JSON.stringify(result[i].title, null, 4));
		var u = document.createTextNode(JSON.stringify(result[i].url, null, 4));
		var div = document.createElement('div');
		div.id="divID" + [i];
		console.log(u.data)
		
			hrefs.push(u.data);
			titles.push(t.data);
			
			
	                                
		document.getElementById("whatsHot").appendChild(div);

	
};


document.getElementById("divID0").innerHTML = "<a href=" + hrefs[0] + " target = 'blank'><div><p>" + titles[0] + "</p></div></a><br>"
document.getElementById("divID1").innerHTML = "<a href=" + hrefs[1] + " target = 'blank'><div><p>" + titles[1] + "</p></div></a><br>"
document.getElementById("divID2").innerHTML = "<a href=" + hrefs[2] + " target = 'blank'><div><p>" + titles[2] + "</p></div></a><br>"
document.getElementById("divID3").innerHTML = "<a href=" + hrefs[3] + " target = 'blank'><div><p>" + titles[3] + "</p></div></a><br>"
document.getElementById("divID4").innerHTML = "<a href=" + hrefs[4] + " target = 'blank'><div><p>" + titles[4] + "</p></div></a><br>"



