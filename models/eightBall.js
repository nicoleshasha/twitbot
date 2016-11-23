var exports = module.exports = {};
//
// // exports.responses = ["Yes", "No", "Maybe", "Possibly", "Definitely", "Not recommended", "Reconsider", "Are you sure?", "Potentially", "Absolutely"]
// //
// // exports.answer = function () {
// //   return this.responses[Math.floor(Math.random() * this.responses.length)];
// // };
//
exports.eightBall = function(tweet) {
  var responses = ["Yes", "No", "Maybe", "Possibly", "Definitely", "Not recommended", "Reconsider", "Are you sure?", "Potentially", "Absolutely"]

  if (tweet.text.includes("#magic8ball")) {
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

// Code below works partially- node console outputs it as a key: value pair

// (function(exports){
//
//   function EightBall() {
//
//   this.responses = ["Yes", "No", "Maybe", "Possibly", "Definitely", "Not recommended", "Reconsider", "Are you sure?", "Potentially", "Absolutely"]
//
// };
//
// EightBall.prototype.answer = function () {
//   return this.responses[Math.floor(Math.random() * this.responses.length)];
// };
//
//   exports.EightBall = EightBall;
//
// })(this);
