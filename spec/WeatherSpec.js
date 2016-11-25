describe("Weather", function(){

  beforeEach(function(){
    Forecast = new Weather();
  });

  it("expects an array to hold cities", function(){
    expect(Forecast.cities).toContain("Bristol");
  });

  it("extracts the city from the tweet", function(){
    tweet = "What is the weather in Vancouver?";
    expect(Forecast.city(tweet)).toBe("Vancouver");
  });

});
