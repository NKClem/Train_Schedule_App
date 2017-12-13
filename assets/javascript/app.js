// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDVrEYfigMFzeXUlXPx4dyCKRmTi7hzvyI",
    authDomain: "train-time-3fbf6.firebaseapp.com",
    databaseURL: "https://train-time-3fbf6.firebaseio.com",
    projectId: "train-time-3fbf6",
    storageBucket: "train-time-3fbf6.appspot.com",
    messagingSenderId: "708902008075"
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();

  //button for adding new trains
  $('#add-button').on('click', function(event) {
  	event.preventDefault();

  	var trainName = $('#name-input').val().trim();
  	var trainDestination = $('#destination-input').val().trim();
  	var trainTime = $('#time-input').val().trim();
  	var trainFrequency = $('#frequency-input').val().trim();

  	//local object to hold train data...
  	var newTrain = {
  			name: trainName,
  			destination: trainDestination,
  			time: trainTime,
  			frequency: trainFrequency
  	};

  	//...and upload the data to the database
  	database.ref().push(newTrain);

  	console.log(newTrain.name);
  	console.log(newTrain.destination);
  	console.log(newTrain.time);
  	console.log(newTrain.frequency);

  	//clear input boxes
  	$('#name-input').val('');
  	$('#destination-input').val('');
  	$('#time-input').val('');
  	$('#frequency-input').val('');

  });