var TwitterPackage = require('twitter');
var secret = require("./secret");
var Magic = require('./models/EightBall.js');
var Forecast = require('./models/Weather.js');
var Tip = require('./models/Calculator.js');


var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@makers_twit_bot'}, function(stream) {
  stream.on('data', function(tweet) {
    if (tweet.text.includes("#magic8ball")) {
      magicBallReply = Magic.eightBall(tweet)
      ballObj = {status: magicBallReply}
      Twitter.post('statuses/update', ballObj,  function(error, tweetReply, response){
        console.log(tweetReply)
      });
    } else if (tweet.text.includes("#tipCalculator")) {
      tipReply = Tip.calculator(tweet)
      tipObj = {status: tipReply}
      Twitter.post('statuses/update', tipObj,  function(error, tweetReply, response){
        console.log(tweetReply)
      });
    } else if (tweet.text.includes('weather') || tweet.text.includes('temperature')) {
      Forecast.weather(tweet, function(weatherReply) {
        weatherObj = {status: weatherReply}
        Twitter.post('statuses/update', weatherObj,  function(error, tweetReply, response){
          console.log(tweetReply)
        });
      })
    }
    console.log(tweet.text);
  });
});
