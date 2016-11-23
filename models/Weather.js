var request = require("request");

var exports = module.exports = {};
exports.weather = function(tweet) {
  console.log("tweet in weather js:")
  console.log(tweet);
  var replyArray = [];
  var splitArray = tweet.text.replace(/\?/g,'').split(' ');
  if (splitArray.includes('weather') || splitArray.includes('temperature')) {
    var cities = ['London','Vancouver','Montevideo','Havana','Dublin','Bristol','Brasilia','Nicosia','Paris','Miami','Sydney','Liverpool','Tokyo','Madrid','Moscow','Beijing','Mumbai','Cairo','Manchester','Timbuktu','Auckland'];
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
      var replyStatus = "Hi @" + tweet.user.screen_name + ", the temperature in " + city + " is "+ tempString+"°C"
      console.log("reply status in weather js:")
      console.log(replyStatus);
      replyArray.push(replyStatus)
      console.log("array in request:");
      console.log(replyArray);
    });
  }
  console.log("reply array before return:");
  console.log(replyArray);
  return replyArray[0];
};
