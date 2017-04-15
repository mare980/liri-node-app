var keys = require('./keys.js');
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var fs = require('fs');


var action = process.argv[2];
var value = process.argv[3];

//capture user input, and inform user of what to type in.
console.log("Type my-tweets , spotify-this-song , movie-this , or do-what-it-says to get started!");


	for(var i = 4; i < process.argv.length; i++) {
	    value += '+' + process.argv[i];
	}


// The switch-case will direct which function gets run.	
	switch(action){

		case 'my-tweets':
		myTweets();
		break;

		case 'spotify-this-song':
		spotifySong();
		break;

		case 'movie-this':
		movieThis();
		break;

		case 'do-what-it-says':
		doSays();
		break;
		
	}
};

function tweets(){
	console.log("Tweets headed your way!");
	//new variable for twitter
	var twit = new twitter({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.consumer_secret,
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret
	});

	//twitUser for twitter function.
	var twitUser = {
		screen_name: 'marirefly',
		count: 20
	};

	
	twit.get('statuses/user_timeline', twitUser, function(error, data, response){
		if (!error) {
	        for (var i = 0; i < data.length; i++) {
	            var twitterData = ('@' + data[i].user.screen_name + ": " + '\n' + data[i].created_at + '\n' + data[i].text + '\n');
	            console.log(twitterData);
	            console.log("-------------------------");
	        }
	    };
	});
};

