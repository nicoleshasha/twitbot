var TwitterPackage = require('twitter');
var secret = require("./secret");
var Magic = require('./models/eightBall.js');
var Forecast = require('./models/Weather.js');


var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@makers_twit_bot'}, function(stream) {
  stream.on('data', function(tweet) {
    if (tweet.text.includes("#magic8ball")) {
      magicBall = Magic.eightBall(tweet)
      ballObj = {status: "Hi @" + tweet.user.screen_name + " " + magicBall}
      Twitter.post('statuses/update', ballObj,  function(error, tweetReply, response){
        console.log(tweetReply)
      });
    } else if (tweet.text.includes('weather') || tweet.text.includes('temperature')) {
      Forecast.weather(tweet, function(text) {
        weatherObj = {status: text}
        Twitter.post('statuses/update', weatherObj,  function(error, tweetReply, response){
          console.log(tweetReply)
        });
      })
    }
    console.log(tweet.text);
  });
});
