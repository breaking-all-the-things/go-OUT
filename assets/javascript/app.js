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

 var eventfulURL = "http://eventful.com/events?q=" + location + "xsznpdJsqBSBM6xz";
 var currentConditionsUrl = "http://dataservice.accuweather.com/currentconditions/v1"+ location + "A9IYPehiyBlSicaf0AMQF9lZsMQMnLnH";
 var forecastConditions = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + location + "A9IYPehiyBlSicaf0AMQF9lZsMQMnLnH";
 var grouponUrl = "";