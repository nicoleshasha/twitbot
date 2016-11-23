var TwitterPackage = require('twitter');
var secret = require("./secret");
var Magic = require('./models/eightBall.js');
var Weather = require('./models/Weather.js');


var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@makers_twit_bot'}, function(stream) {
  stream.on('data', function(tweet) {

    magicBall = Magic.eightBall(tweet)
    statusObj2 = {status: magicBall}
    Twitter.post('statuses/update', statusObj2,  function(error, tweetReply, response){
      if(error){
        console.log(error);
      }
      console.log(tweetReply.text);
    });


    Weather.weather(tweet, function(text) {
      statusObj = {status: text}
      console.log(tweet.text);
      Twitter.post('statuses/update', statusObj,  function(error, tweetReply, response){
        if(error){
          console.log(error);
        }
        console.log(tweetReply.text);
      });
    });

  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
