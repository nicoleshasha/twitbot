var exports = module.exports = {};

exports.eightBall = function(tweet) {
  var responses = ["Yes", "No", "Maybe", "Possibly", "Definitely", "Not recommended", "Reconsider", "Are you sure?", "Potentially", "Absolutely"]
    return responses[Math.floor(Math.random() * responses.length)];
}
