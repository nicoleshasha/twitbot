function EightBall() {

  this.responses = ["Yes", "No", "Maybe", "Possibly", "Definitely", "Not recommended", "Reconsider", "Are you sure?", "Potentially", "Absolutely"]

};

EightBall.prototype.answer = function () {
  return this.responses[Math.floor(Math.random() * this.responses.length)];
};
