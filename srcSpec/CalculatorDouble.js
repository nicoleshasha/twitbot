var Tipping = function(tweet){
  this.tweet = [];
  this.tweet.push(tweet);
};

Tipping.prototype.calculator = function() {
  var tweeted = this.tweet[0];
  splitArray = tweeted.replace(/\£/g,'').split(" ");
  sortedArray = splitArray.sort();
  numberFromArray = sortedArray[0];
  numberToFloat = parseFloat(numberFromArray);
  tip = (numberToFloat * 0.175);
  tipString = tip.toFixed(2);
  total = (numberToFloat + tip);
  totalString = total.toFixed(2);
  return "The total is £" + totalString;
};
