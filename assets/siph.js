//Should I Park Here

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyDSqVrrCzIDY3FydRzWwBVrTwFAXHo0imU",
   authDomain: "siph-1494544739001.firebaseapp.com",
   databaseURL: "https://siph-1494544739001.firebaseio.com",
   projectId: "siph-1494544739001",
   storageBucket: "siph-1494544739001.appspot.com",
   messagingSenderId: "524514555118"
 };

 firebase.initializeApp(config);

//define var for 1st auth key for first API

var authKey1 = "privatekeyforspotcrimepublicusers-commercialuse-877.410.1607";
var baseUrl = "https://api.spotcrime.com/crimes.json?lat=40.3718&lon=-73.9959179&radius=0.08&callback=jQuery21306930704791620661_1494546905160&key=privatekeyforspotcrimepublicusers-commercialuse-877.410.1607&_=1494546905164"



function runQuery() {

  // The AJAX function uses the queryURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "NYTData"

  $.ajax({
    url: baseUrl,
    method: "GET",
    dataType:'jsonp'
  }).done(function(crimeStats) {
  	console.log(crimeStats.crimes)
  });
};

runQuery();









//define var for 2nd auth key

var authKey2 = "";

//global vars 


//load up function 
//want map to be zoomed out to a world view when page opens up 
//want our rating to be cleared out on load 

//locate me button onclick loads up to google map api location finder



