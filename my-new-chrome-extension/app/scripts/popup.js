// var xhr = new XMLHttpRequest();

// xhr.open("GET", window.location.href, false);
// xhr.send();

// var result = xhr.responseText;

// console.log("result " + result)

var userHistory = []

chrome.tabs.getSelected(function(tab){
        // console.log("this page " + tab.url);
        // console.log("this page " + tab.title);

         var newPage = {
        pageName: tab.title,
        pageURL: tab.url
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

 // var currentURL = window.location.origin;

 //          $.post(currentURL + "/api/eventsCreated", userHistory, function(data){
 //            console.log(data);
 //          }); //end POST 