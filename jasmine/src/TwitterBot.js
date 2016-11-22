var TwitterPackage = require('twitter');
var secret = require("../secret");
var request = require("request");

var twitterBot = new TwitterPackage(secret);

twitterBot.stream('statuses/filter', {track: '@makers_twit_bot'}, function(stream) {

  stream.on('data', function(tweet) {
    var splitArray = tweet.text.replace(/\?/g,'').split(' ');
    if (splitArray.includes('weather') || splitArray.includes('temperature')) {
      var cities = ['London', 'Vancouver', 'Montevideo', 'Havana', 'Dublin', 'Brasilia', 'Nicosia', 'Paris', 'Miami', 'Sydney', 'Tokyo', 'Madrid', 'Moscow', 'Beijing', 'Mumbai', 'Cairo', 'Manchester', 'Timbuktu', 'Auckland'];
      var arr = splitArray.concat(cities);
      var sortedArr = arr.sort();
      var result = [];
      for (var i = 0; i < arr.length - 1; i++) {
        if (sortedArr[i + 1] == sortedArr[i]) {
          result.push(sortedArr[i]);
        }
      }



    var city = result[0];
    request("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=134d393fd68fd2c3c4db178a50b5ddb8", function(error2,response2,body2) {
      weather = JSON.parse(body2);
      tempNum = weather.main.temp;
      tempString = tempNum.toString();

      var statusObj = {status: "Hi @" + tweet.user.screen_name + ", the temperature in " + city + " is "+ tempString+"°C"};
      twitterBot.post('statuses/update', statusObj,  function(error, tweetReply, response){
        if(error){
          console.log(error);
        }
        console.log(tweetReply.text);
      });
    });
  }
});
  // ... when we get an error...
  stream.on('error', function(error) {
    //print out the error
    console.log(error);
  });
});
