describe("Weather", function(){

  beforeEach(function(){
    Forecast = new Weather();
  })

  it("expects an array to hold cities", function(){
    expect(Forecast.cities).toContain("Bristol")
  })


});
