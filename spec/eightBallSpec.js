describe("eightBall", function() {

  var EightBall = function(tweet) {
    this.responses = ["Yes", "No", "Maybe", "Possibly", "Definitely", "Not recommended", "Reconsider", "Are you sure?", "Potentially", "Absolutely"]
  }

  EightBall.prototype.answer = function (username) {
    return "Hi @" + username + " " + this.responses[Math.floor(Math.random() * this.responses.length)];
 };

 beforeEach(function(){
   eightBall = new EightBall();
 })

 it("responds with an answer to a question", function(){
   expect(eightBall.responses).toContain("Yes")
 })

 it("responds with the username of the person that tweeted it", function(){
   expect(eightBall.answer("NicoleShasha")).toContain("Hi @NicoleShasha")
 })

});
