var exports = module.exports = {};

exports.calculator = function(tweet) {
  splitArray = tweet.text.replace(/\£/g,'').split(" ")
  sortedArray = splitArray.sort();
  numberFromArray = sortedArray[1]
  numberToFloat = parseFloat(numberFromArray)
  tip = (numberToFloat * 0.10)
  tipString = tip.toFixed(2);
  total = (numberToFloat + tip);
  totalString = total.toFixed(2);
  return "Hi @" + tweet.user.screen_name +". Your tip is £" + tipString + ", and your total is £" + (totalString);
}
