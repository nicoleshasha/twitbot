describe("Calculator", function(){

  it("calculates the tip from a tweeted amount", function(){
    tweet = "@makers_twit_bot My bill was £36.85";
    tipping = new Tipping(tweet);
    tip = tipping.calculator();
    expect(tip).toBe("The total is £43.30");
  });

});
