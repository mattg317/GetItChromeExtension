

var userHistory = []
var topSites = []

chrome.tabs.getSelected(function(tab){
        // console.log("this page " + tab.url);
        // console.log("this page " + tab.title);


		// console.log("result " + result)

         var newPage = {
        pageName: tab.title,
        pageURL: tab.url,
        pageText: tab.text
          };

    userHistory.push(newPage)
    }
);



chrome.history.search({text: '', maxResults: 1000}, function(data) {
    data.forEach(function(page) {
      
      var newPage = {
      	pageName: page.title,
      	pageURL: page.url
      }

      userHistory.push(newPage)
    });
});

console.log(userHistory)

// for (x=0, x<userHistory.length; x++){

// var xhr = new XMLHttpRequest();

// xhr.open("GET", newPage, false);
// xhr.send();

// var result = xhr.response;

// console.log("result " + result)

//  if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
       
//        var lat = position.coords.latitude;
//        var lng = position.coords.longitude;
//        var userLat = parseFloat(lat);
//        var userLng = parseFloat(lng);
      
//   var myCenter = new google.maps.LatLng(userLat,userLng);
//   var geocoder = new google.maps.Geocoder();
//   console.log(geocoder)
// });
//   }

chrome.topSites.get(function callback (result){
  console.log(result)
});

navigator.permissions.query({name:'geolocation'})
  .then(function(permissionStatus) {  
    console.log('geolocation permission state is ', permissionStatus.state);

    permissionStatus.onchange = function() {  
      console.log('geolocation permission state has changed to ', this.state);
    };
  });

navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
}, function(positionError) {
    console.error(positionError);
});

var xhr = new XMLHttpRequest();

xhr.open("GET",  "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=b3be849909794624bb814119271d0ea8", false);
xhr.send();

var result = xhr.responseText;
console.log("--------------------RESULT-----------------" + result)

b3be849909794624bb814119271d0ea8