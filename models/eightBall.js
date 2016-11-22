function EightBall() {

var array = ["Yes", "No", "Maybe", "Possibly", "Definitely", "Not recommended", "Reconsider", "Are you sure?", "Potentially", "Absolutely"]

EightBall.prototype.answer = function () {
  return array[Math.floor(Math.random() * array.length)];
};

EightBall.prototype.arrayIterator = function (answer) {
    var array = ["Yes", "No", "Maybe", "Possibly", "Definitely", "Not recommended", "Reconsider", "Are you sure?", "Potentially", "Absolutely"]
    for (i = 0; i == array.length; i++){
      if(answer == array[i]) {
        console.log(array[i])
        return true;
        }
      }
    }
};
