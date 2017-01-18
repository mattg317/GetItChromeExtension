// var xhr = new XMLHttpRequest();

// xhr.open("GET", window.location.href, false);
// xhr.send();

// var result = xhr.responseText;

// console.log("result " + result)

chrome.tabs.getSelected(function(tab){
        console.log("this page " + tab.url);
    }
);

chrome.history.search({text: '', maxResults: 1000}, function(data) {
    data.forEach(function(page) {
        console.log("history " + page.url);
    });
});