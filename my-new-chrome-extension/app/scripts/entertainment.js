

var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://getitchrome.herokuapp.com/api/concerts", false);
xhr.send();

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
			
			
	                                
		document.getElementById("entertainment").appendChild(div);

	
};


document.getElementById("divID0").innerHTML = "<a href=" + hrefs[0] + " target = 'blank'><div><p>" + titles[0] + "</p></div></a><br>"
document.getElementById("divID1").innerHTML = "<a href=" + hrefs[1] + " target = 'blank'><div><p>" + titles[1] + "</p></div></a><br>"
document.getElementById("divID2").innerHTML = "<a href=" + hrefs[2] + " target = 'blank'><div><p>" + titles[2] + "</p></div></a><br>"
document.getElementById("divID3").innerHTML = "<a href=" + hrefs[3] + " target = 'blank'><div><p>" + titles[3] + "</p></div></a><br>"
document.getElementById("divID4").innerHTML = "<a href=" + hrefs[4] + " target = 'blank'><div><p>" + titles[4] + "</p></div></a><br>"

navigator.permissions.query({name:'geolocation'})
  .then(function(permissionStatus) {  
    console.log('geolocation permission state is ', permissionStatus.state);

    permissionStatus.onchange = function() {  
      console.log('geolocation permission state has changed to ', this.state);
    };
  });

var lat;
var lng;

navigator.geolocation.getCurrentPosition(function(position) {
    // console.log(position.coords.latitude);
    // var lat = position.coords.latitude
    var lat = position.coords.latitude
	var lng = position.coords.longitude
}, function(positionError) {
    console.error(positionError);
});

console.log(lat)


var xhr = new XMLHttpRequest();

xhr.open("GET",  "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true", false);
xhr.send();

var res = JSON.parse(xhr.responseText);
console.log(res)

// http://maps.googleapis.com/maps/api/geocode/json?latlng=44.4647452,7.3553838&sensor=true
