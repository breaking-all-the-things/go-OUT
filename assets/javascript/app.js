
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAEgbnDaSU0YcCQ3YR0XkDeJ3IEpKA87OI",
  authDomain: "goout-e23d5.firebaseapp.com",
  databaseURL: "https://goout-e23d5.firebaseio.com",
  projectId: "goout-e23d5",
  storageBucket: "",
  messagingSenderId: "392746248806"
};
firebase.initializeApp(config);

var database = firebase.database();

// var currentConditionsUrl =
//   "http://dataservice.accuweather.com/currentconditions/v1" +
//   location +
//   "A9IYPehiyBlSicaf0AMQF9lZsMQMnLnH";
// var forecastConditionsUrl =
//   "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
//   location +
//   "A9IYPehiyBlSicaf0AMQF9lZsMQMnLnH";

$("#location-search").on("click", function(event) {
  console.log("Clicked...");
  
  event.preventDefault();
  var myLocation = $("#the-real-location").val().trim();
  console.log(myLocation);
  var eventbriteURL =
    "https://www.eventbriteapi.com/v3/events/search/?location.address=" + myLocation +
    "&location.within=10mi&token=S5ODNTLSPUBRNVOLMPSS";
  ajaxCall(eventbriteURL);
  console.log(eventbriteURL);
});

function ajaxCall(url) {
  console.log("ajaxCall...");
  
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(response) {
    console.log("test");
    console.log(response);
  });
}
