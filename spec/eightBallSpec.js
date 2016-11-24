describe("eightBall", function() {

  var EightBall = function(tweet) {
    this.responses = ["Yes", "No", "Maybe", "Possibly", "Definitely", "Not recommended", "Reconsider", "Are you sure?", "Potentially", "Absolutely"]
  }

 it("responds with an answer to a question", function(){
   eightBall = new EightBall();
   expect(eightBall.responses).toContain("Yes")
 })

});
