var TwitterPackage = require('twitter');
var secret = require("./secret");
var Ball = require('./models/eightBall.js');

console.log("Logging:");
console.log(Ball);
console.log(Ball.answer());

console.log(TwitterPackage);

//make a new Twitter object
var Twitter = new TwitterPackage(secret);

// Call the stream function and pass in 'statuses/filter', our filter object, and our callback
Twitter.stream('statuses/filter', {track: '@makers_twit_bot'}, function(stream) {
//Twitter.stream('statuses/filter', {track: '#london'}, function(stream) {
  // ... when we get tweet data...
  stream.on('data', function(tweet) {

    // print out the text of the tweet that came in
    console.log(tweet.text);
    //build our reply object
    var statusObj = {status: "Hi @" + tweet.user.screen_name + " you are the best!" }
    // var statusObj = {status: "Hi @" + tweet.user.screen_name + " https://www.youtube.com/watch?v=8Pr-p8tCruw"}
    //call the post function to tweet something
    Twitter.post('statuses/update', statusObj,  function(error, tweetReply, response){

      //if we get an error print it out
      if(error){
        console.log(error);
      }

      //print the text of the tweet we sent out
      console.log(tweetReply.text);
    });
  });

  // ... when we get an error...
  stream.on('error', function(error) {
    //print out the error
    console.log(error);
  });
});
