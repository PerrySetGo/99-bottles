describe('bottleCount', function() {

	it("bottleCount is a function", function() {
  expect(bottleCount).to.be.a('function');
  });

  it("takes an input and returns a changed input to the screen", function() {
  expect(bottleCount(10)).to.be.not.equal(10);
  });

  it("takes an input and returns lower input to the screen", function() {
  expect(bottleCount(10)).to.be.below(10);
  });
 });