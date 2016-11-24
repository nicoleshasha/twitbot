var EightBall = function(tweet) {
  this.responses = ["Yes", "No", "Maybe", "Possibly", "Definitely", "Not recommended", "Reconsider", "Are you sure?", "Potentially", "Absolutely"]
}

EightBall.prototype.eightBall = function (username) {
  return "Hi @" + username + " " + this.responses[Math.floor(Math.random() * this.responses.length)];
};
