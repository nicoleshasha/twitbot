var exports = module.exports = {};

exports.calculator = function(tweet) {
  splitArray = tweet.text.replace(/\£/g,'').split(" ")
  console.log(splitArray)
  sortedArray = splitArray.sort();
  console.log(sortedArray)
  numberFromArray = sortedArray[0]
  console.log(numberFromArray)
  console.log(typeof(numberFromArray))
  numberToFloat = parseFloat(numberFromArray)
  console.log(numberToFloat)
  console.log(typeof(numberToFloat))
  tip = (numberToFloat * 0.10)
  tipString = tip.toString();
  total = (numberToFloat + tip);
  totalString = total.toString();
  return "Hi @" + tweet.user.screen_name +". Your tip is £" + tipString + ", and your total is £" + (totalString);
}
