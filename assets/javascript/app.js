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

 var currentConditionsUrl = "http://dataservice.accuweather.com/currentconditions/v1"+ location + "A9IYPehiyBlSicaf0AMQF9lZsMQMnLnH";
 var forecastConditionsUrl = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + location + "A9IYPehiyBlSicaf0AMQF9lZsMQMnLnH";
 var eventbrite = "https://www.eventbriteapi.com/v3/events/search/?location.address=" + location + "&location.within=10mi&token=K4DUF7V3GIFZDMZYFH57"