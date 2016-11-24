var Weather = function(){
  this.cities = ['London','Vancouver','Montevideo','Havana','Dublin','Bristol','Brasilia','Nicosia','Paris','Miami','Sydney','Liverpool','Tokyo','Madrid','Moscow','Beijing','Mumbai','Cairo','Manchester','Timbuktu','Auckland']
}

Weather.prototype.city = function(tweet) {
  var replyArray = [];
  var splitArray = tweet.replace(/\?/g,'').split(' ');
  var arr = splitArray.concat(cities);
  var sortedArr = arr.sort();
  var result = [];
  for (var i = 0; i < arr.length - 1; i++) {
    if (sortedArr[i + 1] == sortedArr[i]) {
      result.push(sortedArr[i]);
    }
  }
}
