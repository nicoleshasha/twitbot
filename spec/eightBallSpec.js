var Magic = require('./models/eightBall.js');

describe("EightBall", function() {

  it("responds with an answer to a question", function(){
    expect(eightBall.responses).toContain(eightBall.answer());
  })



});
