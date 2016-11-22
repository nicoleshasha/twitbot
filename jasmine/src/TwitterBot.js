var TwitterPackage = require('twitter');
var secret = require("../secret");
var request = require("request")


//make a new Twitter object
var twitterBot = new TwitterPackage(secret);

// WEATHER
// Call the stream function and pass in 'statuses/filter', our filter object, and our callback
twitterBot.stream('statuses/filter', {track: '#weather #london'}, function(stream) {
  // ... when we get tweet data...
  stream.on('data', function(tweet) {

    // print out the text of the tweet that came in
    console.log(tweet.text);
    console.log(tweet.user.screen_name);

    //build our reply object
    request("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=134d393fd68fd2c3c4db178a50b5ddb8", function(error2,response2,body2) {
      n = body2.indexOf("temp")
      temp = body2.slice(n+6,n+10)

      var statusObj = {status: "Hi @" + tweet.user.screen_name + ", the temperature in London is "+ temp+"°C"}
      twitterBot.post('statuses/update', statusObj,  function(error, tweetReply, response){

        //if we get an error print it out
        if(error){
          console.log(error);
        }

        //print the text of the tweet we sent out
        console.log(tweetReply.text);
      });

    });

  });

  // ... when we get an error...
  stream.on('error', function(error) {
    //print out the error
    console.log(error);
  });
});
