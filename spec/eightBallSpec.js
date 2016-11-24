describe("eightBall", function() {

 beforeEach(function(){
   Magic = new EightBall();
 })

 it("responds with an answer to a question", function(){
   expect(Magic.responses).toContain("Yes")
 })

 it("responds with the username of the person that tweeted it", function(){
   expect(Magic.eightBall("NicoleShasha")).toContain("Hi @NicoleShasha")
 })

});
