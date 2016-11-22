describe("EightBall", function() {

var eightBall = new EightBall();

  // it("can be asked a question", function(){
  //   eightBall.input();
  //   expect(eightBall.input).to
  // });
console.log(eightBall.answer());

  it("responds with an answer to a question", function(){
    expect(eightBall.arrayIterator(eightBall.answer)).toBeTruthy();
  })

});
