describe("EightBall", function() {

var eightBall = new EightBall();

  it("responds with an answer to a question", function(){
    expect(eightBall.responses).toContain(eightBall.answer());
  })

  

});
